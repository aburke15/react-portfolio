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
    selector: (row: GithubProject) => row.htmlUrl,
    sortable: false,
    cell: (row: GithubProject) => (
      <a
        className="btn btn-secondary"
        target="_blank"
        rel="noopener noreferrer"
        href={row.htmlUrl}
      >
        Go to project
      </a>
    ),
  },
  {
    name: "Created At",
    selector: (row: GithubProject) =>
      new Date(row.createdAt).toLocaleDateString(),
    sortable: false,
  },
  {
    name: "Language",
    selector: (row: GithubProject) => row.language,
    sortable: true,
    right: true,
  },
];

interface ILocalState {
  projects: Array<GithubProject>;
  isLoading: boolean;
}

const defaultState: ILocalState = {
  projects: [],
  isLoading: false,
};

const Projects: FunctionComponent = () => {
  const [localState, setLocalState] = useState(defaultState);

  useEffect(() => {
    setLocalState({ ...localState, isLoading: true });
    const url = "https://portfolio-be.azurewebsites.net/api/GitHub/repos";
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          // add table pages
          setLocalState({ ...localState, projects: data, isLoading: false });
        }, 500);
      })
      .catch((error) => {
        console.log(error);
        setLocalState({ ...localState, isLoading: false });
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
          {localState.isLoading ? (
            <Loading />
          ) : (
            <DataTable
              responsive
              columns={columns}
              data={localState.projects}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
