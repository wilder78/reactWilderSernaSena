import Carrucel from "./Carrusel/Carrucel";
import "./Home.css";
import FloatingButton from "../../components/floatingButton/FloatingButton";

function Home() {
  return (
    <>
      <Carrucel />
      {/* <!-- Section presentation --/-- Sección de presentacion --> */}
      <section class="presentation">
        <div class="container one-presentation">
          <h3 class="title-presentation">
            Explora nuestra amplia gama de productos.
          </h3>
          <p class="text-section">
            "Contamos con una extensa variedad de productos disponibles, que
            abarcan desde repuestos hasta accesorios y servicios, diseñados para
            cubrir todas sus necesidades."
          </p>
        </div>
      </section>
      <FloatingButton />
    </>
  );
}

export default Home;
