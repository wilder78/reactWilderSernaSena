// src/components/CartSidebar.jsx
import React from "react";
import { useCart } from "../../components/CartContext"; // Asegúrate que la ruta sea correcta

function CartSidebar({ isOpen, onClose }) {
  const { cart, cartTotal, removeFromCart } = useCart();

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

export default CartSidebar;
