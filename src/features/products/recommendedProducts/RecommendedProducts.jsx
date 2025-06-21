import React, { useState } from "react";

import ProductGrid from "./ProductGrid";
import Pagination from "../pagination/Pagination";

const RecommendedProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // Ajusta según la cantidad real de páginas

  return (
    <section className="col-lg-9">
      <ProductGrid />
      <div style={{ marginTop: "2rem" }}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default RecommendedProducts;
