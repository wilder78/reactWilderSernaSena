import React from "react";
import HeroSection from "./HeroSection";
import AboutContent from "./AboutContent";
import SectionBlock from "./SectionBlock";
import VisionSection from "./VisionSection";
import FloatingButton from "../../shared/components/floatingButton/FloatingButton";

const AboutUs = () => {
  return (
    <>
      <HeroSection />
      <AboutContent />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SectionBlock
          title="Nuestra Misión"
          className="mission-section"
          style={{ marginBottom: "100px", maxWidth: "700px" }}
        >
          "Conservar la precisión del tiempo que llevas contigo, ofreciendo{" "}
          <span className="gold-text">servicios de excelencia</span> y productos
          de la más alta calidad para garantizar el funcionamiento impecable de
          tus relojes. Nos comprometemos a ser tu aliado relojero de confianza:{" "}
          <strong>cercano</strong> cuando nos necesites,{" "}
          <strong>meticuloso</strong> en cada detalle y{" "}
          <strong>constante</strong> en nuestro afán por superar tus
          expectativas."
        </SectionBlock>
      </div>

      <VisionSection>
        "Ser reconocidos como la empresa líder en{" "}
        <span className="gold-text">relojería de alta gama</span> en el mercado
        nacional e internacional, destacándonos por nuestra{" "}
        <strong>excelencia en el servicio</strong>,{" "}
        <strong>compromiso con la precisión</strong> y una{" "}
        <strong>atención personalizada</strong> que crea vínculos duraderos con
        cada cliente. Aspiramos a transformar cada reloj que reparamos o
        vendemos en un símbolo de{" "}
        <span className="gold-text">
          elegancia, confianza y valor atemporal
        </span>
        ."
      </VisionSection>
      <FloatingButton />
    </>
  );
};

export default AboutUs;
