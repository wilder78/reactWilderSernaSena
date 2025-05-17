import React from "react";
import "./EffectCube.css";

export const EffectCube = () => {
  return (
    <div className="contenedor-effect">
      <div className="texto text-center">
        <h2>Nuestros mejores productos en venta</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
          error amet! Illo, laboriosam non perspiciatis sunt, recusandae placeat
          ducimus voluptate deleniti earum libero, officiis animi consequatur
          accusantium odio in eos.
        </p>
      </div>

      <div className="swiper-wrapper-container">
        <swiper-container
          className="mySwiper"
          pagination="true"
          effect="cube"
          grab-cursor="true"
          cube-effect-shadow="true"
          cube-effect-slide-shadows="true"
          cube-effect-shadow-offset="20"
          cube-effect-shadow-scale="0.94"
        >
          <swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="Producto 1"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt="Producto 2"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              alt="Producto 3"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              alt="Producto 4"
            />
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  );
};
