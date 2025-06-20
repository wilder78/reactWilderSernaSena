import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="contact-container">
      {/* Sección de información */}
      <div className="contact-info-section">
        <div className="info-content">
          <h2 className="contact-title">Contáctanos</h2>
          <p className="contact-description">
            Resolvemos tus dudas sobre reparación de relojes con expertos
            certificados. Escríbenos y te responderemos en el menor tiempo
            posible.
          </p>

          <div className="contact-details">
            <div className="detail-item">
              <i className="bi bi-geo-alt-fill"></i>
              <span>Dirección: Calle Relojería 123, Ciudad</span>
            </div>
            <div className="detail-item">
              <i className="bi bi-telephone-fill"></i>
              <span>Teléfono: +1 234 567 890</span>
            </div>
            <div className="detail-item">
              <i className="bi bi-envelope-fill"></i>
              <span>Email: contacto@relojeria.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sección del formulario */}
      <div className="contact-form-section">
        <form action="/api/messages" method="POST" className="contact-form">
          <h3 className="form-title">Envía tu mensaje</h3>

          <div className="form-grid">
            <div className="form-group icon-input">
              <i className="bi bi-person-fill"></i>
              <input
                type="text"
                className="form-control"
                name="name"
                required
                placeholder="Nombre completo"
              />
            </div>

            <div className="form-group icon-input">
              <i className="bi bi-envelope-fill"></i>
              <input
                type="email"
                className="form-control"
                name="email"
                required
                placeholder="Correo electrónico"
              />
            </div>

            <div className="form-group icon-input">
              <i className="bi bi-telephone-fill"></i>
              <input
                type="tel"
                className="form-control"
                name="phone"
                placeholder="Teléfono (opcional)"
              />
            </div>

            <div className="form-group icon-input">
              <i className="bi bi-chat-dots-fill"></i>
              <select
                className="form-select"
                name="type"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Tipo de consulta
                </option>
                <option value="cotizacion">Cotización</option>
                <option value="consulta">Consulta técnica</option>
                <option value="reclamo">Reclamo</option>
                <option value="sugerencia">Sugerencia</option>
                <option value="otros">Otros</option>
              </select>
            </div>

            <div className="form-group full-width icon-input">
              <i className="bi bi-pencil-fill"></i>
              <textarea
                className="form-control"
                name="message"
                required
                rows="4"
                placeholder="Escribe aquí tu mensaje..."
              ></textarea>
            </div>

            <div className="newsletter-group full-width">
              <div className="newsletter-checkbox-wrapper">
                <input
                  className="newsletter-checkbox"
                  type="checkbox"
                  name="newsletter"
                  id="newsletter"
                />
                <label className="newsletter-label" htmlFor="newsletter">
                  Deseo recibir novedades y promociones
                </label>
              </div>
            </div>

            <div className="form-group full-width">
              <button type="submit" className="submit-button">
                <i className="bi bi-send-fill me-2"></i> Enviar mensaje
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
