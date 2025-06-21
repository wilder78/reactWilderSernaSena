import React, { useState } from "react";

function PriceFilter({ min = 0, max = 1000, step = 50, onChange }) {
  const [value, setValue] = useState(max);

  const handleChange = (e) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <div className="mb-4">
      <h6 className="fw-bold mb-3">Rango de precios</h6>
      <input
        type="range"
        className="form-range mb-3"
        min={min}
        max={max}
        step={step}
        id="priceRange"
        value={value}
        onChange={handleChange}
      />
      <div className="d-flex justify-content-between">
        <span className="badge bg-light text-dark">${min}</span>
        <span className="badge bg-light text-dark">${value}</span>
      </div>
    </div>
  );
}

export default PriceFilter;
