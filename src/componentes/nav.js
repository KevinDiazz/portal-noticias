import "../css/nav-style.css";
function Nav() {
  return (
    <>
      <h1 className="text-center">El Periódico Central</h1>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="col-12 col-xl-12 ">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 d-flex  justify-content-center col-xl-12">
              <li className="nav-item d-flex justify-content-start align-items-center">
                <img
                  className="logo-nav ms-md-2 me-xl-0 me-3"
                  alt="logo-img"
                  src={require("../Images/icons/futbol-americano.png")}
                ></img>
                <a
                  className="nav-link active text-end text-xl-center"
                  aria-current="page"
                  href="#"
                >
                  Deportes
                </a>
              </li>
              <li className="nav-item d-flex justify-content-start align-items-center">
                <img
                  className="logo-nav  ms-md-2  me-xl-0 me-3"
                  src={require("../Images/icons/data-science.png")}
                ></img>
                <a
                  className="nav-link active  text-end text-xl-center"
                  aria-current="page"
                  href="#"
                >
                  Ciencia
                </a>
              </li>
              <li className="nav-item d-flex justify-content-start align-items-center">
                <img
                  className="logo-nav  ms-md-2 me-3  me-xl-0"
                  src={require("../Images/icons/en-todo-el-mundo.png")}
                ></img>
                <a
                  className="nav-link active  text-end"
                  aria-current="page"
                  href="#"
                >
                  General
                </a>
              </li>
              <li className="nav-item d-flex justify-content-start align-items-center">
                <img
                  className="logo-nav  ms-md-2  me-xl-0 me-3 "
                  src={require("../Images/icons/medico.png")}
                ></img>
                <a
                  className="nav-link active text-end"
                  aria-current="page"
                  href="#"
                >
                  Salud
                </a>
              </li>
              <li className="nav-item d-flex justify-content-start align-items-center">
                <img
                  className="logo-nav  ms-md-2  me-xl-0 me-3"
                  src={require("../Images/icons/gestion-de-datos.png")}
                ></img>
                <a
                  className="nav-link active text-end"
                  aria-current="page"
                  href="#"
                >
                  Tecnologia
                </a>
              </li>
              <li className="nav-item d-flex justify-content-start align-items-center">
                <img
                  className="logo-nav  ms-md-2 me-xl-0 me-3"
                  src={require("../Images/icons/grafico-empresarial.png")}
                ></img>
                <a className="nav-link text-end" href="#">
                  Economia
                </a>
              </li>
              <li className="nav-item d-flex justify-content-start align-items-center">
                <img
                  className="logo-nav  ms-md-2 me-xl-0 me-3"
                  src={require("../Images/icons/mascara.png")}
                ></img>
                <a className="nav-link text-end" href="#">
                  Entretenimiento
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <form
        className="d-flex col-12 justify-content-xl-center justify-content-center"
        role="search"
      >
        <input
          className="col-6"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </>
  );
}
export default Nav;
