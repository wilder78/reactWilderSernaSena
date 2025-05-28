import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Product } from "./pages/Products/Product";
import AboutUs from "./pages/AboutUs/AboutUs";
import StorageSection from "./pages/StorageSection/StorageSection";
import Contacts from "./pages/Contact/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/despacho-mercancia" element={<StorageSection />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
