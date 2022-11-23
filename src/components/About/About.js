import { about } from '../portofolio';
import './About.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button'


function About() {
    const { name, role, description, social: {
        linkedin, github
    } } = about;
    return (
        <div className='about-section'>
            <h1 id='about-intro'>Hi, I am  <span className='about-name'>{name}.</span></h1>
            <h2 className='about-role'>A {role}.</h2>
            <p>Hi, my name is Arief I currently do a Software developer education at Rotterdam Academy</p>
            <p> Here I have learned to program with different languages like Python, Javascript and to work with the Scrum methodology</p>
            {/* <button><a href='#'>Resume</a></button> */}
            <div className='about-buttons'>
                <a href={github}><Button variant='outlined'>GitHub<GitHubIcon /></Button></a>
                <a href={linkedin}><Button variant='outlined'>LinkedIn<LinkedInIcon /></Button></a>
                
            </div>
            
        </div>
    );
}

export default About;