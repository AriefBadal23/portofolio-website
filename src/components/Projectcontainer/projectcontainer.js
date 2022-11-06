// {project} omdat dit beter is dan props.project
function ProjectContainer({project}) {
    return (
        <div className="project-container">
            <ul>
                <li>{project.name}</li>
                <li>{project.description}</li>
                <li>{project.codestack}</li>
            </ul>
        </div>
     );
}

export default ProjectContainer;    