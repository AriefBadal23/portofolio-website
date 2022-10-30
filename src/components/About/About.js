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
            <h2>Hi, I am <h2 className='about-name'>{name}</h2></h2>
            <h2 className='about-role'>A {role}</h2>
            <h3>{description}</h3>
            <LinkedInIcon /><a href={linkedin}></a>
            <GitHubIcon /><a href={github}></a>
        </div>
    );
}

export default About;