import { createContext, useContext, useState } from "react";

// 1. Crear el contexto
const CartContext = createContext();

// 2. Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Añadir producto al carrito
  const addToCart = (product, quantity = 1) => {
    if (!product || !product.id || quantity < 1) return;

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      if (existing) {
        // Si ya existe, actualiza la cantidad
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Si es nuevo, lo agrega
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // Quitar producto del carrito
  const removeFromCart = (productId, quantity = 1) => {
    if (!productId || quantity < 1) return;

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === productId);
      if (!existing) return prevCart;

      if (existing.quantity <= quantity) {
        // Elimina el producto
        return prevCart.filter((item) => item.id !== productId);
      } else {
        // Reduce la cantidad
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - quantity }
            : item
        );
      }
    });
  };

  // Vaciar carrito completamente
  const clearCart = () => setCart([]);

  // Total de productos
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Total en dinero
  const cartTotal = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 3. Hook personalizado para usar el contexto
// Mueve este hook a un archivo separado (useCart.js) para evitar el warning de Fast Refresh
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};

export default CartContext;
