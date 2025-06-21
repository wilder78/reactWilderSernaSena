import React from "react";
// import "./StorageSection.css";
import StorageServiceCard from "./StorageServiceCard";
import StorageImageSection from "./StorageImageSection";
import FloatingButton from "../../shared/components/floatingButton/FloatingButton";

const services = [
  {
    icon: "bi-shield-lock",
    title: "Seguridad Avanzada",
    desc: "Sistemas de vigilancia 24/7 con tecnología biométrica y cámaras de alta definición para la máxima protección de sus piezas.",
  },
  {
    icon: "bi-thermometer-snow",
    title: "Control Climático",
    desc: "Ambientes con temperatura y humedad controladas para preservar la integridad de los mecanismos y materiales de sus relojes.",
  },
  {
    icon: "bi-box-seam",
    title: "Embalaje Especializado",
    desc: "Materiales de embalaje libres de ácidos y diseñados específicamente para relojería fina, que previenen rayaduras y golpes.",
  },
];

const StorageSection = () => {
  return (
    <>
      <section className="storage-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="section-title animate-fadeInUp">
                Nuestros <span className="gold-text">Servicios</span> de
                Almacenamiento
              </h2>
              <p className="text-light-gray animate-fadeInUp delay-1">
                Protegemos y conservamos sus relojes con los más altos
                estándares de seguridad y climatización
              </p>
            </div>
          </div>

          <div className="row g-4">
            {services.map((service, i) => (
              <StorageServiceCard
                key={i}
                icon={service.icon}
                title={service.title}
                desc={service.desc}
                delay={i + 1}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="b-example-divider" />
      <StorageImageSection />
      <div className="b-example-divider" />
      <FloatingButton />
    </>
  );
};

export default StorageSection;
