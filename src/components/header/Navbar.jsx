import React from "react";
import logo from "../../../public/image/LogoMs2.png";
import "./Navbar.css";

// Navbar component. This component renders a navigation bar with links to different sections of the website.
function Navbar() {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} width="40" alt="LogoMs2" />
          WM. Watch Repair
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-toggler"
          aria-controls="navbar-toggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-toggler">
          <ul className="navbar-nav d-flex justify-content-center align-items-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contactanos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Nosotros
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
