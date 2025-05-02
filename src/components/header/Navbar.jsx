import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/image/LogoMs2.png"; // ruta directa para Vite
import "./Navbar.css";

// Componente para el logo de la marca
function BrandLogo() {
  return (
    <NavLink
      to="/"
      className="navbar-brand d-flex align-items-center gap-2"
      aria-label="Página principal WM. Watch Repair"
    >
      <img src={logo} width="40" alt="Logo WM Watch Repair" />
      WM. Watch Repair
    </NavLink>
  );
}

// Componente reutilizable para los ítems de navegación
function NavItem({ to, label }) {
  return (
    <li className="nav-item">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `nav-link ${isActive ? "active fw-bold" : ""}`
        }
      >
        {label}
      </NavLink>
    </li>
  );
}

function Navbar() {
  const links = [
    { to: "/", label: "Inicio" },
    { to: "/services", label: "Servicios" },
    { to: "/products", label: "Productos" },
    { to: "/contact", label: "Contáctanos" },
    { to: "/about", label: "Nosotros" },
  ];

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        <BrandLogo />
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
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            {links.map((link, index) => (
              <NavItem key={index} to={link.to} label={link.label} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
