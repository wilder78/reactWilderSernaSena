// AvailabilityFilter.jsx
import React from "react";

const AvailabilityFilter = () => (
  <div className="mb-3">
    <h6 className="fw-bold mb-3">
      <i className="bi bi-box-seam me-2"></i>Disponibilidad
    </h6>
    <div className="form-switch mb-2">
      <input
        className="form-check-input"
        type="checkbox"
        id="inStock"
        defaultChecked
        role="switch"
      />
      <label className="form-check-label" htmlFor="inStock">
        En stock
      </label>
    </div>
    <div className="form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id="outOfStock"
        role="switch"
      />
      <label className="form-check-label" htmlFor="outOfStock">
        Mostrar agotados
      </label>
    </div>
  </div>
);

export default AvailabilityFilter;
