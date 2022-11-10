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
            <p>{description}.</p>
            {/* <button><a href='#'>Resume</a></button> */}
            <div className='about-buttons'>
                <Button variant='outlined'>GitHub<a href={github}><GitHubIcon /></a></Button>
                <Button variant='outlined'>LinkedIn<a href={linkedin}><LinkedInIcon /></a></Button>
                
            </div>
            
        </div>
    );
}

export default About;