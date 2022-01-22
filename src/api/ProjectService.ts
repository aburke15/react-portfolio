import { githubToken } from '../env';
import GithubProject from '../shared/GithubProject';

const userRepoRoute = "https://api.github.com/user/repos?per_page=100";
const projects: Array<GithubProject> = [];

const setProjects = (data: any[]): void => {
  data.forEach((project: any) => {
    projects.push({
      name: project.name,
      createdAt: project.created_at,
      description: project.description,
      htmlUrl: project.html_url,
      language: project.language,
    } as GithubProject);
  });
}

const GetProjects = (): Array<GithubProject> => {
  fetch(userRepoRoute, {
    method: "GET",
    headers: { Authorization: `token ${githubToken}` },
  })
  .then((res) => res.json())
  .then((data) => {
    setProjects(data);
  }).catch((error) => {
    console.log(error);
  });

  return projects;
}

const GetProjectDetails = (): void => {} 

export const ProjectService = { GetProjects };