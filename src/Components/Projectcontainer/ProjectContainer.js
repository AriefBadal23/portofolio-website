import "./projectcontainer.css";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


// {project} omdat dit beter is dan props.project
function ProjectContainer({ project }) {

    return (
        <div id="demo-container" className="flex flex-col md:flex-row items-center">
            <div className="project-thumb md:mb-0 md:mr-4">
                <img
                    src={`${process.env.PUBLIC_URL}/images/${project.image}`}

                    alt={project.name}
                    className="border-8 border-sky-800 hidden md:block md:w-[200px]"
                />
            </div>
            <div className="project-details w-2/5">
                <h1 className="text-xl pl-4 md:text-4xl md:font-semibold">{project.name}</h1>
                <p className="description pl-4 text-wrap text-[14px] md:pl-2 md:text-[16px]">{project.description}</p>
                <p className="px-2 py-1 border border-gray-600 rounded-full text-xs font-semibold text-gray-500 hidden md:block md:w-fit md:text-sky-800 md:font-extrabold md:text-xs">
                    { project.codestack}
                </p>
            </div>
        </div>


    );
}

export default ProjectContainer;