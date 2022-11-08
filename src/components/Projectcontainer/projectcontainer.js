// {project} omdat dit beter is dan props.project
import './projectcontainer.css'
function ProjectContainer({project}) {
    return (
        <div className="project-container">
                <p>{project.name}</p>
                <p>{project.description}</p>
                <p>{project.codestack}</p>
        </div>
     );
}

export default ProjectContainer;    