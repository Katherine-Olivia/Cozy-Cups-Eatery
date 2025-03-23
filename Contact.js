import React, { useEffect, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".contact-section");
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

  return (
    <section className={`contact-section ${show ? "show" : ""}`}>
      <h2 className={`fade-in ${show ? "visible" : ""}`}>Contact Us</h2>

      {/* Contact Information */}
      <div className="contact-info">
        <p><strong>Phone:</strong> +91 9042 836640</p>
        <p><strong>Instagram:</strong> @cozycups</p>
        <p><strong>WhatsApp:</strong> +91 9042 836640</p>
        <p><strong>Email:</strong> enquiry.cozycups@gmail.com</p>
      </div>

      {/* Locate Us Section */}
      <h2 className={`fade-in ${show ? "visible" : ""}`}>Locate Us</h2>
      <p className="address">100 Feet Road, Velachery, Chennai, India</p>

      {/* Google Map Integration */}
      <div className="map-container">
        <iframe
          title="Cozy Cups Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7776.553940424832!2d80.21875234477537!3d12.979119928532193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52677e0c933e7f%3A0xe814d5f135db3549!2s100%20Feet%20Rd%2C%20Velachery%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711500000000!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
