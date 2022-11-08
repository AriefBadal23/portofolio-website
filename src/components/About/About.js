import { about } from '../portofolio';
import './About.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
                <a href={github}><GitHubIcon /></a>
                <a href={linkedin}><LinkedInIcon /></a>
            </div>
            
        </div>
    );
}

export default About;