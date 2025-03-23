import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1500); // Logo falls after 1.5 seconds
  }, []);

  return (
    <section className="home-section">
      {/* Left-Aligned Text */}
      <div className="home-text">
        <h1>Welcome to <br /> Cozy Cups! <br /> </h1>
        <p><br />A unique eatery bringing together<br / >
        the irresistible flavors of waffles, boba tea,<br /> strawberry chocolate, and mojito.</p></div>
        <p className="smallpara"> <br /> Cozy cups is the ultimate new innovation<br /> of the city which sells new age Gen-z foods<br /> for your Insta worth stories and<br /> money worth tummies !</p>
      

      {/* Big Logo on the Right */}
      <img
        src="/logo.png"
        alt="Cozy Cups Logo"
        className={`home-logo ${animate ? "falling" : ""}`}
      />
    </section>
  );
};

export default Home;
