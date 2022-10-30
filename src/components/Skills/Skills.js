import {skills} from '../portofolio'
import './Skills.css';


function Skills() {
    return ( 
        skills.map((skill) =>{
            return (
            <div className='Skills-section'>
                <ul>
                <li>{skill}</li>    
                </ul>
            </div>
         ) })
     );
}

export default Skills;