import "./Skillbar.css";
function Skillbar(props) {
    return (
        <li><h4><span className="bar"><span className={`${props.skill.skill}`} style={{width: `${props.skill.progress}`}}>{props.skill.skill}</span></span></h4></li>
    );
}

export default Skillbar;