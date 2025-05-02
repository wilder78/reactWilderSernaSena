// FloatingButton.jsx
import React from "react";
import "./FloatingButton.css";

function FloatingButton() {
  return (
    <button className="floating-btn" onClick={() => alert("¡Botón flotante!")}>
      +
    </button>
  );
}

export default FloatingButton;
