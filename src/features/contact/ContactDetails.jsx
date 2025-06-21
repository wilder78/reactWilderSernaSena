import React from "react";
import LocationMap from "../../shared/components/LocationMap";

const ContactDetails = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          {/* Información de contacto */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="contact-info">
              <h3>Información de Contacto</h3>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Oficina Principal</h4>
                  <p>Calle Relojería 123, # 54-45 Medellín, Antioquia</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="contact-text">
                  <h4>Teléfono</h4>
                  <p>+34 912 345 678</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>info@watchrepair.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-clock"></i>
                </div>
                <div className="contact-text">
                  <h4>Horario de Atención</h4>
                  <p>
                    Lunes a Viernes: 9:30 - 19:30
                    <br />
                    Sábados: 10:00 - 14:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <LocationMap />
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
