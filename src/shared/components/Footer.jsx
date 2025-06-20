// src/components/Footer.jsx
import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import logo from "../../assets/image/LogoMs2.png";

const Footer = () => {
  const links = [
    { to: "/", label: "Inicio" },
    { to: "/products", label: "Productos" },
    { to: "/services", label: "Servicios" },
    { to: "/contact", label: "Contáctanos" },
  ];

  const helpCenter = [
    { to: "/despacho-mercancia", label: "Servicio de bodega" },
    { to: "/about", label: "Nosotros" },
    { to: "/noticias", label: "Noticias" },
    { to: "/promociones", label: "Promociones" },
  ];

  return (
    <footer className="bg-dark text-white pt-5" role="contentinfo">
      <div className="container-fluid">
        <div className="row px-md-5 px-3">
          {/* Logo y descripción */}
          <div className="col-12 col-md-6 mb-6">
            <img src={logo} alt="Logo" style={{ height: "40px" }} />
            <p className="mt-3 text-white-50 text-justify">
              En <strong>WM. Watch Repair</strong> nos especializamos en la
              importación, reparación y mantenimiento de relojes. Ofrecemos
              servicios, repuestos y accesorios de alta calidad, garantizando un
              rendimiento superior y cumpliendo con los más altos estándares de
              excelencia que nuestros clientes valoran y merecen.
            </p>
            <address className="text-light">Medellín - Colombia</address>
          </div>

          {/* Sección de enlaces */}
          <div className="col-12 col-md-6 mb-6">
            <div className="row">
              <div className="col-6 col-lg-6">
                <h5 className="text-white">Links</h5>
                {links.map(({ to, label }) => (
                  <FootItem key={to} to={to} label={label} />
                ))}
              </div>

              <div className="col-6 col-lg-6">
                <h5 className="text-white">Centro de ayuda</h5>
                {helpCenter.map(({ to, label }) => (
                  <FootItem key={to} to={to} label={label} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <SocialIcons />

        {/* Copyright */}
        <div className="text-center py-3">
          <p className="mb-0">
            &copy; 2025 WM. Watch Repair. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

//
// Componente FootItem
//
function FootItem({ to, label }) {
  return (
    <div className="mb-6">
      <Link className="text-white text-decoration-none" to={to}>
        {label}
      </Link>
    </div>
  );
}

//
// Componente SocialIcons
//
function SocialIcons() {
  const icons = [
    {
      href: "mailto:info@mmsrepuestos.com",
      iconClass: "bi bi-envelope",
      label: "Email",
    },
    {
      href: "https://www.facebook.com/",
      iconClass: "bi bi-facebook",
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/",
      iconClass: "bi bi-instagram",
      label: "Instagram",
    },
  ];

  return (
    <div className="iconos-redes d-flex flex-wrap align-items-center justify-content-center gap-3 py-3">
      {icons.map(({ href, iconClass, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-white fs-4"
        >
          <i className={iconClass} aria-hidden="true"></i>
        </a>
      ))}
    </div>
  );
}

//
// Componente BrandLogo
//
function BrandLogo() {
  return (
    <a className="navbar-brand" href="/">
      <img src={logo} alt="Logo" style={{ height: "40px" }} />
    </a>
  );
}
