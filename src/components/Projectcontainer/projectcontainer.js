// {project} omdat dit beter is dan props.project
import "./projectcontainer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button'


function ProjectContainer({ project }) {
    return (
        <div id="container">
            <div className="card">
                <img src={`images/${project.image}`} alt={project.description}></img>
                <span className="tag">{project.codestack}</span>
                <div className="name">{project.name}</div>
                <p>{project.description}</p>
                <Button variant="outlined"><GitHubIcon/></Button>
            </div>
        </div>
    );
}

export default ProjectContainer;
