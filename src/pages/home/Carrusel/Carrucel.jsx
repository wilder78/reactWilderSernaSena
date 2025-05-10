import ControlCarousel from "./ControlCarousel";
import slides from "./Slides";

function Carrucel() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval={slide.interval || undefined}
            >
              <img src={slide.src} className="d-block w-100" alt={slide.alt} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{slide.title}</h5>
                <p>{slide.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles */}
      <ControlCarousel />
    </div>
  );
}

export default Carrucel;
