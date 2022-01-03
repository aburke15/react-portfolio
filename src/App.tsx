import React from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import "./styles/portfolio.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="portfolio-font">
      <Navbar />
      <Title />
      <Bio />
      <Skills />
      <Resume />
    </div>
  );
}

export default App;
