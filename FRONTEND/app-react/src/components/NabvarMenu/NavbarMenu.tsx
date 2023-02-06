import { NavLink } from "../NavLink/NavLink";

export const NavbarMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <h2 className="">System DK</h2>
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
          <ul className="navbar-nav">
            <NavLink to="/">Productos</NavLink>

            <ul className="nav-item dropdown">
              <li
                className="nav-link dropdown-toggle"
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
