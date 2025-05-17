import React, { useState } from "react";
import WhatsAppPopup from "./ButtonComponents/WhatsAppPopup";
import "./FloatingButton.css";

function FloatingButton() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const whatsappContacts = [
    { label: "Soporte Técnico", number: "573008020969" },
    { label: "Ventas", number: "573111223344" },
    { label: "Atención al Cliente", number: "573300445566" },
  ];

  return (
    <div>
      <button
        className="floating-btn"
        onClick={() => setPopupVisible(!isPopupVisible)}
      >
        <i className="bi bi-whatsapp"></i>
      </button>

      {isPopupVisible && (
        <WhatsAppPopup
          contacts={whatsappContacts}
          onClose={() => setPopupVisible(false)}
        />
      )}
    </div>
  );
}

export default FloatingButton;
