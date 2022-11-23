import Skillbar from "../../Skillbar/Skillbar";
import {skills } from "../portofolio";
import "./Skills.css";

function Skills() {
  const [Python, Javascript, MySQL, Flask] = skills
  return (
    // changed classname to id to make the anchor work in the navbar when clicked
    // the id attribute is not unique! (seen error in the console)
    <div className="skills-container">
        <h1 id="skills-header">Skills</h1>
        <div className="skill">
         <Skillbar skill={Python}/>
         
         <Skillbar skill={MySQL}/>
         <Skillbar skill={Javascript}/>
         <Skillbar skill={Flask}/>
  	    </div>
    </div>
  );
}

export default Skills; 
