import { NavLink } from "react-router-dom";
import logo from "/image/LogoMs2.png";

// Componente para el logo de la marca
function BrandLogo() {
  return (
    <NavLink
      to="/"
      className="navbar-brand d-flex align-items-center gap-2"
      aria-label="Página principal WM. Watch Repair"
    >
      <img src={logo} width="40" alt="Logo WM Watch Repair" />
      WM. Watch Repair
    </NavLink>
  );
}

export default BrandLogo;
