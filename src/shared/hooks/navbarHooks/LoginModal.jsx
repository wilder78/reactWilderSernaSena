import React from "react";
import { FiUser, FiLock, FiMail, FiPhone } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "./loginModal.css";

const LoginModal = ({ show, onClose, onSubmit, formData, onChange }) => {
  if (!show) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => e.target.className === "modal-backdrop" && onClose()}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>
          &times;
        </button>

        <h2 className="form-title">Iniciar Sesión</h2>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-with-icon">
              <FiMail className="input-icon" />
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                className="form-control"
                placeholder="tu@email.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <div className="input-with-icon">
              <FiLock className="input-icon" />
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={onChange}
                className="form-control"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-button">
            Ingresar
          </button>

          <div className="divider">
            <span className="divider-text">o continuar con</span>
          </div>

          <div className="social-login">
            <button type="button" className="social-btn">
              <FcGoogle size={20} />
            </button>
            <button
              type="button"
              className="social-btn"
              style={{ color: "#1877F2" }}
            >
              <FaFacebook size={20} />
            </button>
          </div>

          <div className="signup-link">
            ¿No tienes cuenta? <a href="#registro">Regístrate ahora</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;

// import React from "react";
// import "./loginModal.css";

// const LoginModal = ({ show, onClose, onSubmit, formData, onChange }) => {
//   if (!show) return null;

//   return (
//     <div
//       className="modal-backdrop"
//       onClick={(e) => e.target.className === "modal-backdrop" && onClose()}
//     >
//       <div className="modal-content">
//         <button className="close-modal" onClick={onClose}>
//           &times;
//         </button>
//         <h2 className="form-title">Iniciar Sesión</h2>
//         <form onSubmit={onSubmit}>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={onChange}
//               className="form-control"
//               placeholder="Correo electrónico"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Contraseña</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={onChange}
//               className="form-control"
//               placeholder="Contraseña"
//               required
//             />
//           </div>
//           <button type="submit" className="submit-button">
//             Ingresar
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;
