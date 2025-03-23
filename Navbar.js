import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const scrollToSection = (id) => {
    if (id === "home") {
      // If already at the top (home page), reload the page
      if (window.scrollY === 0) {
        window.location.reload();
      } else {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      }
    } else {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      {/* Logo Image (Make sure 'logo.png' is inside the 'public' folder) */}
      <img src="/logo.png" alt="Cozy Cups Logo" className="logo" />

      {/* Navigation Buttons */}
      <nav className="nav-links">
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("menu")}>Menu</button>
        <button onClick={() => scrollToSection("gallery")}>Gallery</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </nav>
    </header>
  );
};

export default Navbar;
