import React, { useState } from "react";
import Swal from "sweetalert2";

const FloatingButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [formData, setFormData] = useState({
    cedula: "",
    nombres: "",
    apellidos: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{5,30}$/;
    const regexCedula = /^[0-9]{7,10}$/;

    if (!regexCedula.test(formData.cedula)) {
      Swal.fire({
        icon: "error",
        title: "Cédula inválida",
        text: "Debe contener entre 7 y 10 números.",
        confirmButtonText: "Entendido",
      });
      return false;
    }

    if (!regexNombre.test(formData.nombres)) {
      Swal.fire({
        icon: "error",
        title: "Nombres inválidos",
        text: "Solo letras y espacios, entre 5 y 30 caracteres.",
        confirmButtonText: "Entendido",
      });
      return false;
    }

    if (!regexNombre.test(formData.apellidos)) {
      Swal.fire({
        icon: "error",
        title: "Apellidos inválidos",
        text: "Solo letras y espacios, entre 5 y 30 caracteres.",
        confirmButtonText: "Entendido",
      });
      return false;
    }

    if (!formData.email) {
      Swal.fire({
        icon: "error",
        title: "Correo requerido",
        text: "Por favor ingrese su correo electrónico.",
        confirmButtonText: "Entendido",
      });
      return false;
    }

    if (!formData.password || formData.password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Contraseña inválida",
        text: "Debe tener al menos 6 caracteres.",
        confirmButtonText: "Entendido",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // alert("¡Usuario registrado con éxito!");
    Swal.fire({
      title: "Usuario registrado",
      icon: "success",
      confirmButtonText: "Aceptar",
      allowOutsideClick: true,
      allowEscapeKey: true,
    });
    setFormData({
      cedula: "",
      nombres: "",
      apellidos: "",
      email: "",
      password: "",
    });
    setShowModal(false);
  };

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("modal")) {
      setShowModal(false);
    }
  };

  const toggleWhatsappMenu = () => {
    setWhatsappOpen(!whatsappOpen);
  };

  return (
    <div className="floating-buttons">
      <div className="whatsapp-container">
        <button
          className="whatsapp-btn"
          onClick={toggleWhatsappMenu}
          aria-label="Abrir menú de WhatsApp"
          aria-expanded={whatsappOpen}
        >
          <i className="bi bi-whatsapp"></i>
        </button>

        {whatsappOpen && (
          <div className="whatsapp-dropdown">
            <button
              className="close-dropdown"
              onClick={toggleWhatsappMenu}
              aria-label="Cerrar menú"
            >
              &times;
            </button>
            <div className="dropdown-content">
              <a
                href="https://wa.me/573001112233"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-geo-alt"></i> Vendedor norte
              </a>
              <a
                href="https://wa.me/573004445566"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-geo-alt"></i> Vendedor sur
              </a>
              <a
                href="https://wa.me/573007778899"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-building"></i> Oficina
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Botón para abrir modal */}
      <button
        className="register-btn"
        onClick={() => setShowModal(true)}
        aria-label="Abrir formulario de registro"
      >
        <i className="bi bi-person-plus"></i>
      </button>

      {/* Modal de registro */}
      {showModal && (
        <div className="modal" onClick={handleBackgroundClick}>
          <div className="modal-content">
            <button
              className="close-modal"
              onClick={() => setShowModal(false)}
              aria-label="Cerrar modal"
            >
              &times;
            </button>
            <h2>Registrar Usuario</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="cedula">Cédula:</label>
                <input
                  type="text"
                  id="cedula"
                  name="cedula"
                  value={formData.cedula}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{7,10}"
                  placeholder="Ingrese su cédula"
                />
              </div>

              <div className="form-group">
                <label htmlFor="nombres">Nombres:</label>
                <input
                  type="text"
                  id="nombres"
                  name="nombres"
                  value={formData.nombres}
                  onChange={handleChange}
                  required
                  minLength={5}
                  maxLength={30}
                  placeholder="Ingrese sus nombres"
                />
              </div>

              <div className="form-group">
                <label htmlFor="apellidos">Apellidos:</label>
                <input
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  required
                  minLength={5}
                  maxLength={30}
                  placeholder="Ingrese sus apellidos"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Ingrese su correo"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                  placeholder="Ingrese su contraseña"
                />
              </div>

              <button type="submit" className="submit-btn">
                Registrar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
