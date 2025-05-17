import "./Home.css";
import FloatingButton from "../../components/floatingButton/FloatingButton";
import BrandAndPhoto from "./CarouselSwiper/BrandAndPhoto";
import Carousel from "./Carousel/Carousel";
import PresentationSection from "../../components/PresentationSection/PresentationSection";
import {
  mechanicalWatchImages,
  quartzWatchImages,
} from "../../imageData/imageData";
import { SubTitle } from "../../components/SubTitle/SubTitle";
import { EffectCube } from "../../components/EffectCube/EffectCube";

function Home() {
  return (
    <>
      <Carousel />

      <div className="b-example-divider"></div>

      <PresentationSection
        title="Nuestra variada colección de relojes mecánicos."
        description="Te ofrecemos una exclusiva gama de relojes mecánicos, diseñados para los verdaderos amantes de la relojería. Cada pieza refleja un equilibrio perfecto entre tradición y sofisticación, para quienes buscan calidad y distinción en su muñeca."
      />
      <div className="b-example-divider"></div>

      <div className="flex flex-col items-center">
        <SubTitle>Las marcas más utilizadas en todo el mundo.</SubTitle>
        <BrandAndPhoto images={mechanicalWatchImages} />
      </div>

      <div className="b-example-divider"></div>

      <PresentationSection
        title="En nuestra variada colección de relojes de cuarzo."
        description="Descubre nuestra cuidada selección de relojes de cuarzo, una fusión perfecta entre precisión y estilo. Con una amplia variedad de diseños, estos relojes son ideales para quienes buscan fiabilidad y elegancia en cada detalle."
      />

      <div className="b-example-divider"></div>

      <div className="flex flex-col items-center">
        <SubTitle>Nuestros Productos son de alta demanda.</SubTitle>
        <BrandAndPhoto images={quartzWatchImages} />
      </div>

      <div className="b-example-divider"></div>

      <PresentationSection
        title="En nuestra variada colección de relojes de pared."
        description="Descubre relojes de pared que combinan precisión, estilo y artesanía, pensados para embellecer cualquier espacio con un toque clásico o moderno."
      />

      <div className="b-example-divider"></div>

      <EffectCube />

      <div className="b-example-divider"></div>
      <FloatingButton />
    </>
  );
}

export default Home;
