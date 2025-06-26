import React from "react";
import Feature from "./Feature";

const AboutContent = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">Quiénes Somos</h2>
          <p className="lead mb-4">
            En <span className="gold-text">WatchRepair</span>, somos apasionados
            por el tiempo y la precisión...
          </p>

          <div className="row mt-5">
            <Feature
              icon="bi-gem"
              title="Calidad"
              description="Trabajamos con los mejores materiales y técnicas para garantizar resultados excepcionales."
            />
            <Feature
              icon="bi-clock-history"
              title="Experiencia"
              description="Más de 30 años de tradición relojera nos avalan como líderes en el sector."
            />
            <Feature
              icon="bi-person-heart"
              title="Atención Personalizada"
              description="Cada reloj y cada cliente reciben el trato exclusivo que merecen."
            />
          </div>

          <p className="mt-4">
            Con un equipo de expertos relojeros y asesores especializados...
          </p>
          <p className="mt-3">
            Nuestro compromiso es cuidar de cada detalle para que el tiempo esté
            siempre a su favor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
