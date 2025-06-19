import React from "react";

const ToolbarHeader = ({
  title = "Explora Todos Nuestros Relojes",
  onSearch,
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
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ToolbarHeader;
