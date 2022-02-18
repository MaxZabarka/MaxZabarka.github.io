import React from "react";
import Icon from "./Icon/Icon";
import gitHubIcon from "../../../assets/Icons/github.svg";
// import instagramIcon from "../../../assets/Icons/instagram.svg";
import emailIcon from "../../../assets/Icons/email.svg";
import linkIcon from "../../../assets/Icons/linkedin.svg";

import "./MenuContent.scss";

const MenuContent = (props) => {
  return (
    <div className="MenuContent">
      <ul>
        <li>
          <button onClick={() => {
            props.onNavigate("Home")
            props.onClose()
          }} href="#">
            <span className="paint-hover">Home</span>
          </button>
        </li>
        <li>
          <button onClick={() => {
            props.onNavigate("About")
            props.onClose()
          }} href="#">
            <span className="paint-hover">About</span>
          </button>
        </li>
        <li>
          <button onClick={() => {
            props.onNavigate("Work")
            props.onClose()
          }} href="#">
            <span className="paint-hover">Work</span>
          </button>
        </li>
        <li>
          <button onClick={() => {
            props.onNavigate("Contact")
            props.onClose()

          }} href="#">
            <span className="paint-hover">Contact</span>
          </button>
        </li>
      </ul>

      <div className="divider"></div>
      <div className="icons">
        <Icon link="https://github.com/MaxZabarka" image={gitHubIcon} alt="github-icon" />
        {/* <Icon link="https://www.instagram.com/max.zabarka/" image={instagramIcon} alt="instagram-icon" /> */}
        <Icon link="https://www.linkedin.com/in/max-zabarka-0a739a1b6/" image={linkIcon} alt="linkedin-icon" />
        <Icon link="mailto: maxim.zabarka@gmail.com" image={emailIcon} alt="email-icon" />
      </div>
    </div>
  );
};

export default MenuContent;
