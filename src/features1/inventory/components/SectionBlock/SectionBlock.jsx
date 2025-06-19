import React from "react";
import "./SectionBlock.css"; 

const SectionBlock = ({ title, children, className = "", style = {} }) => {
  return (
    <section className={`section-block ${className}`} style={style}>
      <div className="container text-center">
        <h2 className="section-title mt-5">{title}</h2>
        <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
          {children}
        </p>
      </div>
    </section>
  );
};

export default SectionBlock;
