import { NavLink } from "../NavLink/NavLink";
import "./StyleNavbarMenu.css";
export const NavbarMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg  d-flex align-items-md-start sticky-top my-nabvar-menu p-0">
      <div className="container-fluid d-md-flex flex-md-column p-0">
        <figure className="container-figure">
          <img
            className="container-figure__img"
            src="./assets/images/LogoTienda-Inventario.svg"
            alt="LogoTienda-inventario.svg"
          />
        </figure>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className=" collapse navbar-collapse justify-content-end w-100"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav flex-md-column justify-content-md-center align-items-md-center w-100 text-center">
            <NavLink to="/">
              <div className="container-icon-text-button">
                <img
                  src="./assets/icons/icon-Productos.svg"
                  alt="icono-productos"
                  className="container-icon-text-button__icon-button"
                />{" "}
                Productos
              </div>
            </NavLink>

            <ul className="nav-item dropdown p-0 w-100">
              <li
                className="nav-link fw-bold text-black dropdown-toggle fs-5 p-0 m-0"
                style={{ width: "100%", overflow: "hidden" }}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="container-icon-text-button">
                  <img
                    src="./assets/icons/icon-add-general.svg"
                    alt="icono-productos"
                    className="container-icon-text-button__icon-button"
                  />{" "}
                  Añadir
                </div>
              </li>
              <ul style={{ minWidth: "12rem" }} className="dropdown-menu w-100">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <NavLink to="/añadir-producto">
                    <div className="container-icon-text-button">
                      <img
                        src="./assets/icons/icon-new-producto.svg"
                        alt="icono-productos"
                        className="container-icon-text-button__icon-button"
                      />{" "}
                      Nuevo Producto
                    </div>
                  </NavLink>
                  <NavLink to="/añadir-categoria">
                    <div className="container-icon-text-button">
                      <img
                        src="./assets/icons/icon-new-categoria.svg"
                        alt="icono-productos"
                        className="container-icon-text-button__icon-button"
                      />{" "}
                      Nueva Categoria
                    </div>
                  </NavLink>
                </div>
              </ul>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};
