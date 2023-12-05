import { useEffect, useState } from "react";

export async function getInfoNews(categoria, tipoContenido, setDatos, setTema) {
  if (!(tipoContenido === "everything")) {
    try {
      const data = await fetch(
        "https://newsapi.org/v2/" +
          tipoContenido +
          "?category=" +
          categoria +
          "&pageSize=20&language=en&apiKey=b551bf8f7a6c49c39684ed54954d4945"
      );
      const info = await data.json();
      setDatos(info.articles);
      setTema(categoria);
    } catch (error) {
      console.error("Ocurrió un error:", error.message);
    }
  } else {
    try {
      const data = await fetch(
        "https://newsapi.org/v2/" +
          tipoContenido +
          "?q=" +
          categoria +
          "&pageSize=20&language=en&apiKey=b551bf8f7a6c49c39684ed54954d4945"
      );
      const info = await data.json();
      setDatos(info.articles);
      setTema(categoria);
    } catch (error) {
      console.error("Ocurrió un error:", error.message);
    }
  }
}

const useFecthDatos = () => {
  const [datos, setDatos] = useState(null);
  const [tema, setTema] = useState(null);
  useEffect(() => {
    getInfoNews("general", "top-headlines", setDatos, setTema);
    console.log("me he ejecutado");
  }, []);

  const getInfo = getInfoNews;

  return { datos, tema, setDatos, setTema, getInfo };
};
export default useFecthDatos;
