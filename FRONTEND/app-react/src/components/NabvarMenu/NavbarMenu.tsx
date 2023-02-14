import { NavLink } from "../NavLink/NavLink";
import "./StyleNavbarMenu.css";
export const NavbarMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary height-medium-devices d-flex align-items-md-start">
      <div className="container-fluid d-md-flex flex-md-column">
        <h2 className="mb-md-4 fs-1">System DK</h2>
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
          className=" collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav  flex-md-column justify-content-md-center align-items-md-center px-3">
            <NavLink to="/">Productos</NavLink>

            <ul className="nav-item dropdown p-0">
              <li
                className="nav-link dropdown-toggle fs-5"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Añadir
              </li>
              <ul className="dropdown-menu">
                <NavLink to="/añadir-producto">Nuevo Producto</NavLink>
                <NavLink to="/añadir-categoria">Nueva Categoria</NavLink>
              </ul>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};
