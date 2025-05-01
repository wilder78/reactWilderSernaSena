import React from "react";
import logo from "../../../public/image/LogoMs2.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div class="container-fluid">
        <div class="row p-5 text-white">
          <div class="col-sm-12 col-md-4 col-lg-4">
            <a class="navbar-brand brand-logo" href="index.html">
              <img src={logo} width="40" alt="LogoMs2" />
              <span>WM. Watch Repair</span>
            </a>

            <p class="text-justify">
              Como empresa importadora, ofrecemos repuestos y accesorios de alta
              calidad para relojes, garantizando un óptimo rendimiento y
              cumpliendo con los más altos estándares de exigencia y calidad que
              nuestros clientes esperan.
            </p>
            <p>Medellin - Colombia</p>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4">
            <h5>Links</h5>
            <div class="mb-2">
              <a class="text-white text-decoration-none" href="./index.html">
                Inicio
              </a>
            </div>
            <div class="mb-2">
              <a
                class="text-white text-decoration-none"
                href="./pages/products.html"
              >
                Productos
              </a>
            </div>
            <div class="mb-2">
              <a
                class="text-white text-decoration-none"
                href="./pages/weAre.html"
              >
                Nosotros
              </a>
            </div>
            <div class="mb-2">
              <a
                class="text-white text-decoration-none"
                href="./pages/contactUs.html"
              >
                Contáctanos
              </a>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4">
            <h5>Centro de ayuda</h5>
            <div class="mb-2">
              <a class="text-white text-decoration-none" href="#">
                Servicio al cliente
              </a>
            </div>
            <div class="mb-2">
              <a class="text-white text-decoration-none" href="#">
                Contacto
              </a>
            </div>
            <div class="mb-2">
              <a class="text-white text-decoration-none" href="#">
                Noticias
              </a>
            </div>
            <div class="mb-2">
              <a class="text-white text-decoration-none" href="#">
                Promociones
              </a>
            </div>
          </div>
          <div class="iconos-redes d-flex flex-wrap align-items-end justify-content-end">
            <a
              href="mailto:info@mmsrepuestos.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bi bi-envelope"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bi bi-instagram"></i>
            </a>
          </div>
          <div id="footer" class="copyright">
            <p class="text-center text-white">
              &copy; 2025 WM. Watch Repair. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
