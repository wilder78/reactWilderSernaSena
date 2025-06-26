// src/components/NavItem.jsx
import React from "react";
import { NavLink } from "react-router-dom";

function NavItem({ to, label, className = "", isButton = false }) {
  return (
    <li className="nav-item">
      {isButton ? (
        <NavLink to={to} className={`btn btn-primary px-3 py-1 ${className}`}>
          {label}
        </NavLink>
      ) : (
        <NavLink
          to={to}
          className={({ isActive }) =>
            `nav-link ${className} ${isActive ? "active fw-bold" : ""}`
          }
        >
          {label}
        </NavLink>
      )}
    </li>
  );
}

export default NavItem;
