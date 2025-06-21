import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Error al cargar productos");
        const data = await res.json();

        // Filtrar productos con datos esenciales
        const validProducts = data.filter(
          (product) =>
            product.id &&
            product.title &&
            product.image &&
            typeof product.price === "number"
        );

        setProducts(validProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return <div className="text-center w-100">Cargando productos...</div>;
  if (error) return <div className="text-danger w-100">{error}</div>;

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          imageUrl={product.image}
          rating={product.rating?.rate || 0}
          price={product.price}
          stock={product.rating?.count || 0}
        />
      ))}
    </div>
  );
};

export default ProductGrid;

// import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";

// const ProductGrid = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("https://fakestoreapi.com/products");
//         if (!res.ok) throw new Error("Error al cargar productos");
//         const data = await res.json();
//         setProducts(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading)
//     return <div className="text-center w-100">Cargando productos...</div>;
//   if (error) return <div className="text-danger w-100">{error}</div>;

//   return (
//     <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
//       {products.map((product) =>
//         product.title && product.image && product.price ? (
//           <ProductCard
//             key={product.id}
//             title={product.title}
//             description={product.description}
//             imageUrl={product.image}
//             rating={product.rating?.rate || 0}
//             price={product.price}
//             stock={product.rating?.count || 0}
//           />
//         ) : null
//       )}
//     </div>
//   );
// };

// export default ProductGrid;
