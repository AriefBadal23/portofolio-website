import "./projectcontainer.css";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


// {project} omdat dit beter is dan props.project
function ProjectContainer({ project }) {
    /* The playVideo function should retrieve the id of the video and play it if the mouse hover over the video */
    function Playvideo() {
        const play_video = document.getElementById(`video_${project.id}`);
        play_video.play();
    }
    return (
        // TODO: bij elke card wordt er een aparte <div> container aangemaakt
        <div id="demo-container">
            <div className="demo-preview">
                {/* bij een eventhandler geen () zetten anders werkt het niet naar behoren */}
                {/* The video element has now a unique id */}

                <div className="demo-preview hidden md:block">

                    {project.video ? <video id={`video_${project.id}`} muted width={300} height={300} onMouseOver={(id) => Playvideo(id)} >
                        <source type="video/webm" src={`videos/${project.video}`} />
                    </video> :
                        <div>
                            <img src={`images/${project.image}`} alt={project.name} />
                        </div>
                    }
                </div>
                <div id={`project_${project.id}`} className="block md:hidden">
                    {project.image ? <img src={`images/${project.image}`} alt={project.name} /> : <img src={`images/Soon.png`} alt="coming soon" />}
                </div>
                <span className="tag">{project.codestack}</span>
                <div className="name">{project.name}</div>
                <p>{project.description}</p>
                {project.url ?
                    <a href={project.url}><OpenInNewIcon /></a> : <div></div>}
            </div>
        </div>
    );
}

export default ProjectContainer;