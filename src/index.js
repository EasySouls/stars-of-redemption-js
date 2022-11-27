import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";

// Hash router makes the webpage with routing deployable to Github Pages
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
