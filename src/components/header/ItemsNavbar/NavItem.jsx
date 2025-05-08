import { NavLink } from "react-router-dom";

// Componente reutilizable para los ítems de navegación
function NavItem({ to, label }) {
  return (
    <li className="nav-item">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `nav-link ${isActive ? "active fw-bold" : ""}`
        }
      >
        {label}
      </NavLink>
    </li>
  );
}
// function NavItem({ to, label }) {
//   return (
//     <li className="nav-item">
//       <NavLink
//         to={to}
//         className={({ isActive }) =>
//           `nav-link ${isActive ? "active fw-bold" : ""}`
//         }
//       >
//         {label}
//       </NavLink>
//     </li>
//   );
// }

export default NavItem;
