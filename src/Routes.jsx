import React from "react";
import { Routes, Route } from "react-router-dom"; // asegúrate de importar estos
import Navbar from "./shared/components/Navbar";
import Footer from "./shared/components/Footer";
import Home from "./features/home/Home";
import AboutUs from "./features/aboutUs/AboutUs";
import StorageSection from "./features/storage/StorageSection";
import Contacts from "./features/contact/Contacts";
import { Product } from "./features/products/Product";
import Services from "./features/services/Services";

function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/despacho-mercancia" element={<StorageSection />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/products" element={<Product />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default AppRoutes;
