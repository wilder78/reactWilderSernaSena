import React from "react";

const SectionBlock = ({ title, children, className = "", style = {} }) => {
  return (
    <section
      className={`section-block ${className}`}
      style={{
        ...style,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h2
        className="section-title"
        style={{
          paddingBottom: "8px",
          marginBottom: "24px",
          textDecoration: "none",
        }}
      >
        {title}
      </h2>
      <div style={{ maxWidth: "800px" }}>{children}</div>
    </section>
  );
};

export default SectionBlock;
