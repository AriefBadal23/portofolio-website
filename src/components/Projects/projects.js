import { projects } from "../portofolio";
import './projects.css'

function Project() {
    const {project1, project2, project3, project4, project5} = projects
    return ( 
        <div className="projects-container">
            {/* .map() gebruiken en een kaart maken voor ieder project */}
            <h1>Projects</h1>
        </div>

     );
}

export default Project;