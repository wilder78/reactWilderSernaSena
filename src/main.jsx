import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Importa el proveedor del carrito
import { CartProvider } from "../src/shared/components/CartContext.jsx";

// Validar que el elemento root exista
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No se encontró el elemento con id 'root' en el HTML.");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        {" "}
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
