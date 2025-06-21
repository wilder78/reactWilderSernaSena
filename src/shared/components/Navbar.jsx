// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { BrandLogo } from "./BrandLogo";
import { FiShoppingCart } from "react-icons/fi"; // Importar el ícono de carrito

const links = [
  { to: "/", label: "Inicio" },
  { to: "/services", label: "Servicios" },
  { to: "/products", label: "Productos" },
];

function NavItem({ to, label, className = "" }) {
  return (
    <li className="nav-item">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `nav-link ${className} ${isActive ? "active fw-bold" : ""}`
        }
      >
        {label}
      </NavLink>
    </li>
  );
}

function ButtonToggler() {
  return (
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
  );
}

function Cart({ itemCount = 0 }) {
  return (
    <NavLink
      to="/cart"
      className="position-relative p-2 nav-link"
      aria-label="Carrito de compras"
    >
      <FiShoppingCart className="fs-5" />

      {itemCount > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {itemCount}
        </span>
      )}
    </NavLink>
  );
}

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
            <li className="nav-item position-relative">
              <Cart itemCount={3} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
// // src/components/Navbar.jsx
// import React from "react";
// import { NavLink } from "react-router-dom";
// import { BrandLogo } from "./BrandLogo";

// const links = [
//   { to: "/", label: "Inicio" },
//   { to: "/services", label: "Servicios" },
//   { to: "/products", label: "Productos" },
// ];

// function NavItem({ to, label, className = "" }) {
//   return (
//     <li className="nav-item">
//       <NavLink
//         to={to}
//         className={({ isActive }) =>
//           `nav-link ${className} ${isActive ? "active fw-bold" : ""}`
//         }
//       >
//         {label}
//       </NavLink>
//     </li>
//   );
// }

// function ButtonToggler() {
//   return (
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbar-toggler"
//       aria-controls="navbar-toggler"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon"></span>
//     </button>
//   );
// }

// function Cart() {
//   return (
//     <NavLink to="/cart" className="nav-link">
//       🛒
//     </NavLink>
//   );
// }

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-md">
//       <div className="container">
//         <BrandLogo />
//         <ButtonToggler />

//         <div className="collapse navbar-collapse" id="navbar-toggler">
//           <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">
//             {links.map(({ to, label }, index) => (
//               <NavItem key={index} to={to} label={label} />
//             ))}
//             <li className="nav-item">
//               <Cart />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
