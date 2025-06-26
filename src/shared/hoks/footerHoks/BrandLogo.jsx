// src/components/navbar/BrandLogo.jsx
import React from "react";
import logo from "../../../assets/image/LogoMs2.png"; // Ajusta la ruta al logo según la ubicación real del archivo

function BrandLogo() {
  return (
    <a className="navbar-brand" href="/">
      <img src={logo} alt="Logo" style={{ height: "40px" }} />
    </a>
  );
}

export default BrandLogo;
