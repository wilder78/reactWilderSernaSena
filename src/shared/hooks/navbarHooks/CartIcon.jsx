// src/components/CartIcon.jsx
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../components/CartContext";

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

export default CartIcon;
