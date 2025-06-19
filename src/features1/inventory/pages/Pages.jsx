// src/pages/Pages.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "./Home/Home";
import { Product } from "./Products/Product";
import AboutUs from "./AboutUs/AboutUs";
import StorageSection from "./StorageSection/StorageSection";
import Contacts from "./Contact/Contacts";

function Pages() {
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

export default Pages;
