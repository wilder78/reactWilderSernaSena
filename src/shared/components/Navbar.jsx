// src/components/Navbar.jsx
import React, { useState } from "react";
import { BrandLogo } from "../hooks/navbarHooks/BrandLogo";
import NavItem from "../hooks/navbarHooks/NavItem";
import ButtonToggler from "../hooks/navbarHooks/ButtonToggler";
import CartIcon from "../hooks/navbarHooks/CartIcon";
import CartSidebar from "../hooks/navbarHooks/CartSidebar";
import LoginModal from "../hooks/navbarHooks/LoginModal"; // NUEVO

const links = [
  { to: "/", label: "Inicio" },
  { to: "/services", label: "Servicios" },
  { to: "/products", label: "Productos" },
];

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // NUEVO
  const [loginData, setLoginData] = useState({ email: "", password: "" }); // NUEVO

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación va aquí (por ejemplo, llamada a API)
    console.log("Login:", loginData);
    setShowLogin(false);
    setLoginData({ email: "", password: "" });
  };

  return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <BrandLogo />
          <ButtonToggler />
          <div className="collapse navbar-collapse" id="navbar-toggler">
            <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">
              {links.map(({ to, label }, index) => (
                <NavItem key={index} to={to} label={label} />
              ))}

              {/* Botón flotante para abrir modal */}
              <li className="nav-item">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => setShowLogin(true)}
                >
                  Iniciar sesión
                </button>
              </li>

              <li className="nav-item position-relative">
                <CartIcon onClick={() => setSidebarOpen(true)} />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <CartSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <LoginModal
        show={showLogin}
        onClose={() => setShowLogin(false)}
        onSubmit={handleLoginSubmit}
        formData={loginData}
        onChange={handleLoginChange}
      />
    </>
  );
}

export default Navbar;

// // src/components/Navbar.jsx
// import React, { useState } from "react";
// import { BrandLogo } from "../hooks/navbarHooks/BrandLogo";
// import NavItem from "../hooks/navbarHooks/NavItem";
// import ButtonToggler from "../hooks/navbarHooks/ButtonToggler";
// import CartIcon from "../hooks/navbarHooks/CartIcon";
// import CartSidebar from "../hooks/navbarHooks/CartSidebar";

// const links = [
//   { to: "/", label: "Inicio" },
//   { to: "/services", label: "Servicios" },
//   { to: "/products", label: "Productos" },
//   { to: "/login", label: "Iniciar Sesión" },
// ];

// <NavItem />;
// <ButtonToggler />;
// <CartSidebar />;
// <CartIcon />;

// function Navbar() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <>
//       <nav className="navbar navbar-expand-md">
//         <div className="container">
//           <BrandLogo />
//           <ButtonToggler />
//           <div className="collapse navbar-collapse" id="navbar-toggler">
//             <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">
//               {links.slice(0, -1).map(({ to, label }, index) => (
//                 <NavItem key={index} to={to} label={label} />
//               ))}

//               {/* Botón de Login */}
//               <NavItem
//                 to={links[links.length - 1].to}
//                 label={links[links.length - 1].label}
//                 isButton={true}
//               />

//               <li className="nav-item position-relative">
//                 <CartIcon onClick={() => setSidebarOpen(true)} />
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <CartSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
//     </>
//   );
// }

// export default Navbar;
