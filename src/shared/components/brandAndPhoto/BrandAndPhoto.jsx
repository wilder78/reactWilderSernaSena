import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Estilos Swiper
import "swiper/css";
import "swiper/css/autoplay";

import "./BrandAndPhoto.css"; // Asegúrate de tener este archivo y ruta correcta

function BrandAndPhoto({ images = [] }) {
  if (!Array.isArray(images) || images.length === 0) {
    return <p className="text-center">No hay imágenes disponibles.</p>;
  }

  return (
    <div className="context">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img src={image.src} alt={image.alt || `Slide ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BrandAndPhoto;
