import React, { useState, useEffect } from "react";
import FilterToggleButton from "./FilterToggleButton";
import FilterCard from "./FilterCard";
import ProductToolbar from "../ProductToolbar/ProductToolbar";
import ProductList from "../ProductList/ProductList";
import Pagination from "./Pagination/Pagination";

export const BoxFilter = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
  const [sortBy, setSortBy] = useState("Destacados");
  const [view, setView] = useState("grid");

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 992;
      setIsDesktop(desktop);
      if (desktop) setShowFilters(true);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // o calcula dinámicamente según tus productos

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="row g-4">
      <aside className="col-12 col-lg-3">
        {!isDesktop && (
          <FilterToggleButton
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />
        )}
        <FilterCard
          showFilters={showFilters}
          isDesktop={isDesktop}
          setShowFilters={setShowFilters}
        />
      </aside>

      <section className="col-lg-9">
        <ProductToolbar
          title="Productos Recomendados"
          sortOptions={[
            "Destacados",
            "Precio: menor a mayor",
            "Precio: mayor a menor",
            "Más vendidos",
            "Novedades",
          ]}
          selectedSort={sortBy}
          onSortChange={setSortBy}
          currentView={view}
          onViewChange={setView}
        />

        <ProductList />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </div>
  );
};
