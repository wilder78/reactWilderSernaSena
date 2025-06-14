import React from "react";

const StorageServiceCard = ({ icon, title, desc, delay }) => (
  <div className={`col-md-4 animate-fadeInUp delay-${delay}`}>
    <div className="storage-card text-center">
      <div className="storage-icon mb-3">
        <i className={`bi ${icon} fs-2`}></i>
      </div>
      <h4 className="mb-3">{title}</h4>
      <p className="text-light-gray">{desc}</p>
    </div>
  </div>
);

export default StorageServiceCard;
