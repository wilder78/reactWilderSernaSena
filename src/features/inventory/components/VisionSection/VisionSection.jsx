import React from "react";

const VisionSection = ({
  title = "Nuestra Visión",
  children,
  className = "",
  style = { backgroundColor: "#f9f9f9", padding: "80px 0" },
}) => {
  return (
    <section className={`vision-section ${className}`} style={style}>
      <div className="container text-center">
        <h2 className="section-title">{title}</h2>
        <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
          {children}
        </p>
      </div>
    </section>
  );
};

export default VisionSection;
