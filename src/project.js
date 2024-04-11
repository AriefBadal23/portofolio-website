import { projects } from "./portofolio";
import ProjectContainer from "./Projectcontainer/ProjectContainer";


function Projects() {

  return (
    <div className="flex flex-col items-center">
      <h1 id="demo" className="text-4xl font-bold text-center italic m-12">Projects</h1>
      <div className="project_container flex flex-wrap">
        {projects.map((item) => (
          <ProjectContainer project={item} />
        ))}
      </div>

    </div>
  );
}

export default Projects;
