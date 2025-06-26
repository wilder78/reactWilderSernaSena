// src/components/footer/FootItem.jsx
import React from "react";
import { Link } from "react-router-dom";

function FootItem({ to, label }) {
  return (
    <div className="mb-6">
      <Link className="text-white text-decoration-none" to={to}>
        {label}
      </Link>
    </div>
  );
}

export default FootItem;