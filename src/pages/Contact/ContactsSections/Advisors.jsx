import React from "react";

const advisorsList = [
  {
    name: "Carlos Méndez",
    region: "Zona Norte",
    description:
      "Con más de 15 años de experiencia en relojería de lujo, Carlos atiende la región norte con dedicación y conocimiento técnico excepcional.",
    image: "/image/companySection/asesorNorte.png",
  },
  {
    name: "Ana Rodríguez",
    region: "Zona Centro",
    description:
      "Especialista en relojes vintage y piezas de colección, Ana brinda asesoramiento experto en la región central del país.",
    image: "/image/companySection/asesorCentro.png",
  },
  {
    name: "David Fernández",
    region: "Zona Sur",
    description:
      "Maestro relojero con certificación suiza, David cubre la región sur con soluciones técnicas y mantenimiento especializado.",
    image: "/image/companySection/asesorSur.png",
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
