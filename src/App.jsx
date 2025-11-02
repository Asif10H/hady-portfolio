import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery.jsx";
import Available from "./pages/Available.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import ArtDetails from "./pages/ArtDetails";
const App = () => {
  return (
    <div className="pt-20">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/shop" element={<Available />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/art-details/:id" element={<ArtDetails />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
