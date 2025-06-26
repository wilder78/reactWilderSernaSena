import React, { useState } from "react";

const RegisterModal = ({ show, onClose }) => {
  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el registro del usuario
    onClose();
  };

  return (
    <div className="modal" style={{ display: "block" }}>
      <div className="modal-content">
        <button className="close-modal" onClick={onClose}>
          &times;
        </button>
        <h2 className="form-title">Registro de Usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" className="form-control" required />
          </div>
          <button type="submit" className="submit-button">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
