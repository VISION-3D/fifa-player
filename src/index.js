import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

// Création de la racine de l'application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
