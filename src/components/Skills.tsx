import React from "react";
import csharp from "../images/csharp.png";
import netCore from "../images/dotnet_core.png";

const Skills = () => {
  return (
    <div id="skills" className="skills-section global-padding">
      <div className="container text-center">
        <div className="row">
          <h2>Skills</h2>
          <p className="b-underline"></p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img className="skill-icon" src={csharp} alt="CSharp Programming" />
            <h3>C#</h3>
            {/* Add familiarity bar underneath */}
          </div>
          <div className="col-md-6">
            <img className="skill-icon" src={netCore} alt="ASP.NET Core" />
            <h3>ASP.NET Core</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
