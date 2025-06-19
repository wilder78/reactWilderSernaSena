import React from "react";

// Componente reutilizable para controles del carrusel
const CarouselControl = ({ direction, label }) => (
  <button
    className={`carousel-control-${direction}`}
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide={direction}
    aria-label={label}
  >
    <span
      className={`carousel-control-${direction}-icon`}
      aria-hidden="true"
    ></span>
    <span className="visually-hidden">{label}</span>
  </button>
);

// Componente contenedor que usa los controles
function ControlCarousel() {
  return (
    <>
      <CarouselControl direction="prev" label="Anterior" />
      <CarouselControl direction="next" label="Siguiente" />
    </>
  );
}

export default ControlCarousel;
