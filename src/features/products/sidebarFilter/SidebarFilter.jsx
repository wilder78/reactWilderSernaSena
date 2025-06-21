import React from "react";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import StockFilter from "./StockFilter";

function SidebarFilter({
  onCategorySelect,
  onPriceChange,
  onStockChange,
  onApplyFilters,
}) {
  return (
    <>
      {/* Botón visible solo en pantallas pequeñas */}
      <div className="d-lg-none text-end mb-3">
        <button
          className="btn btn-outline-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#filterOffcanvas"
        >
          <i className="bi bi-filter-square me-1"></i>Filtros
        </button>
      </div>

      {/* Sidebar visible solo en pantallas grandes */}
      <aside className="col-lg-3 d-none d-lg-block">
        <div className="card shadow-sm sticky-top" style={{ top: "20px" }}>
          <div className="card-header bg-primary text-white">
            <h5 className="mb-0">
              <i className="bi bi-filter-square me-2"></i>Filtros
            </h5>
          </div>
          <div className="card-body">
            <CategoryFilter onCategorySelect={onCategorySelect} />
            <PriceFilter onChange={onPriceChange} />
            <StockFilter onChange={onStockChange} />
            <button
              className="btn btn-primary w-100 mt-2"
              onClick={onApplyFilters}
            >
              <i className="bi bi-funnel me-1"></i>Aplicar Filtros
            </button>
          </div>
        </div>
      </aside>

      {/* Offcanvas para móviles y tablets */}
      <div
        className="offcanvas offcanvas-start d-lg-none"
        tabIndex="-1"
        id="filterOffcanvas"
      >
        <div className="offcanvas-header bg-primary text-white">
          <h5 className="offcanvas-title">
            <i className="bi bi-filter-square me-2"></i>Filtros
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <CategoryFilter onCategorySelect={onCategorySelect} />
          <PriceFilter onChange={onPriceChange} />
          <StockFilter onChange={onStockChange} />
          <button
            className="btn btn-primary w-100 mt-2"
            onClick={onApplyFilters}
          >
            <i className="bi bi-funnel me-1"></i>Aplicar Filtros
          </button>
        </div>
      </div>
    </>
  );
}

export default SidebarFilter;
