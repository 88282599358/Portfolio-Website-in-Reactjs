import React from "react";
import Section from "../shared/section";
import "./style.scss";
import TechIcons from "../../images/tech-icons.png";
import CallToAction from "../shared/CallToAction";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Resume from "../../download/file-sample_150kB.pdf";

const Skills = () => {
  return (
    <Section background="dark" id="skills">
      <div className="skills-content-wrapper">
        <div className="left-col">
          <img src={TechIcons} alt="This is Tech Icon" />
        </div>
        <div className="right-col">
          <h2>Skills</h2>
          <p>
          I am FrontEnd Developer in Reactjs, also know C, JAVA, PYTHON, 
           <br />
           HTML, CSS, Bootstrap, JavaScript <br />
           

          </p>
          <CallToAction 
            text= "Download CV"
            icon = {< AiOutlineCloudDownload/>}
            action={() => window.open(Resume)}
          />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
