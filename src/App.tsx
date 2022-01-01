import React from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import "./styles/portfolio.css";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Title />
    </div>
  );
}

export default App;
