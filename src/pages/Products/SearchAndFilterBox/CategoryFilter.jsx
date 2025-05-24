import React from "react";

const categories = [
  { name: "Todas las categorías", count: 42, active: true },
  { name: "Relojes mecánicos", count: 14 },
  { name: "Relojes de cuarzo", count: 23 },
  { name: "Relojes de pared", count: 7 },
  { name: "Smart Watch", count: 31 },
  { name: "Relojes deportivos", count: 18 },
  { name: "Relojes clásicos", count: 12 },
];

const CategoryFilter = () => (
  <div className="mb-4">
    <h6 className="fw-bold mb-3">
      <i className="bi bi-tags me-2"></i>Categorías
    </h6>
    <div
      className="list-group list-group-flush"
      style={{ maxHeight: "200px", overflowY: "auto" }}
    >
      {categories.map((category) => (
        <a
          key={category.name}
          href="#"
          className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${
            category.active ? "active" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {category.name}
          <span
            className={`badge rounded-pill ${
              category.active ? "bg-white text-primary" : "bg-secondary"
            }`}
          >
            {category.count}
          </span>
        </a>
      ))}
    </div>
  </div>
);

export default CategoryFilter;
