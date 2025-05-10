import "./Navbar.css";
import NavItem from "./ItemsNavbar/NavItem";
import BrandLogo from "../BrandLogo/BrandLogo";
import ButtonToggler from "./ItemsNavbar/ButtonToggler";
import links from "./ItemsNavbar/Navegation";
// import { navigationLinks as links } from "../NavigationLinks/NavigationLinks";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        <BrandLogo />
        <ButtonToggler />
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
