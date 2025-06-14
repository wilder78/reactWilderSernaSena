import smartwatchImg from "../../../../public/image/smartwatch.png";
import relojesImg from "../../../../public/image/Relojes.png";
import paredImg from "../../../../public/image/relojesdepared.png";
// import paredImg from "../assets/image/relojesdepared.png";

const slides = [
  {
    src: smartwatchImg,
    alt: "Smartwatch",
    title: "Smartwatch",
    text: "Modelos modernos y funcionales para tu estilo de vida digital.",
    interval: 4000,
  },
  {
    src: relojesImg,
    alt: "Relojes de pulso",
    title: "Relojes de pulso",
    text: "Diseños clásicos y elegantes que marcan la diferencia.",
    interval: 4000,
  },
  {
    src: paredImg,
    alt: "Relojes de pared",
    title: "Relojes de pared",
    text: "Decoración y precisión en cada espacio del hogar.",
    interval: 4000,
  },
];

export default slides;
