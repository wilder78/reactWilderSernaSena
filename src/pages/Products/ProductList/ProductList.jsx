import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function ProductList() {
  const products = [
    {
      title: "Reloj Mecánico Premium",
      description:
        "Reloj automático con esfera azul y correa de acero inoxidable.",
      image:
        "https://cdn.baguer.co/uploads/2024/08/reloj-para-hombre-pulso-metalico-unser-azul-821538AZ.jpg_Nx0x2QG7kIRdud3pLhC2YkRdKkJWwOraql6KJktY1KcQa6iaTv.jpg",
      alt: "Reloj mecánico premium",
      price: "239.99",
      oldPrice: "299.99",
      discount: "-20%",
      rating: 4.5,
      stock: 12,
      isOutOfStock: false,
      isNew: false,
    },
    {
      title: "Smart Watch Deportivo",
      description: "Monitor de actividad con GPS y resistencia al agua.",
      image:
        "https://cdn.baguer.co/uploads/2024/08/reloj-para-hombre-pulso-metalico-unser-azul-821538AZ.jpg_Nx0x2QG7kIRdud3pLhC2YkRdKkJWwOraql6KJktY1KcQa6iaTv.jpg",
      alt: "Smart Watch deportivo",
      price: "179.99",
      rating: 5,
      stock: 5,
      isOutOfStock: false,
      isNew: false,
    },
    {
      title: "Reloj de Pared Vintage",
      description: "Diseño clásico con números romanos y mecanismo silencioso.",
      image:
        "https://cdn.baguer.co/uploads/2024/08/reloj-para-hombre-pulso-metalico-unser-azul-821538AZ.jpg_Nx0x2QG7kIRdud3pLhC2YkRdKkJWwOraql6KJktY1KcQa6iaTv.jpg",
      alt: "Reloj de pared vintage",
      price: "89.99",
      rating: 4,
      stock: 0,
      isOutOfStock: true,
      isNew: false,
    },
    {
      title: "Smart Watch Pro",
      description:
        "Última generación con pantalla AMOLED y 30 días de batería.",
      image:
        "https://cdn.baguer.co/uploads/2024/08/reloj-para-hombre-pulso-metalico-unser-azul-821538AZ.jpg_Nx0x2QG7kIRdud3pLhC2YkRdKkJWwOraql6KJktY1KcQa6iaTv.jpg",
      alt: "Reloj inteligente",
      price: "349.99",
      rating: 3,
      stock: 3,
      isOutOfStock: false,
      isNew: true,
    },
  ];

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
