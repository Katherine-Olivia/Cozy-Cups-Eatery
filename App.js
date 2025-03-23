import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";  // ✅ Import Gallery
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="menu"><Menu /></div>
      <div id="gallery"><Gallery /></div>  {/* ✅ Added Gallery section */}
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
