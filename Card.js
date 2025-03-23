// src/components/ui/Card.js
import React from "react";

const Card = ({ children }) => {
  return (
    <div style={{
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      backgroundColor: "#fff",
      margin: "10px"
    }}>
      {children}
    </div>
  );
};

export default Card;
