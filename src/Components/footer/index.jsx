import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaPinterest,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import Section from "../shared/section";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helper";
import Logo from "../../images/logos.png";
import "./style.scss";

const Footer = () => {
  return (
    <Section background="dark" className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-logo">
          <img src={Logo} alt="This is Logo" />
        </div>
        <ul className="footer-menu-items">
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("portfolio")}
          >
            PortFolio
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("blogs")}
          >
            Blogs & Articles
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </li>
        </ul>
        <div className="social-icons">
          <SocialIcon color="#0D2636"  className="social-icon"  icon={<FaGithub />} />
          <SocialIcon color="#0D2636"  className="social-icon"  icon={<FaFacebook />} />
          <SocialIcon color="#0D2636" className="social-icon"   icon={<FaLinkedin />} />
          <SocialIcon color="#0D2636"  className="social-icon"  icon={<FaInstagram />} />
          <SocialIcon color="#0D2636"  className="social-icon"  icon={<FaPinterest />} />
        </div>
        <div className="bottom-bar">
            <div className="copyright-text">
            Copyright | 2023 | ABC Company | All Rights Reserved 
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
