import React from "react";

const features = [
  {
    title: "Inventario Digitalizado",
    desc: "Sistema de tracking en tiempo real con fotografías de alta resolución de cada pieza.",
  },
  {
    title: "Inspección Periódica",
    desc: "Revisiones programadas por relojeros certificados para mantener las piezas en perfecto estado.",
  },
  {
    title: "Seguro Integral",
    desc: "Cobertura total contra todo riesgo con valoración profesional de cada pieza.",
  },
  {
    title: "Entrega Express",
    desc: "Servicio de mensajería especializada con protocolos de seguridad para entregas urgentes.",
  },
];

const StorageImageSection = () => (
  <section className="py-5 bg-light">
    <div className="container">
      <div className="row align-items-center flex-column flex-lg-row">
        <div className="col-lg-5 mb-4 mb-lg-0 text-center">
          <img
            src="image/companySection/almacenamiento.png"
            alt="Almacén de relojes"
            className="img-fluid shadow-lg rounded-img responsive-img mx-auto d-block"
          />
        </div>
        <div className="col-lg-7 ps-lg-5">
          <h2 className="mb-4">
            Gestión de <span className="gold-text">Almacenamiento</span>{" "}
            Profesional
          </h2>
          <p className="lead mb-4">
            El equipo de almacenamiento opera de manera eficiente y coordinada
            para asegurar una entrega rápida y confiable de tus pedidos.
          </p>

          <div className="row mt-5">
            {features.map((item, i) => (
              <div className="col-md-6 mb-4" key={i}>
                <div className="d-flex">
                  <div className="me-4">
                    <i className="bi bi-check-circle-fill feature-icon"></i>
                  </div>
                  <div>
                    <h5 className="mb-2">{item.title}</h5>
                    <p className="text-light-gray mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StorageImageSection;
