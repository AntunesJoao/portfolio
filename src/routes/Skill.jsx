import "./Skill.css";

import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiYolo } from "react-icons/si";
import { SiRoboflow } from "react-icons/si";

import py from "../img/py.svg";

const Skill = () => {
  return (
    <div className="skill-control">
      <div className="colum">
        <IoLogoHtml5 size={100} color="red" />
        <FaCss3Alt size={100} color="blue" />
        <RiJavascriptFill size={100} color="yellow" />
        <IoLogoReact size={100} color="cyan" />
      </div>
      <div className="colum">
        <FaNode size={100} />
        <img src={py} alt="python" width={90} height={100} />
        <FaJava size={100} />
      </div>
      <div className="colum">
        <FaGitAlt size={100} color="rgb(223, 78, 50)" />
        <FaSquareGithub size={100} color="black" />
        <SiYolo size={100} color="blue" />
        <SiRoboflow size={100} color="blue" />
      </div>
    </div>
  );
};

export default Skill;
