import { about } from '../portofolio';
import './About.css';
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
                <div className='about-intro-section'><h1 id><span id='about-intro'>Hi, I am  </span><span id='about-name'>{name}.</span></h1>
                <h2 id='about-role'>A {role}.</h2></div>
                <span className='about-description'>
                <p>Hi, my name is Arief👋, my goal is to become a software developer and work on real world software.</p>
                <p>I started my programming journey in 2021 with Python and I'm still learning about Python and</p>
                <p>  programming in general  everyday.I'm interested in backend development, but I also like to work on</p> 
                <p> the frontend with frameworks like React. Besides <b>Python</b> I learned  to work with <b>JavaScript</b> and <b>MySQL</b>.</p>
                <p>Please feel free to browse trough my projects and contact me if you have any questions.</p>
                </span>

                {/* <button><a href='#'>Resume</a></button> */}
                <div className='about-buttons'>
                    <a href={github}><Button variant='outlined'>GitHub<GitHubIcon /></Button></a>
                    <a href={linkedin}><Button variant='outlined'>LinkedIn<LinkedInIcon /></Button></a>

                </div>
            </span>
        </div> 
    );
}

export default About;