import React from "react";
import "./App.css";
import "./styles/animations.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import SteelPlantsService from "./pages/SteelPlantsService";
import QuoteRequest from "./pages/QuoteRequest";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<QuoteRequest />} />
          <Route path="/steel-plants" element={<SteelPlantsService />} />
          <Route path="/ms-fabrication" element={<Services />} />
          <Route path="/preengineeringstructure" element={<Services />} />
          <Route path="/sheet-metal-component" element={<Services />} />
          <Route path="/structural-fabrication" element={<Services />} />
          <Route path="/ss-fabrication" element={<Services />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;