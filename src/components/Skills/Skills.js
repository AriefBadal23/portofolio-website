import { skills } from "../portofolio";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills-container">
        <h1>Skills</h1>
      <span>
        {skills.map((skill) => (
          <p id="skill">{skill}</p>
        ))}
      </span>
    </div>
  );
}

export default Skills; 
