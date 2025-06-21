import React, { useState } from "react";

function StockFilter({ onChange }) {
  const [inStock, setInStock] = useState(true);
  const [outOfStock, setOutOfStock] = useState(false);

  const handleInStockChange = (e) => {
    setInStock(e.target.checked);
    if (onChange) onChange({ inStock: e.target.checked, outOfStock });
  };

  const handleOutOfStockChange = (e) => {
    setOutOfStock(e.target.checked);
    if (onChange) onChange({ inStock, outOfStock: e.target.checked });
  };

  return (
    <div className="mb-3">
      <h6 className="fw-bold mb-3">Disponibilidad</h6>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="inStock"
          checked={inStock}
          onChange={handleInStockChange}
        />
        <label className="form-check-label" htmlFor="inStock">
          En stock
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="outOfStock"
          checked={outOfStock}
          onChange={handleOutOfStockChange}
        />
        <label className="form-check-label" htmlFor="outOfStock">
          Agotados
        </label>
      </div>
    </div>
  );
}

export default StockFilter;
