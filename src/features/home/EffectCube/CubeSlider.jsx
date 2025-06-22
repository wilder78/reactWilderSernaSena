// src/components/EffectCube/CubeSlider.jsx
import React from "react";
import { paredImages } from "../../../imageData/imageData";

export const CubeSlider = () => (
  <div className="swiper-wrapper-container">
    <swiper-container
      class="mySwiper"
      pagination="true"
      effect="cube"
      grab-cursor="true"
      cube-effect-shadow="true"
      cube-effect-slide-shadows="true"
      cube-effect-shadow-offset="20"
      cube-effect-shadow-scale="0.94"
    >
      {paredImages.map((image, index) => (
        <swiper-slide key={index}>
          <img src={image.src} alt={image.alt} />
        </swiper-slide>
      ))}
    </swiper-container>
  </div>
);
