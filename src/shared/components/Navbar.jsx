// src/components/Navbar.jsx
import React, { useState } from "react";
import { BrandLogo } from "../hoks/navbarHoks/BrandLogo";
import NavItem from "../hoks/navbarHoks/NavItem";
import ButtonToggler from "../hoks/navbarHoks/ButtonToggler";
import CartIcon from "../hoks/navbarHoks/CartIcon";
import CartSidebar from "../hoks/navbarHoks/CartSidebar";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/services", label: "Servicios" },
  { to: "/products", label: "Productos" },
  { to: "/login", label: "Iniciar Sesión" },
];

<NavItem />;
<ButtonToggler />;
<CartSidebar />;
<CartIcon />;

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <BrandLogo />
          <ButtonToggler />
          <div className="collapse navbar-collapse" id="navbar-toggler">
            <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">
              {links.slice(0, -1).map(({ to, label }, index) => (
                <NavItem key={index} to={to} label={label} />
              ))}

              {/* Botón de Login */}
              <NavItem
                to={links[links.length - 1].to}
                label={links[links.length - 1].label}
                isButton={true}
              />

              <li className="nav-item position-relative">
                <CartIcon onClick={() => setSidebarOpen(true)} />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <CartSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}

export default Navbar;
