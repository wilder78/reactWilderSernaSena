import React from "react";

const LocationMap = () => {
  return (
    <div className="col-lg-6">
      <div className="map-container">
        <iframe
          title="Mapa de Medellín"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.935949967161!2d-75.57981438573587!3d6.244203395476134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1686146789149!5m2!1ses!2sco"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
