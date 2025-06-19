// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

// Datos de navegación
const links = [
  { to: "/", label: "Inicio" },
  { to: "/services", label: "Servicios" },
  { to: "/products", label: "Productos" },
];

// Componente para ítems del menú
function NavItem({ to, label, className = "" }) {
  return (
    <li className="nav-item">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `nav-link ${className} ${isActive ? "active fw-bold" : ""}`
        }
      >
        {label}
      </NavLink>
    </li>
  );
}

// Botón de menú hamburguesa
function ButtonToggler() {
  return (
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
  );
}

// Componente de logo de marca (puedes modificar el contenido)
function BrandLogo() {
  return (
    <a className="navbar-brand" href="/">
      <img src="/logo.png" alt="Logo" style={{ height: "40px" }} />
    </a>
  );
}

// Componente del carrito (simulado para este ejemplo)
function Cart() {
  return (
    <NavLink to="/cart" className="nav-link">
      🛒
    </NavLink>
  );
}

// Navbar principal
function Navbar() {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        <BrandLogo />
        <ButtonToggler />

        <div className="collapse navbar-collapse" id="navbar-toggler">
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">
            {links.map(({ to, label }, index) => (
              <NavItem key={index} to={to} label={label} />
            ))}
            <li className="nav-item">
              <Cart />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
