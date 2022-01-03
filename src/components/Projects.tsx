import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

interface GithubProject {
  name: string;
  createdAt: string;
  description: string;
  htmlUrl: string;
  language: string;
}

const columns = [
  {
    name: "Name",
    selector: (row: GithubProject) => row.name,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row: GithubProject) => row.description,
    sortable: false,
    wrap: true,
  },
  {
    name: "Language",
    selector: (row: GithubProject) => row.language,
    sortable: true,
    right: true,
  },
];

const projects: GithubProject[] = [];

const setProjects = (data: any[]) => {
  data.forEach((item) => {
    const project: GithubProject = {
      name: item.name,
      createdAt: item.created_at,
      description: item.description,
      htmlUrl: item.html_url,
      language: item.language,
    };
    projects.push(project);
  });
};

const Projects = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.github.com/users/aburke15/repos")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <div id="projects" className="projects-section global-padding">
      <div className="container">
        <div className="row text-center">
          <h2>Projects</h2>
          <p className="b-underline"></p>
        </div>
        <div className="row">
          <DataTable responsive columns={columns} data={projects} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
