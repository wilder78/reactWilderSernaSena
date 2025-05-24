import React from "react";
import PaginationItem from "./PaginationItem/PaginationItem";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation" className="mt-5">
      <ul className="pagination justify-content-center">
        <PaginationItem disabled>
          <i className="bi bi-chevron-left"></i>
        </PaginationItem>
        <PaginationItem active>1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem>
          <i className="bi bi-chevron-right"></i>
        </PaginationItem>
      </ul>
    </nav>
  );
};

export default Pagination;
