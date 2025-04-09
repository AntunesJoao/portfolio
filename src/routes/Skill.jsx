import "./Skill.css";

import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { FaAngular } from "react-icons/fa6";

const Skill = () => {
  return (
    <div className="skill-control">
      <div className="colum">
        <IoLogoHtml5 size={100} color="red" />
        <FaCss3Alt size={100} color="blue" />
        <RiJavascriptFill size={100} color="yellow" />
        <IoLogoReact size={100} color="cyan" />
        <FaAngular size={100} color="red" />
      </div>
      <div className="colum">
        <FaNode size={100} />
        <FaGitAlt size={100} color="rgb(223, 78, 50)" />
        <FaSquareGithub size={100} color="black"/>
        <FaPython size={100} color="rgb(208, 255, 0)" />
      </div>
    </div>
  );
};

export default Skill;
