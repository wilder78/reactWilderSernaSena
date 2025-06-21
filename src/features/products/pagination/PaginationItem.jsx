import React from "react";

const PaginationItem = ({
  children,
  active = false,
  disabled = false,
  onClick,
}) => {
  const className = `page-item${active ? " active" : ""}${
    disabled ? " disabled" : ""
  }`;

  return (
    <li className={className}>
      <button
        className="page-link"
        onClick={onClick}
        tabIndex={disabled ? "-1" : "0"}
        aria-disabled={disabled}
        disabled={disabled}
        type="button"
      >
        {children}
      </button>
    </li>
  );
};

export default PaginationItem;
