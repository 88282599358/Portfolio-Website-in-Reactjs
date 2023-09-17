import React from "react";
import hand from "../../../images/hand.png";
import girl from "../../../images/girl.png";
import CallToAction from "../../shared/CallToAction";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import "./style.scss"
const IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
              <span className="icon">
                <img src={hand} alt="This is Hand" />
              </span>
              <span className="text">, I Am</span>
            </span>
            <span className="big-text">Sachin Prajapati</span>
          </h1>
          <p>
            A Bachelor of Engineering Student at Atharva College of Engineeering, <br />
            I am FrontEnd Developer in Reactjs, also know C, JAVA, PYTHON, <br />
            I am Member of GDSC ACE in Web Team 
            
          </p>
          <CallToAction text="Contact me" />
        </div>
        <div className="right-col">
          <img src={girl} alt="This is Girl" />
          <div className="highlights horizontal">
            <div className="icon">
              <BsAwardFill />
            </div>
            <div className="text">Best Design Award</div>
          </div>
          <div className="highlights vertical">
            <div className="icon">
              <FaUser />
            </div>
            <div className="text">
              <span>4+</span>
              Happy Customers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
