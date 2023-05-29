import { projects } from "../portofolio";
import ProjectContainer from "../Projectcontainer/projectcontainer";
import "./projects.css";


function Projects() {
  return (
    <div className="project_container">
      <h1 id="project-container-title">My projects</h1>
      {projects.map((item) => (
        <ProjectContainer project={item} />
      ))}
    </div>
  );
}

export default Projects;
