import React from "react";

import ProductGrid from "./ProductGrid/ProductGrid";
import ProductControls from "./ProductControls/ProductControls";
import Pagination from "./Pagination/Pagination";

const RecommendedProducts = () => (
  <section className="col-lg-9">
    <ProductControls />
    <ProductGrid />
    <Pagination />
  </section>
);

export default RecommendedProducts;
