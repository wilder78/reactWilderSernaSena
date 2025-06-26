import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./shared/components/Navbar";
import Footer from "./shared/components/Footer";
import AboutUs from "./features/pages/aboutUs/AboutUs";
import Contacts from "./features/pages/contact/Contacts";
import { Product } from "./features/pages/products/Product";
import Services from "./features/pages/services/Services";
import Home from "./features/pages/home/Home";
import StorageSection from "./features/pages/storage/StorageSection";

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
