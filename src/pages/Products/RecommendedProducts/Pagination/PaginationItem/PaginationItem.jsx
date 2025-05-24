import React from "react";

const PaginationItem = ({ children, active = false, disabled = false }) => {
  const className = `page-item${active ? " active" : ""}${
    disabled ? " disabled" : ""
  }`;

  return (
    <li className={className}>
      <a
        className="page-link"
        href="#"
        tabIndex={disabled ? "-1" : "0"}
        aria-disabled={disabled}
      >
        {children}
      </a>
    </li>
  );
};

export default PaginationItem;
