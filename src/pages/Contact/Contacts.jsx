import React from "react";
import "./Contacts.css";
import LocationMap from "../../components/LocationMap/LocationMap";

const Contacts = () => {
  return (
    <>
      <section className="hero-section text-center">
        <div className="container position-relative">
          <h1 className="display-3 fw-bold">Nuestros Asesores</h1>
          <p className="lead">
            Expertos en relojería disponibles en todo el país para brindarte
            atención personalizada y soluciones a medida.
          </p>
        </div>
      </section>

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
            {[
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
            ].map((advisor, index) => (
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

      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="contact-info">
                <h3>Información de Contacto</h3>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Oficina Principal</h4>
                    <p>Calle Relojería 123, # 54-45 Medellin, Antioquia</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Teléfono</h4>
                    <p>+34 912 345 678</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>info@watchrepair.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-clock"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Horario de Atención</h4>
                    <p>
                      Lunes a Viernes: 9:30 - 19:30
                      <br />
                      Sábados: 10:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <LocationMap />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
