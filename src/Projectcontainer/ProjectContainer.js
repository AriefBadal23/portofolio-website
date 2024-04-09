import "./projectcontainer.css";


// {project} omdat dit beter is dan props.project
function ProjectContainer({ project }) {
    /* The playVideo function should retrieve the id of the video and play it if the mouse hover over the video */
    function Playvideo() {
        const play_video = document.getElementById(`video_${project.id}`);
        play_video.play();
    }
    return (
        <div id="demo-container" className=" flex-col flex ml-20 float-left mt-[4vh] p-5 border-2 bg-white shadow-slate-50 shadow-inner h-[620px] mr-12  " >
            <div>

            </div>
        </div>
    );
}

export default ProjectContainer;
