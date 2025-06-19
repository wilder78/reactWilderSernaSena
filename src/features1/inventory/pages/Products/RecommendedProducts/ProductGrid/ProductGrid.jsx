import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const products = [
  {
    title: "Reloj Mecánico Premium",
    description:
      "Reloj automático con esfera azul y correa de acero inoxidable.",
    imageUrl:
      "https://cdn.baguer.co/uploads/2024/08/reloj-para-hombre-pulso-metalico-unser-azul-821538AZ.jpg_Nx0x2QG7kIRdud3pLhC2YkRdKkJWwOraql6KJktY1KcQa6iaTv.jpg",
    rating: 4.5,
    price: 239.99,
    oldPrice: 299.99,
    stock: 12,
    discount: "-20%",
    badgeType: "descuento",
  },
  {
    title: "Smart Watch Deportivo",
    description: "Monitor de actividad con GPS y resistencia al agua.",
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_762436-MCO75690533765_042024-O.webp",
    rating: 5,
    price: 179.99,
    stock: 5,
  },
  {
    title: "Reloj de Pared Vintage",
    description: "Diseño clásico con números romanos y mecanismo silencioso.",
    imageUrl:
      "https://http2.mlstatic.com/D_Q_NP_717950-CBT79208925663_092024-O.webp",
    rating: 4,
    price: 89.99,
    stock: 0,
    soldOut: true,
  },
  {
    title: "Smart Watch Pro",
    description: "Última generación con pantalla AMOLED y 30 días de batería.",
    imageUrl:
      "https://techlab.com.co/wp-content/uploads/2024/11/SMARTWATCH-ULTRA-2-BLACK-PRO.jpeg",
    rating: 3,
    price: 349.99,
    stock: 3,
    newProduct: true,
  },
];

const ProductGrid = () => (
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
    {products.map((product, index) => (
      <ProductCard key={index} {...product} />
    ))}
  </div>
);

export default ProductGrid;
