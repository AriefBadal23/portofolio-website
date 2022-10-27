import {skills} from '../portofolio'


function Skills() {
    return ( 
        skills.map((skill) =>{
            return (
            <div>
                <ul>
                <li>{skill}</li>    
                </ul>
            </div>
         ) })
     );
}

export default Skills;