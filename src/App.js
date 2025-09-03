// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./PlayersList";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", margin: "20px", fontFamily: "Arial, sans-serif" }}>
        Cartes FIFA ⚽
      </h1>
      <PlayersList />
    </div>
  );
}

export default App;
