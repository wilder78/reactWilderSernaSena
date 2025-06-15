function CategoryFilter() {
  const categories = [
    { name: "Todas las categorías", count: 42, active: true },
    { name: "Relojes mecánicos", count: 14 },
    { name: "Relojes de cuarzo", count: 23 },
    { name: "Relojes de pared", count: 7 },
    { name: "Smart Watch", count: 31 },
  ];

  return (
    <div className="mb-4">
      <h6 className="fw-bold mb-3">Categorías</h6>
      <div className="list-group list-group-flush">
        {categories.map((cat, index) => (
          <a
            key={index}
            href="#"
            className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${
              cat.active ? "active" : ""
            }`}
          >
            {cat.name}
            <span
              className={`badge ${
                cat.active ? "bg-primary" : "bg-secondary"
              } rounded-pill`}
            >
              {cat.count}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
