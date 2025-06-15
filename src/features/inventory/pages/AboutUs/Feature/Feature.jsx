import React from "react";

const Feature = ({ icon, title, description }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="p-4">
        <i className={`bi ${icon} fs-1 gold-text mb-3`}></i>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Feature;
