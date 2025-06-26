import React from "react";
import { carrouselImages } from "../../../../imageData/imageData"; // Ajusta la ruta si es necesario

// Información adicional para los títulos y textos
const slideInfo = [
  {
    title: "Relojes de pared",
    text: "Decoración y precisión en cada espacio del hogar.",
    interval: 4000,
  },
  {
    title: "Smartwatch",
    text: "Modelos modernos y funcionales para tu estilo de vida digital.",
    interval: 4000,
  },
  {
    title: "Relojes de pulso",
    text: "Diseños clásicos y elegantes que marcan la diferencia.",
    interval: 4000,
  },
];

// Componente reutilizable para los controles
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

function Carousel() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      {/* Slides */}
      <div className="carousel-inner">
        {carrouselImages.map((img, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            data-bs-interval={slideInfo[index]?.interval || 5000}
          >
            <div className="carousel-img-container">
              <img
                src={img.src}
                className="d-block w-100 carousel-img"
                alt={img.alt}
              />
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5>{slideInfo[index]?.title || "Sin título"}</h5>
              <p>{slideInfo[index]?.text || "Sin descripción"}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controles */}
      <CarouselControl direction="prev" label="Anterior" />
      <CarouselControl direction="next" label="Siguiente" />
    </div>
  );
}

export default Carousel;
