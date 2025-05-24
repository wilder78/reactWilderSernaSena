// FilterActions.jsx
import React from "react";

const FilterActions = ({ onReset }) => (
  <div className="d-grid gap-2">
    <button className="btn btn-primary">
      <i className="bi bi-funnel-fill me-2"></i>Aplicar Filtros
    </button>
    <button className="btn btn-outline-secondary" onClick={onReset}>
      <i className="bi bi-arrow-counterclockwise me-2"></i>Limpiar
    </button>
  </div>
);

export default FilterActions;
