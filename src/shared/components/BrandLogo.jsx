// import React from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../../assets/image/LogoMs2.png";

// // Componente para el logo de la marca
// function BrandLogo() {
//   return (
//     <NavLink
//       to="/"
//       className="navbar-brand d-flex align-items-center gap-2"
//       aria-label="Página principal WM. Watch Repair"
//     >
//       <img src={logo} width="40" alt="Logo WM Watch Repair" />
//       <h1 className="fs-5 mb-0">WM. Watch Repair</h1>
//     </NavLink>
//   );
// }

// export default BrandLogo;

import React from "react";
import logo from "../../assets/image/LogoMs2.png";

export const BrandLogo = () => {
  return (
    <div className="brand-logo">
      <img src={logo} alt="Logo" style={{ height: "40px" }} />
      <h1 className="fs-5 mb-0">WM. Watch Repair</h1>
    </div>
  );
};
