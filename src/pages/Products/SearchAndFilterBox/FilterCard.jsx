import React from "react";
import CategoryFilter from "./CategoryFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import FilterActions from "./FilterActions";

const FilterCard = ({ showFilters, isDesktop, setShowFilters }) => (
  <div
    id="filtersCollapse"
    className={`card shadow-sm ${showFilters || isDesktop ? "" : "d-none"}`}
    style={{ top: isDesktop ? "20px" : "0" }}
  >
    <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
      <h5 className="mb-0">
        <i className="bi bi-funnel me-2"></i>Filtros
      </h5>
      {!isDesktop && (
        <button
          className="btn btn-sm btn-light"
          onClick={() => setShowFilters(false)}
        >
          <i className="bi bi-x-lg"></i>
        </button>
      )}
    </div>
    <div className="card-body">
      <CategoryFilter />
      <PriceRangeFilter />
      <AvailabilityFilter />
      <FilterActions />
    </div>
  </div>
);

export default FilterCard;
