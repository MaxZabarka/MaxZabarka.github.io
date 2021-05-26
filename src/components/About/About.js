import React from "react";
import "./About.scss"
import AboutBody from "./AboutBody/AboutBody";
import Caption from "./Caption/Caption";
const About = () => {
  return (
    <div className="About">
      <Caption/>
      <AboutBody/>
    </div>
  );
};

export default About;
