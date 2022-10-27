import {about} from '../portofolio'
import './About.css';


function About() {
    const {name, role, description, social:{
        linkedin, github
    }} = about
    return ( 
        <div className='about-section'>
            <h2>{name}</h2>
            <h2>{role}</h2>
            <h3>{description}</h3>
            <p><a href={linkedin}>Linkedin</a></p>
            <p><a href={github}>Github</a></p>
            
        </div>
     );
}

export default About