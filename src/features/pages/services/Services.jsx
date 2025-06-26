import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import "./Services.css"; // Import your CSS styles
import { repairAndAdvice } from "../../../imageData/imageData";
import FloatingButton from "../../../shared/components/floatingButton/FloatingButton";
import Form from "../../../shared/components/Form";

const Services = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach((element) => {
      element.style.opacity = 0;
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Expertos en Relojería de Precisión</h1>
            <p className="hero-subtitle">
              Reparación, mantenimiento y asesoría especializada para tus
              relojes más preciados
            </p>
            <Link to="/products" className="btn btn-primary btn-lg">
              Explorar Productos
            </Link>
          </div>
        </div>
      </section>

      <div className="b-example-divider" />

      {/* Servicios Section */}
      <section className="container py-5">
        <h2 className="section-title animate">Nuestros Servicios</h2>
        <div className="row">
          {/* Reparación */}
          <div className="col-lg-4 animate delay-1">
            <div className="service-card">
              <div className="card-img-container">
                <img
                  src={repairAndAdvice[0].src}
                  alt={repairAndAdvice[0].alt}
                />
              </div>
              <div className="card-body">
                <div className="card-icon">
                  <i className="bi bi-tools"></i>
                </div>
                <h5 className="card-title">Reparación Profesional</h5>
                <p className="card-text">
                  Contamos con técnicos especializados en la reparación de
                  relojes mecánicos, automáticos y digitales. Reparamos todo
                  tipo de fallas para devolverles la precisión y funcionalidad.
                </p>
              </div>
            </div>
          </div>

          {/* Mantenimiento */}
          <div className="col-lg-4 animate delay-2">
            <div className="service-card">
              <div className="card-img-container">
                <img
                  src={repairAndAdvice[1].src}
                  alt={repairAndAdvice[1].alt}
                />
              </div>
              <div className="card-body">
                <div className="card-icon">
                  <i className="bi bi-gear-wide-connected"></i>
                </div>
                <h5 className="card-title">Mantenimiento Especializado</h5>
                <p className="card-text">
                  Ofrecemos servicios de mantenimiento preventivo y correctivo,
                  limpieza profunda, cambio de baterías y ajustes para prolongar
                  la vida útil de tus relojes.
                </p>
              </div>
            </div>
          </div>

          {/* Asesoría */}
          <div className="col-lg-4 animate delay-3">
            <div className="service-card">
              <div className="card-img-container">
                <img
                  src={repairAndAdvice[2].src}
                  alt={repairAndAdvice[2].alt}
                />
              </div>
              <div className="card-body">
                <div className="card-icon">
                  <i className="bi bi-chat-dots"></i>
                </div>
                <h5 className="card-title">Asesoría Personalizada</h5>
                <p className="card-text">
                  Te asesoramos en la elección, uso y cuidado de los relojes que
                  vendemos, para que obtengas el máximo rendimiento y valor de
                  tu compra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="b-example-divider" />

      {/* Testimonios Section */}
      <section className="testimonial-section">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            Lo que Dicen Nuestros Clientes
          </h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "Llevé mi reloj de colección para reparación y quedé
                  impresionado con el nivel de profesionalismo. Recuperó su
                  precisión exacta y ahora funciona como nuevo."
                </p>
                <div className="client-info">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Cliente"
                    className="client-img"
                  />
                  <div>
                    <h5 className="mb-0">Carlos Rodríguez</h5>
                    <p className="mb-0 text-muted">Coleccionista</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "El servicio de mantenimiento preventivo es excelente. Hacen
                  un trabajo minucioso y detallado. Mis relojes siempre están en
                  perfecto estado gracias a ellos."
                </p>
                <div className="client-info">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Cliente"
                    className="client-img"
                  />
                  <div>
                    <h5 className="mb-0">María Fernández</h5>
                    <p className="mb-0 text-muted">Cliente habitual</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "La asesoría que recibí fue invaluable. Me ayudaron a elegir
                  el reloj perfecto para mi estilo de vida y presupuesto. ¡Muy
                  recomendados!"
                </p>
                <div className="client-info">
                  <img
                    src="https://randomuser.me/api/portraits/men/67.jpg"
                    alt="Cliente"
                    className="client-img"
                  />
                  <div>
                    <h5 className="mb-0">Javier López</h5>
                    <p className="mb-0 text-muted">Primera compra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="b-example-divider" />

      {/* Marcas Section */}
      <section className="brand-section">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            Marcas que Trabajamos
          </h2>
          <div className="row justify-content-center align-items-center">
            <div className="col-6 col-md-2 mb-4 text-center">
              <img
                src="https://via.placeholder.com/100x50/ffffff/333333?text=ROLEX"
                alt="Rolex"
                className="img-fluid brand-logo"
              />
            </div>
            <div className="col-6 col-md-2 mb-4 text-center">
              <img
                src="https://via.placeholder.com/100x50/ffffff/333333?text=OMEGA"
                alt="Omega"
                className="img-fluid brand-logo"
              />
            </div>
            <div className="col-6 col-md-2 mb-4 text-center">
              <img
                src="https://via.placeholder.com/100x50/ffffff/333333?text=TAG"
                alt="Tag Heuer"
                className="img-fluid brand-logo"
              />
            </div>
            <div className="col-6 col-md-2 mb-4 text-center">
              <img
                src="https://via.placeholder.com/100x50/ffffff/333333?text=CASIO"
                alt="Casio"
                className="img-fluid brand-logo"
              />
            </div>
            <div className="col-6 col-md-2 mb-4 text-center">
              <img
                src="https://via.placeholder.com/100x50/ffffff/333333?text=SEIKO"
                alt="Seiko"
                className="img-fluid brand-logo"
              />
            </div>
            <div className="col-6 col-md-2 mb-4 text-center">
              <img
                src="https://via.placeholder.com/100x50/ffffff/333333?text=CITIZEN"
                alt="Citizen"
                className="img-fluid brand-logo"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="b-example-divider" />
      <Form />

      <div className="b-example-divider" />

      <FloatingButton />
    </div>
  );
};

export default Services;
