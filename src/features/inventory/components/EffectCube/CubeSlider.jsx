// src/components/EffectCube/CubeSlider.jsx
import React from "react";

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
      <swiper-slide>
        <img src="/image/pared/relojParedHerlen.png" alt="relojParedHerlen" />
      </swiper-slide>
      <swiper-slide>
        <img src="/image/pared/relojParedBulova.png" alt="relojParedBulova" />
      </swiper-slide>
      <swiper-slide>
        <img src="/image/pared/relojParedMiller.png" alt="relojParedMiller" />
      </swiper-slide>
      <swiper-slide>
        <img src="/image/pared/relojParedSeiko.png" alt="relojParedSeiko" />
      </swiper-slide>
    </swiper-container>
  </div>
);
