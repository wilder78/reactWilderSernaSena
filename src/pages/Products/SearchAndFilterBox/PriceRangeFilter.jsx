// PriceRangeFilter.jsx
import React from "react";

const PriceRangeFilter = () => (
  <div className="mb-4">
    <h6 className="fw-bold mb-3">
      <i className="bi bi-currency-dollar me-2"></i>Rango de precios
    </h6>
    <input
      type="range"
      className="form-range mb-3"
      min="0"
      max="1000"
      step="50"
      id="priceRange"
    />
    <div className="d-flex justify-content-between">
      <span className="badge bg-light text-dark">$0</span>
      <span className="badge bg-light text-dark">$500</span>
      <span className="badge bg-light text-dark">$1000</span>
    </div>
  </div>
);

export default PriceRangeFilter;
