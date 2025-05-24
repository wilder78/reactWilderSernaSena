// ProductToolbar.jsx
import React from "react";
import "./ProductToolbar.css";

const ProductToolbar = ({
  title = "Explora Todos Nuestros Relojes",
  onSearch,
  onSortChange,
  sortOptions = [],
  selectedSort = "",
  onViewChange,
  currentView = "grid"
}) => (
  <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3 flex-wrap gap-3">
    <h2 className="titulo-productos mb-0">
      <i className="bi bi-grid-fill me-2"></i>{title}
    </h2>

    <div className="d-flex align-items-center flex-wrap gap-2">

      {/* Buscador */}
      <div className="input-group me-3 input-search-width">
        <span className="input-group-text bg-white">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar productos..."
          aria-label="Buscar productos"
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>

      {/* Ordenamiento */}
      {sortOptions.length > 0 && (
        <>
          <span className="me-2 small text-muted">Ordenar por:</span>
          <select
            className="form-select form-select-sm w-auto me-3"
            value={selectedSort}
            onChange={(e) => onSortChange?.(e.target.value)}
          >
            {sortOptions.map((opt, i) => (
              <option key={i} value={opt}>{opt}</option>
            ))}
          </select>
        </>
      )}

      {/* Vista tipo grid o lista */}
      {onViewChange && (
        <div className="btn-group btn-group-sm" role="group">
          <button
            type="button"
            className={`btn btn-outline-secondary ${currentView === "grid" ? "active" : ""}`}
            onClick={() => onViewChange("grid")}
          >
            <i className="bi bi-grid-fill"></i>
          </button>
          <button
            type="button"
            className={`btn btn-outline-secondary ${currentView === "list" ? "active" : ""}`}
            onClick={() => onViewChange("list")}
          >
            <i className="bi bi-list-ul"></i>
          </button>
        </div>
      )}
    </div>
  </div>
);

export default ProductToolbar;


