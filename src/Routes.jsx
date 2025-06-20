import React from "react";
import { Routes, Route } from "react-router-dom"; // asegúrate de importar estos
import Navbar from "./shared/components/Navbar";
import Footer from "./shared/components/Footer";
import Home from "./features/home/Home";
import AboutUs from "./features/aboutUs/AboutUs";

function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default AppRoutes;
