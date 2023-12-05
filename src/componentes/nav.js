import { useState } from "react";
import "../css/nav-style.css";
function Nav({getDatos, updateTema, updateDatos }) {
  const [valorInput, setValorInput] = useState("");

  const handleChange = (event) => {
    setValorInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getDatos(valorInput, "everything",updateDatos,updateTema);
    setValorInput("")
  };

  function viewScreen() {
    if (window.innerWidth < 990) {
      document.getElementsByClassName("navbar-toggler")[0].click();
    }
  }

return (
    <>
      <div className="container-nav">
        <h1 className="text-center fs-1">World News</h1>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="col-12">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="span-item navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 gap-3 d-flex justify-content-evenly col-12">
                <li
                  className="nav-item d-flex justify-content-start align-items-center p-2"
                  onClick={() => {
                    getDatos("sports","top-headlines",updateDatos,updateTema);
                    viewScreen();
                  }}
                >
                  <img
                    className="logo-nav me-1"
                    alt="logo-img"
                    src={require("../Images/icons/futbol-americano.png")}
                  ></img>
                  Sports
                </li>
                <li
                  className="nav-item d-flex justify-content-start align-items-center p-2"
                  onClick={() => {
                    getDatos("science","top-headlines",updateDatos,updateTema);
                    viewScreen()
                  }}
                >
                  <img
                    className="logo-nav me-1"
                    src={require("../Images/icons/data-science.png")} alt="img-logo"
                  ></img>
                  Science
                </li>
                <li
                  className="nav-item d-flex justify-content-start align-items-center p-2"
                  onClick={() => {
                    getDatos("general","top-headlines",updateDatos,updateTema)
                   viewScreen()
                  }}
                >
                  <img
                    className="logo-nav me-1"
                    src={require("../Images/icons/en-todo-el-mundo.png")} alt="img-logo"
                  ></img>
                  General
                </li>
                <li
                  className="nav-item d-flex justify-content-start align-items-center p-2"
                  onClick={() => {
                    getDatos("health","top-headlines",updateDatos,updateTema);
                    viewScreen()
                  }}
                >
                  <img
                    className="logo-nav me-1"
                    src={require("../Images/icons/medico.png")} alt="img-logo"
                  ></img>
                  Health
                </li>
                <li
                  className="nav-item d-flex justify-content-start align-items-center p-2"
                  onClick={() => {
                    getDatos("technology","top-headlines",updateDatos,updateTema);
                   viewScreen()
                  }}
                >
                  <img
                    className="logo-nav me-1"
                    src={require("../Images/icons/gestion-de-datos.png")} alt="img-logo"
                  ></img>
                  Technology
                </li>
                <li
                  className="nav-item d-flex justify-content-start align-items-center p-2"
                  onClick={() => {
                    getDatos("business","top-headlines",updateDatos,updateTema);
                    viewScreen()
                  }}
                >
                  <img
                    className="logo-nav me-1"
                    src={require("../Images/icons/grafico-empresarial.png")} alt="img-logo"
                  ></img>
                  Business
                </li>
                <li
                  className="nav-item d-flex justify-content-start align-items-center p-2"
                  onClick={() => {
                    getDatos("entertainment","top-headlines",updateDatos,updateTema);
                    viewScreen()
                  }}
                >
                  <img
                    className="logo-nav me-1"
                    src={require("../Images/icons/mascara.png")} alt="img-logo"
                  ></img>
                  Entertainment
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <form
        className="d-flex col-12 justify-content-xl-center justify-content-center mt-2"
        role="search"
        onSubmit={handleSubmit}
      >
        <input
          className="col-6"
          type="search"
          placeholder="Search topics that interest you to see the latest news. like bitcoin, madrid, messi"
          aria-label="Search"
          value={valorInput}
          onChange={handleChange}
        ></input>
        <button role="button searchNews" className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </>
  );
}
export default Nav;
