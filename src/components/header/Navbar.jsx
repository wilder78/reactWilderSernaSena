import "./Navbar.css";
import NavItem from "./ItemsNavbar/NavItem";
import BrandLogo from "../BrandLogo/BrandLogo";

function Navbar() {
  const links = [
    { to: "/", label: "Inicio" },
    { to: "/services", label: "Servicios" },
    { to: "/products", label: "Productos" },
    { to: "/contact", label: "Contáctanos" },
    { to: "/about", label: "Nosotros" },
  ];

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        <BrandLogo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-toggler"
          aria-controls="navbar-toggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar-toggler">
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            {links.map((link, index) => (
              <NavItem key={index} to={link.to} label={link.label} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
