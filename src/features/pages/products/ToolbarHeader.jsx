import React from "react";

// Si importabas CartContext aquí o en archivos relacionados, asegúrate de actualizar la ruta de importación.
// Por ejemplo, si antes era:
// import { CartContext } from "../../cartContext";
// y ahora está en shared/context/cartContext.jsx, debe ser:
// import { CartContext } from "../../shared/context/cartContext";

// Este archivo no muestra dependencias directas de CartContext, pero revisa los archivos donde lo uses y actualiza la ruta de importación según la nueva ubicación.

const ToolbarHeader = ({
  title = "Explora Todos Nuestros Relojes",
  onSearch = () => {},
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
      <h2 className="text-primary mb-0">
        <i className="bi bi-grid-fill"></i> {title}
      </h2>
      <div className="d-flex">
        <div className="input-group me-3" style={{ width: "250px" }}>
          <span className="input-group-text bg-white">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Buscar productos..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ToolbarHeader;
