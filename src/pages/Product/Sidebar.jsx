import React, { useEffect } from "react";
import "./Product.css";

function Sidebar() {
  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    const productContent = document.querySelector(".product-content");
    sidebar.classList.toggle("open");

    const isOpen = sidebar.classList.contains("open");
    sidebar.setAttribute("aria-expanded", isOpen);

    if (window.innerWidth <= 768) {
      productContent.style.marginLeft = isOpen ? "260px" : "0";
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById("sidebar");
      const menuBtn = document.querySelector(".menu-btn");

      if (
        window.innerWidth <= 768 &&
        sidebar.classList.contains("open") &&
        !sidebar.contains(event.target) &&
        !menuBtn.contains(event.target)
      ) {
        toggleSidebar();
      }
    };

    const handleResize = () => {
      const sidebar = document.getElementById("sidebar");
      const productContent = document.querySelector(".product-content");

      if (window.innerWidth > 768) {
        sidebar.classList.remove("open");
        productContent.style.marginLeft = "280px";
      } else {
        productContent.style.marginLeft = "0";
      }
    };

    // Inicializar en desktop
    if (window.innerWidth > 768) {
      const productContent = document.querySelector(".product-content");
      productContent.style.marginLeft = "280px";
    }

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sidebar" id="sidebar" aria-expanded="false">
      <div className="sidebar-header">
        <div className="app-brand">
          <i className="bi bi-stack"></i>
          <h2>Menú</h2>
        </div>
        <button
          className="close-btn"
          aria-label="Cerrar menú"
          onClick={toggleSidebar}
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
      <nav className="sidebar-menu">
        <ul>
          <li className="menu-item active">
            <i className="bi bi-house-door-fill"></i>
            <span>Inicio</span>
          </li>
          <li className="menu-item">
            <i className="bi bi-person-fill"></i>
            <span>Perfil</span>
          </li>
          <li className="menu-item">
            <i className="bi bi-gear-fill"></i>
            <span>Configuración</span>
          </li>
          <li className="menu-item">
            <i className="bi bi-box-arrow-right"></i>
            <span>Salir</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
