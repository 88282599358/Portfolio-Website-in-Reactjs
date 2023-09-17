import React from "react";

import Navigation from "./navigation-bar";
import IntroContent from "./intro-content";

import cloud from "../../images/cloud.png";
import cloudSoft from "../../images/cloud-soft.png";

import "../Intro/style.scss";
const Index = () => {
  return (
    <div className="Intro-section">
      <div className="Vector-bg" id="parallax"></div>
      <img src={cloud} className="cloud" alt="Cloud" />
      <img src={cloudSoft} className="cloud-soft" alt="CloudSoft" />
      <div className="content">
        <Navigation />
        <IntroContent />
      </div>
    </div>
  );
};

export default Index;
