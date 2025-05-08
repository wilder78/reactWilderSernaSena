import { Link } from "react-router-dom";
import "./Footer.css";
import FootItem from "./ItemsFooter/FootItem";
import BrandLogo from "../BrandLogo/BrandLogo";

function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row p-5 text-white">
          {/* Sección de Logo y Descripción */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <BrandLogo />
            <p className="text-justify">
              En WM. Watch Repair nos especializamos en la importación,
              reparación y mantenimiento de relojes. Ofrecemos servicios,
              repuestos y accesorios de alta calidad, garantizando un
              rendimiento superior y cumpliendo con los más altos estándares de
              excelencia que nuestros clientes valoran y merecen.
            </p>
            <p>Medellín - Colombia</p>
          </div>

          {/* Sección de Links */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <h5>Links</h5>
            <FootItem to="/" label="Inicio" />
            <FootItem to="/products" label="Productos" />
            <FootItem to="/services" label="Servicios" />
            <FootItem to="/contact" label="Contáctanos" />
          </div>

          {/* Sección de Centro de ayuda */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <h5>Centro de ayuda</h5>
            <FootItem to="/servicio-al-cliente" label="Servicio al cliente" />
            <FootItem to="/about" label="Nosotros" />
            <FootItem to="/noticias" label="Noticias" />
            <FootItem to="/promociones" label="Promociones" />
          </div>

          {/* Sección de Iconos de Redes Sociales */}
          <div className="iconos-redes d-flex flex-wrap align-items-end justify-content-end">
            <Link
              to="mailto:info@mmsrepuestos.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <i className="bi bi-envelope" aria-hidden="true"></i>
            </Link>
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook" aria-hidden="true"></i>
            </Link>
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram" aria-hidden="true"></i>
            </Link>
          </div>

          {/* Sección de Copyright */}
          <div id="footer" className="copyright">
            <p className="text-center text-white">
              &copy; 2025 WM. Watch Repair. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
