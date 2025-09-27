import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";
import Product from "./pages/Product";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
