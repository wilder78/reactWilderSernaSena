import React from "react";

export const WhatsAppMenu = ({ onClose }) => {
  const options = [
    { label: "Vendedor norte", number: "573001112233" },
    { label: "Vendedor sur", number: "573004445566" },
    { label: "Oficina", number: "573007778899" },
  ];

  return (
    <ul className="whatsapp-options">
      <button className="cerrar-menu" onClick={onClose} title="Cerrar menú">
        ✖️
      </button>
      {options.map((opt) => (
        <li key={opt.number}>
          <a
            href={`https://wa.me/${opt.number}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {opt.label}
          </a>
        </li>
      ))}
    </ul>
  );
};
