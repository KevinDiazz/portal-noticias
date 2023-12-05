import "./App.css";
import Content from "./componentes/content";
import Nav from "./componentes/nav";
import useFecthDatos from "./componentes/fetchData";
import ButtonUp from "./componentes/buttonUp";
function App() {
 const{datos,tema,setDatos,setTema,getInfo} = useFecthDatos()

  return (
    <>
      <Nav
        getDatos={getInfo}
        updateDatos={setDatos}
        updateTema={setTema}
      ></Nav>
      <Content datos={datos} tema={tema}></Content>
      <ButtonUp></ButtonUp>
    </>
  );
}

export default App;
