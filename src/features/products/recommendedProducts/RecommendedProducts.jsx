import React, { useState } from "react";

import ProductGrid from "./ProductGrid";
import ProductControls from "./ProductControls";
import Pagination from "./ProductCard";

const RecommendedProducts = () => {
  // Ejemplo de paginación y control de cantidad
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // Ajusta según la cantidad real de páginas

  // Puedes pasar props reales a ProductControls si lo necesitas
  return (
    <section className="col-lg-9">
      <ProductControls
        quantity={1}
        onIncrement={() => {}}
        onDecrement={() => {}}
        disabled={false}
      />
      <ProductGrid />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};

export default RecommendedProducts;
