// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { BrandLogo } from "./BrandLogo";
import { useCart } from "../../context/CartContext";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/services", label: "Servicios" },
  { to: "/products", label: "Productos" },
];

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

function CartSidebar({ isOpen, onClose }) {
  const { cart, cartTotal, removeFromCart } = useCart(); // ← Agregado removeFromCart

  return (
    <div
      className={`cart-sidebar position-fixed top-0 end-0 h-100 bg-white shadow-lg p-3 transition ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{
        width: "320px",
        zIndex: 1050,
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="m-0">Carrito de compras</h5>
        <button className="btn btn-sm btn-close" onClick={onClose}></button>
      </div>

      {cart.length === 0 ? (
        <p className="text-muted">El carrito está vacío.</p>
      ) : (
        <>
          <ul className="list-group list-group-flush">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex align-items-start gap-2"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "contain",
                  }}
                  className="me-2"
                />

                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between">
                    <div className="fw-semibold">{item.title}</div>
                  </div>
                  <button
                    className="btn btn-sm btn-outline-danger py-0 px-2"
                    onClick={() => removeFromCart(item.id, item.quantity)}
                    title="Eliminar producto"
                  >
                    🗑️
                  </button>
                  <small className="text-muted">
                    {item.quantity} x ${item.price.toFixed(2)}
                  </small>
                </div>

                <strong className="text-nowrap">
                  ${(item.price * item.quantity).toFixed(2)}
                </strong>
              </li>
            ))}
          </ul>

          {/* TOTAL AL FINAL */}
          <div className="mt-4 border-top pt-3 text-end">
            <h5 className="fw-bold">
              Total a pagar:{" "}
              <span className="text-success">${cartTotal.toFixed(2)}</span>
            </h5>
          </div>
        </>
      )}
    </div>
  );
}

function CartIcon({ onClick }) {
  const { cartCount } = useCart();

  return (
    <button
      className="btn nav-link position-relative"
      aria-label="Carrito de compras"
      onClick={onClick}
      style={{ background: "none", border: "none" }}
    >
      <FiShoppingCart className="fs-5" />
      {cartCount > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartCount}
        </span>
      )}
    </button>
  );
}

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
              {links.map(({ to, label }, index) => (
                <NavItem key={index} to={to} label={label} />
              ))}
              <li className="nav-item position-relative">
                <CartIcon onClick={() => setSidebarOpen(true)} />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Panel lateral */}
      <CartSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}

export default Navbar;
