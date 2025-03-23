import React, { useEffect, useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [imageIndexes, setImageIndexes] = useState([0, 0, 0]);

  const images = [
    ["/gallery1a.jpeg", "/gallery1b.jpeg"], // First frame images
    ["/gallery2a.jpg", "/gallery2b.jpg"], // Second frame images
    ["/gallery3a.jpg", "/gallery3b.jpg"], // Third frame images
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".gallery-section");
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
      setImageIndexes((prevIndexes) =>
        prevIndexes.map((index, i) => (index + 1) % images[i].length)
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`gallery-section ${show ? "show" : ""}`}>
      <h2 className={`fade-in ${show ? "visible" : ""}`}>Gallery</h2>

      {/* Gallery Frames Container */}
      <div className="gallery-container">
        {images.map((imageSet, i) => (
          <div key={i} className="gallery-frame">
            <img src={imageSet[imageIndexes[i]]} alt="Gallery" className="gallery-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
