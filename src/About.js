import { about } from './portofolio';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';


function About() {
    const { name, role, social: {
        linkedin, github
    } } = about;
    return (
        <div>
            <span className='about-section'>
                <div className='text-center p-7'>
                    <h1>
                        <span className='text-gray-700 font-extrabold text-6xl'>Hi, I am </span>
                        <span className='text-[#2978b5] font-extrabold text-6xl'>{name}.</span>
                    </h1>
                    <h2 className='text-4xl p-6'>A {role}.</h2>
                </div>
                <div className='text-center'>
                    <div className='max-w-xl mx-auto'>
                        <p className='whitespace-pre-line'>
                            Hi, my name is Arief, I am a recently graduated Associate Degree <b>Software Development</b> student. I'm very interested in backend development,
                            I like to learn more about RestAPI's, Microservices and Software development in general programming.Besides <b>Python</b>
                            I learned to work with <b>JavaScript</b> and <b>MySQL</b>. Please feel free to browse through my projects and feel free to contact me if you have any questions.
                        </p>

                    </div>
                </div>

                {/* <button><a href='#'>Resume</a></button> */}
                {/* <div className='about-buttons'> */}
                <div className='flex flex-grow justify-center p-5 m-3'>
                    <a href={github}><Button variant='outlined'>GitHub<GitHubIcon /></Button></a>
                    <a href={linkedin}><Button variant='outlined'>LinkedIn<LinkedInIcon /></Button></a>

                </div>

                {/* </div> */}
            </span >
        </div >
    );
}

export default About;