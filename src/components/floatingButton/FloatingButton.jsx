import React from "react";
// import React, { useState } from "react";
import "./FloatingButton.css";

function FloatingButton() {
  // const [isPopupVisible, setPopupVisible] = useState(false);

  // Función para abrir la ventana flotante
  const handleButtonClick = () => {
    // Abrir WhatsApp en una nueva pestaña
    window.open("https://api.whatsapp.com/send?phone=573008020969", "_blank");
  };

  return (
    <div>
      {/* Botón flotante */}
      <button className="floating-btn" onClick={handleButtonClick}>
        <i className="bi bi-whatsapp"></i>
      </button>
    </div>
  );
}

export default FloatingButton;
