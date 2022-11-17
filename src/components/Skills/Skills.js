import { skills } from "../portofolio";
import "./Skills.css";

function Skills() {
  return (
    // changed classname to id to make the anchor work in the navbar when clicked
    // the id attribute is not unique! (seen error in the console)
    <div className="skills-container">
        <h1 id="skills-header">Skills</h1>
      <span>
        {skills.map((skill) => (
          <p id="skill">{skill}</p>
        ))}
      </span>
    </div>
  );
}

export default Skills; 
