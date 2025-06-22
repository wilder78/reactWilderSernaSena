import React from "react";
import Carousel from "./carousel/Carousel";
import { SubTitle } from "../../shared/components/SubTitle";
import PresentationSection from "../../shared/components/PresentationSection";
import { EffectCube } from "./EffectCube/EffectCube";
import BrandAndPhoto from "../../shared/components/BrandAndPhoto";
import {
  mechanicImages,
  cuarzoImages,
  smartWatchImages,
} from "../../imageData/imageData";
import Form from "../../shared/components/Form";
import FloatingButton from "../../shared/components/floatingButton/FloatingButton";

function Home() {
  return (
    <>
      <Carousel />

      <div className="b-example-divider" />

      <div className="flex flex-col items-center">
        <SubTitle>Las marcas más utilizadas en todo el mundo.</SubTitle>
      </div>

      <div className="col-md-5"></div>

      <div className="row d-flex flex-column-reverse flex-md-row">
        <div className="col-md-7">
          <BrandAndPhoto images={mechanicImages} />
        </div>
        <div className="col-md-5">
          <PresentationSection
            title="Nuestra variada colección de relojes mecánicos."
            description="Te ofrecemos una exclusiva gama de relojes mecánicos, diseñados para los verdaderos amantes de la relojería. Cada pieza refleja un equilibrio perfecto entre tradición y sofisticación, para quienes buscan calidad y distinción en su muñeca."
          />
        </div>
      </div>

      <div className="b-example-divider" />

      <div className="flex flex-col items-center">
        <SubTitle>
          Una colección de relojes de cuarzo que marca tendencia.
        </SubTitle>
      </div>

      <div className="container-home">
        <div className="row d-flex flex-column-reverse flex-md-row">
          <div className="col-md-5">
            <PresentationSection
              title="Explora la sofisticación de los relojes de cuarzo contemporáneos"
              description="Déjate cautivar por la precisión y el diseño de nuestros relojes de cuarzo. Cada pieza combina elegancia moderna con confiabilidad, ideal para quienes valoran el estilo sin comprometer la funcionalidad."
            />
          </div>

          <div className="col-md-7">
            <BrandAndPhoto images={cuarzoImages} />
          </div>
        </div>
      </div>

      <div className="b-example-divider" />

      <div className="flex flex-col items-center">
        <SubTitle>Descubre los relojes inteligentes más innovadores</SubTitle>
      </div>

      <div className="col-md-5"></div>

      <div className="row d-flex flex-column-reverse flex-md-row">
        <div className="col-md-7">
          <BrandAndPhoto images={smartWatchImages} />
        </div>
        <div className="col-md-5">
          <PresentationSection
            title="Explora el mundo de los relojes inteligentes de última generación."
            description="Descubre relojes inteligentes que combinan tecnología, salud y estilo. Mantente conectado y en control, con funciones avanzadas al alcance de tu muñeca."
          />
        </div>
      </div>

      <div className="b-example-divider" />

      <PresentationSection
        title="En nuestra variada colección de relojes de pared."
        description="Descubre relojes de pared que combinan precisión, estilo y artesanía, pensados para embellecer cualquier espacio con un toque clásico o moderno."
      />

      <EffectCube />

      <div className="b-example-divider" />

      <Form />

      <div className="b-example-divider" />

      <FloatingButton />
    </>
  );
}

export default Home;
