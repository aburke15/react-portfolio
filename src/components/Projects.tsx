import React, { useState, useEffect, FunctionComponent } from "react";
import DataTable from "react-data-table-component";
import { githubToken } from "../env";
import Loading from "./Loading";
import GithubProject from "../shared/GithubProject";

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
    name: "Project Link",
    selector: (row: GithubProject) => row.html_url,
    sortable: false,
    cell: (row: GithubProject) => (
      <a
        className="btn btn-secondary"
        target="_blank"
        rel="noopener noreferrer"
        href={row.html_url}
      >
        Go to project
      </a>
    ),
  },
  {
    name: "Created At",
    selector: (row: GithubProject) =>
      new Date(row.created_at).toLocaleDateString(),
    sortable: false,
  },
  {
    name: "Language",
    selector: (row: GithubProject) => row.language,
    sortable: true,
    right: true,
  },
];

const Projects: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const url =
      "https://api.github.com/user/repos?per_page=100&affiliation=owner&sort=created&direction=desc";
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `token ${githubToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          // add table pages
          setProjects(data);
          setIsLoading(false);
        }, 500);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div id="projects" className="projects-section global-padding">
      <div className="container">
        <div className="row text-center">
          <h2>Projects</h2>
          <p className="b-underline"></p>
        </div>
        <div className="row global-margin">
          {isLoading ? (
            <Loading />
          ) : (
            <DataTable responsive columns={columns} data={projects} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
