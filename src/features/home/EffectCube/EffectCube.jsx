// src/components/EffectCube/EffectCube.jsx
import React from "react";

import { CubeText } from "./CubeText";
import { CubeSlider } from "./CubeSlider";

export const EffectCube = () => (
  <div className="contenedor-effect">
    <CubeText />
    <CubeSlider />
  </div>
);
