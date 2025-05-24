import React from "react";

import "./Product.css";

function Product() {
  return (
    <div className="product-container">
      <main className="product-content">
        <button className="menu-btn" aria-label="Abrir menú">
          <i className="bi bi-list"></i>
        </button>
        <h1>Productos</h1>
      </main>
    </div>
  );
}

export default Product;
