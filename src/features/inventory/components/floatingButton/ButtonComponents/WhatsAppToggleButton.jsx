import React from "react";

export const WhatsAppToggleButton = ({ onClick }) => {
  return (
    <button
      className="btn-flotante"
      title="Contactar por WhatsApp"
      onClick={onClick}
    >
      <i className="bi bi-whatsapp"></i>
    </button>
  );
};
