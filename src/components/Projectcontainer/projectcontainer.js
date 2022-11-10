// {project} omdat dit beter is dan props.project
import "./projectcontainer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button'


function ProjectContainer({ project }) {
    return (
        <div id="container">
            <div className="card">
                <img src="https://t4.ftcdn.net/jpg/02/20/95/83/240_F_220958300_zORapGHwkTfw2XIeS2mQVf0cdcwMMwxB.jpg" alt=""></img>
                <span className="tag">{project.codestack}</span>
                <span className="tag">Pygame</span>
                <div className="name">{project.name}</div>
                <p>{project.description}</p>
                <Button variant="outlined"><GitHubIcon></GitHubIcon></Button>
            </div>
        </div>
    );
}

export default ProjectContainer;
