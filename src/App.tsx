import React from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import "./styles/portfolio.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Bio from "./components/Bio";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Title />
      <Bio />
      <Skills />
    </div>
  );
}

export default App;
