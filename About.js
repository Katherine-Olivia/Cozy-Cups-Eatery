import React, { useEffect, useState } from "react";
import "./About.css";

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".about-section");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // Show animation when section is in view, hide when out of view
        if (sectionTop < window.innerHeight - 100 && sectionBottom > 100) {
          setShow(true);
        } else {
          setShow(false); // Reset animation when scrolling up
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`about-section ${show ? "show" : ""}`}>
      {/* Founder Image */}
      <img src="/founder.png" alt="Founder" className="founder-image" />

      {/* About Text */}
      <div className="about-text">
        <h2 className={`fade-in ${show ? "visible" : ""}`}>Meet the Founder</h2>
        <p className={`fade-in-delay ${show ? "visible" : ""}`}>
        Cozy Cups is driven by two ambitious 19-year-olds, Yasuvanthan and Parasharan, 
        who turned their restaurant experience into a passion for the food industry. 
        Determined to break free from the 9-to-5 grind, they aim for early financial 
        independence through smart, hard work. Believing food is central to life, 
        they created Cozy Cups to offer quality, hygiene, and creative twists on popular treats.
        With innovation and dedication, they strive to make Cozy Cups a standout success.
          <br /> <br />
        At Cozy Cups, we’re redefining waffles and boba tea, bringing trendy, 
        delicious, and affordable treats to Velachery. Noticing a gap in the market,
         we set out to offer Gen Z favorites—boba, waffles, and mojitos—at fair prices without compromising quality. 
         With a passion for great food and hygiene, we create a cozy space where everyone can indulge
          in exciting flavors without breaking the bank.
        </p>
      </div>
    </section>
  );
};

export default About;
