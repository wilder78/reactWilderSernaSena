// src/components/Navbar/Navbar.jsx
import "./Navbar.css";
import NavItem from "./ItemsNavbar/NavItem";
import BrandLogo from "../BrandLogo/BrandLogo";
import ButtonToggler from "./ItemsNavbar/ButtonToggler";
import links from "./ItemsNavbar/Navegation";
import Cart from "../Cart/Cart";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        <BrandLogo />
        <ButtonToggler />

        <div className="collapse navbar-collapse" id="navbar-toggler">
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">
            {links.map(({ to, label }, index) => (
              <NavItem key={index} to={to} label={label} />
            ))}
            <li className="nav-item">
              <Cart />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
