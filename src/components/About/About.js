import {about} from '../portofolio'
import './About.css';


function About() {
    const {name, role, description} = about
    return ( 
        <div className='about-section'>
            <h2>{name}</h2>
            <h2>{role}</h2>
            <h3>{description}</h3>
        </div>
     );
}

export default About