import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Create the root container for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
