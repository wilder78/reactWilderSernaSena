import React, { useState } from "react";

function CategoryFilter({ onCategorySelect }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = [
    { name: "Todas las categorías", count: 42 },
    { name: "Relojes mecánicos", count: 14 },
    { name: "Relojes de cuarzo", count: 23 },
    { name: "Relojes de pared", count: 7 },
    { name: "Smart Watch", count: 31 },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
    if (onCategorySelect) onCategorySelect(categories[index].name);
  };

  return (
    <div className="mb-4">
      <h6 className="fw-bold mb-3">Categorías</h6>
      <div className="list-group list-group-flush">
        {categories.map((cat, index) => (
          <button
            key={index}
            type="button"
            className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {cat.name}
            <span
              className={`badge ${
                activeIndex === index ? "bg-primary" : "bg-secondary"
              } rounded-pill`}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
