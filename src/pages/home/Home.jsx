import "./Home.css";
import FloatingButton from "../../components/floatingButton/FloatingButton";
import BrandAndPhoto from "./CarouselSwiper/BrandAndPhoto";
import Carousel from "./Carousel/Carousel";
import PresentationSection from "../../components/PresentationSection/PresentationSection";

function Home() {
  return (
    <>
      <Carousel />

      <div class="b-example-divider"></div>

      <PresentationSection
        title="Nuestra variada colección de relojes mecánicos."
        description="Te ofrecemos una exclusiva gama de relojes mecánicos, diseñados para los verdaderos amantes de la relojería. Cada pieza refleja un equilibrio perfecto entre tradición y sofisticación, para quienes buscan calidad y distinción en su muñeca."
      />
      <div class="b-example-divider"></div>

      <BrandAndPhoto />

      <div class="b-example-divider"></div>

      <PresentationSection
        title="En nuestra variada colección de relojes de cuarzo."
        description="Descubre nuestra cuidada selección de relojes de cuarzo, una fusión perfecta entre precisión y estilo. Con una amplia variedad de diseños, estos relojes son ideales para quienes buscan fiabilidad y elegancia en cada detalle."
      />

      <div class="b-example-divider"></div>

      <BrandAndPhoto />

      <div class="b-example-divider"></div>

      <FloatingButton />
    </>
  );
}

export default Home;
