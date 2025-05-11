import "./BrandAndPhoto.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function BrandAndPhoto() {
  const images = [
    { src: "image/fotoAudemars.png", alt: "audemasrs" },
    { src: "image/fotoBreitling.png", alt: "fotoBreitling" },
    { src: "image/fotoCitizen.png", alt: "fotoCitizen" },
    { src: "image/fotoIWC.png", alt: "fotoIWC" },
    { src: "image/fotoJaeger.png", alt: "fotoJaeger" },
    { src: "image/fotoOmega.png", alt: "fotoOmega" },
    { src: "image/fotoOrient.png", alt: "fotoOrient" },
    { src: "image/fotoRolex.png", alt: "fotoRolex" },
    { src: "image/fotoSeiko.png", alt: "fotoSeiko" },
    { src: "image/fotoTagheuer.png", alt: "fotoTagheuer" },
    { src: "image/fotoVacheron.png", alt: "fotoVacheron" },
  ];

  return (
    <div className="content">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img src={image.src} alt={image.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BrandAndPhoto;
