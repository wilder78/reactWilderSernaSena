import React from "react";

const ProductControls = () => (
  <div className="d-flex justify-content-between align-items-center mb-4">
    <h3 className="text-success mb-0">
      <i className="bi bi-stars me-2"></i>Productos recomendados
    </h3>
    <div className="d-flex align-items-center">
      <span className="me-2 small text-muted">Ordenar por:</span>
      <select className="form-select form-select-sm w-auto me-3">
        <option defaultValue>Destacados</option>
        <option>Precio: menor a mayor</option>
        <option>Precio: mayor a menor</option>
        <option>Más vendidos</option>
        <option>Novedades</option>
      </select>
      <div className="btn-group btn-group-sm" role="group">
        <button type="button" className="btn btn-outline-secondary active">
          <i className="bi bi-grid-fill"></i>
        </button>
        <button type="button" className="btn btn-outline-secondary">
          <i className="bi bi-list-ul"></i>
        </button>
      </div>
    </div>
  </div>
);

export default ProductControls;
