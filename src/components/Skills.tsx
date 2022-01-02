import React from "react";
import csharp from "../images/csharp.png";
import netCore from "../images/aspnetcore.png";
import efCore from "../images/ef_core.png";
import reactJs from "../images/react.png";
import sql from "../images/sql_server.png";
import git from "../images/git.svg";

const Skills = () => {
  return (
    <div id="skills" className="skills-section global-padding">
      <div className="container text-center">
        <div className="row">
          <h2>Skills</h2>
          <p className="b-underline"></p>
        </div>

        <div className="row">
          <div className="col-md-4">
            <img className="skill-icon" src={csharp} alt="CSharp Programming" />
            <h3>C#</h3>
            {/* Add familiarity bar underneath */}
          </div>
          <div className="col-md-4">
            <img
              className="skill-icon"
              src={reactJs}
              alt="CSharp Programming"
            />
            <h3>React JS</h3>
            {/* Add familiarity bar underneath */}
          </div>
          <div className="col-md-4">
            <img className="skill-icon" src={git} alt="Entity Framework Core" />
            <h3>Git VC</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <img className="skill-icon" src={netCore} alt="ASP.NET Core" />
            <h3>ASP.NET Core</h3>
          </div>
          <div className="col-md-4">
            <img className="skill-icon" src={sql} alt="ASP.NET Core" />
            <h3>SQL Server</h3>
          </div>
          <div className="col-md-4">
            <img
              className="skill-icon"
              src={efCore}
              alt="Entity Framework Core"
            />
            <h3>EF Core</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <img className="skill-icon" src={sql} alt="ASP.NET Core" />
            <h3>SQL Server</h3>
          </div>
          <div className="col-md-4">
            <img className="skill-icon" src={netCore} alt="ASP.NET Core" />
            <h3>ASP.NET Core</h3>
          </div>
          <div className="col-md-4">
            <img
              className="skill-icon"
              src={efCore}
              alt="Entity Framework Core"
            />
            <h3>EF Core</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
