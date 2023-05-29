
import "./Skills.css";

function Skills() {
  // const [Python, Javascript, MySQL, Flask] = skills
  return (
    // changed classname to id to make the anchor work in the navbar when clicked
    // the id attribute is not unique! (seen error in the console)
    <div className="skills-container">
      <h1 id="skills-header">Skills</h1>
      <div className="skill-icons">
        <div className="python-icon">
          <i class="devicon-python-plain-wordmark" style={{ fontSize: "70pt" }}></i>
        </div>
        <div className="javascript-icon">
          <i class="devicon-javascript-plain" style={{ fontSize: "70pt" }}></i>
        </div>
        <div className="flask-icon">
          <i class="devicon-flask-original-wordmark" style={{ fontSize: "70pt" }}></i>
        </div>
        <div className="mysql-icon">
          <i class="devicon-mysql-plain-wordmark" style={{ fontSize: "70pt" }}></i>
        </div>
        <div className="react-icon">
          <i class="devicon-react-original-wordmark" style={{ fontSize: "70pt" }}></i>
        </div>
        <div className="ionic-icon">
          <i class="devicon-ionic-original-wordmark" style={{ fontSize: "70pt" }}></i>
        </div>
        <div className="html-icon">
          <i class="devicon-html5-plain-wordmark" style={{ fontSize: "70pt" }}></i>
        </div>
        <div className="css-icon">
          <i class="devicon-css3-plain-wordmark" style={{ fontSize: "70pt" }}></i>
        </div>
        <div className="sqlalchemy-icon">
          <i class="devicon-sqlalchemy-original-wordmark" style={{ fontSize: "70pt" }}></i>
        </div>
        {/* https://devicon.dev/ */}
      </div>
    </div>
  );
}

export default Skills; 
