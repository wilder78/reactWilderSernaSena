// FilterToggleButton.jsx
import React from "react";

const FilterToggleButton = ({ showFilters, setShowFilters }) => (
  <button
    className={`btn w-100 d-flex align-items-center justify-content-center ${
      showFilters ? "btn-primary" : "btn-outline-primary"
    }`}
    onClick={() => setShowFilters(!showFilters)}
    aria-expanded={showFilters}
    aria-controls="filtersCollapse"
  >
    <i
      className={`bi me-2 ${
        showFilters ? "bi-filter-circle-fill" : "bi-filter-circle"
      }`}
    ></i>
    {showFilters ? "Ocultar filtros" : "Mostrar filtros"}
    <i
      className={`bi ms-2 ${showFilters ? "bi-chevron-up" : "bi-chevron-down"}`}
    ></i>
  </button>
);

export default FilterToggleButton;
