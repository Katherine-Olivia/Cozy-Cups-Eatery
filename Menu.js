import React, { useEffect, useState } from "react";
import "./Menu.css";

const Menu = () => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = ["/menu1.jpeg", "/menu2.jpeg"]; // ✅ Add your two images

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".menu-section");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // Apply transition when visible, reset when out of view
        if (sectionTop < window.innerHeight - 100 && sectionBottom > 100) {
          setShow(true);
        } else {
          setShow(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Automatically switch images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`menu-section ${show ? "show" : ""}`}>
      {/* Menu Text on Left */}
      <div className="menu-text">
        <h2 className={`fade-in ${show ? "visible" : ""}`}>Our Menu</h2>
        <p className={`fade-in ${show ? "visible" : ""}`}>
          Indulge in our delicious range of waffles, boba tea, and refreshing mojitos!  
          Our menu is carefully crafted to bring you the best flavors at the most affordable prices.  
        </p>
        <p className={`fade-in-delay ${show ? "visible" : ""}`}>
          <strong>Waffles</strong><br />
          More than just a treat, waffles are a warm, crispy, and fluffy delight, perfect with endless toppings.  
          At Cozy Cups, we add creativity to this classic, making every bite a unique experience.
          <br /><br />
          <strong>Strawberry Chocolate</strong><br />
          A rich blend of creamy chocolate and fresh strawberries, this flavor balances indulgence and tangy sweetness.  
          Cozy Cups highlights this irresistible duo for a perfect sweet and fruity treat.
          <br /><br />
          <strong>Boba Tea</strong><br />
          More than a drink, boba tea is a fun mix of chewy tapioca pearls and refreshing flavors.  
          At Cozy Cups, we bring trendy and exciting boba tea options for a delightful experience.
        </p>
      </div>

      {/* Auto-Sliding Menu Image */}
      <img src={images[currentImage]} alt="Our Menu" className="menu-image fade-slide" />
      </section>
  );
};

export default Menu;
