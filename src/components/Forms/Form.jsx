import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <>
      <div className="contact-wrapper">
        {/* <!-- Información izquierda --> */}
        <div className="contact-info d-flex flex-column justify-content-center">
          <h3>Contáctanos</h3>
          <p className="text-center text-md-start">
            Resolvemos tus dudas sobre reparación de relojes con expertos
            certificados. Escríbenos y te responderemos en el menor tiempo
            posible.
          </p>
        </div>

        {/* <!-- Formulario derecha --> */}
        <div className="contact-form">
          <form action="/api/messages" method="POST">
            <div className="row g-2">
              <div className="col-md-6 mb-3 input-icon">
                <i className="bi bi-person"></i>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  required
                  placeholder="Nombre completo"
                />
              </div>

              <div className="col-md-6 mb-3 input-icon">
                <i className="bi bi-envelope"></i>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  required
                  placeholder="Correo electrónico"
                />
              </div>

              <div className="col-md-6 mb-3 input-icon">
                <i className="bi bi-telephone"></i>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  placeholder="Teléfono (opcional)"
                />
              </div>

              <div className="col-md-6 mb-3 input-icon">
                <i className="bi bi-chat-dots"></i>
                <select className="form-select" name="type" required>
                  <option value="" disabled selected>
                    Tipo de consulta
                  </option>
                  <option value="cotizacion">Cotización</option>
                  <option value="consulta">Consulta técnica</option>
                  <option value="reclamo">Reclamo</option>
                  <option value="sugerencia">Sugerencia</option>
                  <option value="otros">Otros</option>
                </select>
              </div>

              <div className="col-12 mb-3 input-icon">
                <i className="bi bi-pencil"></i>
                <textarea
                  className="form-control"
                  name="message"
                  required
                  placeholder="Escribe aquí tu mensaje..."
                ></textarea>
              </div>

              <div className="col-12 mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="newsletter"
                    id="newsletter"
                  />
                  <label className="form-check-label" for="newsletter">
                    Deseo recibir novedades y promociones
                  </label>
                </div>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-elegant w-100">
                  <i className="bi bi-send me-1"></i> Enviar mensaje
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
