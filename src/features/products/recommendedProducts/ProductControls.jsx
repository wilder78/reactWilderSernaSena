import React from "react";
// import "./ProductControls.css";

const ProductControls = ({ quantity, onIncrement, onDecrement, disabled }) => {
  return (
    <div className="product-controls d-flex align-items-center gap-2">
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={onDecrement}
        disabled={disabled || quantity <= 1}
        type="button"
      >
        <i className="bi bi-dash"></i>
      </button>
      <span>{quantity}</span>
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={onIncrement}
        disabled={disabled}
        type="button"
      >
        <i className="bi bi-plus"></i>
      </button>
    </div>
  );
};

export default ProductControls;
