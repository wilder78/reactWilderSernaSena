import React from "react";
import {
  asesorCentro,
  asesorNorte,
  asesorSur,
} from "../../imageData/imageData";

const advisorsList = [
  {
    name: "Carlos Méndez",
    region: "Zona Norte",
    description:
      "Carlos, con 15 años de experiencia en relojería de lujo, atiende la zona norte con dedicación y alto conocimiento técnico.",
    image: asesorNorte,
  },
  {
    name: "Ana Rodríguez",
    region: "Zona Centro",
    description:
      "Especialista en relojes vintage y piezas de colección, Ana brinda asesoramiento experto en la región central del país.",
    image: asesorCentro,
  },
  {
    name: "David Fernández",
    region: "Zona Sur",
    description:
      "Maestro relojero con certificación suiza, David cubre la región sur con soluciones técnicas y mantenimiento especializado.",
    image: asesorSur,
  },
];

const Advisors = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Conoce a Nuestros Especialistas</h2>
          <p className="text-muted">
            Contamos con un equipo de profesionales distribuidos
            estratégicamente para atenderte donde te encuentres
          </p>
        </div>

        <div className="row">
          {advisorsList.map((advisor, index) => (
            <div className="col-lg-4" key={index}>
              <div className="advisor-card">
                <img
                  src={advisor.image}
                  alt={`Vendedor ${advisor.region}`}
                  className="advisor-img"
                />
                <div className="advisor-info">
                  <h3 className="advisor-name">{advisor.name}</h3>
                  <span className="advisor-region">{advisor.region}</span>
                  <p className="advisor-description">{advisor.description}</p>
                  <button className="btn btn-contact">
                    <i className="bi bi-telephone"></i> Contactar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advisors;
