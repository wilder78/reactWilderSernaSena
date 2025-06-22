import React from "react";
import logo from "../../assets/image/LogoMs2.png";

export const BrandLogo = () => {
  return (
    <div className="brand">
      <img src={logo} alt="Logo" style={{ height: "40px" }} />
      <h1 className="fs-5 mb-0">WM. Watch Repair</h1>
    </div>
  );
};
