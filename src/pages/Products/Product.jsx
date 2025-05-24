import React from "react";
import ProductToolbar from "./ProductToolbar/ProductToolbar";
import { BoxFilter } from "./SearchAndFilterBox/BoxFilter";
import "./Product.css";

export const Product = () => {
  return (
    <>
      <main className="custom-main">
        <ProductToolbar />
        <BoxFilter />
      </main>
    </>
  );
};
