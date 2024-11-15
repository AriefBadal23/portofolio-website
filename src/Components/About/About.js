import { about } from '../portofolio';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import './About.css';


function About() {
    const { name, role, social: {
        linkedin, github
    } } = about;
    return (
        <div id="contact">
            <span className='about-section'>
                <div className='text-center p-7'>
                    <h1>

                        <span className='text-gray-700 font-extrabold text-6xl'>Hi, I am </span>
                        <span className='text-[#2978b5] font-extrabold text-6xl'>{name}.</span>
                    </h1>
                    <h2 className='text-4xl p-6'>A {role}.</h2>
                </div>
                <div className='text-center'>
                    <div className='max-w-xl mx-auto text-[14px] md:text-[16px]'>
                        <p className='whitespace-pre-line'>
                            Hi, my name is Arief, I am a recently graduated Associate Degree <b>Software Development</b> student. I'm very interested in backend development,
                            I like to learn more about RestAPI's, Microservices and Software development in general.
                            The languages I have worked with are <b>Python</b>, <b>JavaScript</b> and <b>C#</b>, with frameworks like ReactJS, <b>Flask</b>, <b>Django</b> and other tools like <b>Docker</b> and <b>Postman</b>.

                        </p>
                        <p>If you have any questions please feel free to contact me via LinkedIn.</p>
                    </div>
                </div>

                {/* <button><a href='#'>Resume</a></button> */}
                {/* <div className='about-buttons'> */}
                <div className='flex flex-grow justify-center p-5 m-3'>
                    {/* <a href={github}><Button variant='outlined'>GitHub<GitHubIcon /></Button></a> */}
                    {/* <a href={linkedin}><Button variant='outlined'>LinkedIn<LinkedInIcon /></Button></a> */}
                    <ul class="wrapper">
                        <li class="icon github">
                            <span class="tooltip">Github</span>
                            <a href={github}><span><i class="fab fa-github"></i></span></a>
                        </li>
                        <li class="icon linkedin">
                            <span class="tooltip">Linkedin</span>
                            <a href={linkedin}><span><i class="fab fa-linkedin"></i></span></a>
                        </li>
                    </ul>
                </div>

            </span >
        </div >
    );
}

export default About;