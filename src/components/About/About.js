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
                    <p>Hi, my name is Arief I currently do a Software developer education at Rotterdam Academy.</p>
                    <p>Here I have learned to program with different languages like Python, Javascript and to </p>
                    <p>work with the Scrum methodology. We used this while working on different coding projects.</p>
                    <p>On my portofolio you can find the projects I have worked on with my schoolprojects and some</p>
                    <p>personal projects as well.</p>
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