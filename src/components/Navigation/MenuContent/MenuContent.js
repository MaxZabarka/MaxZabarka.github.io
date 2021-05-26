import React from "react";
import Icon from "./Icon/Icon";
import gitHubIcon from "../../../assets/Icons/github.svg";
import instagramIcon from "../../../assets/Icons/instagram.svg";
import emailIcon from "../../../assets/Icons/email.svg";

import "./MenuContent.scss";

const MenuContent = () => {
  return (
    <div className="MenuContent">
      <ul>
        <li>
          <button href="#">
            <span className="paint-hover">Home</span>
          </button>
        </li>
        <li>
          <button href="#">
            <span className="paint-hover">About</span>
          </button>
        </li>
        <li>
          <button href="#">
            <span className="paint-hover">Projects</span>
          </button>
        </li>
        <li>
          <button href="#">
            <span className="paint-hover">Contact</span>
          </button>
        </li>
      </ul>

      <div className="divider"></div>
      <div className="icons">
        <Icon link="https://github.com/MaxZabarka" image={gitHubIcon} alt="github-icon" />
        <Icon link="https://www.instagram.com/max.zabarka/" image={instagramIcon} alt="instagram-icon" />
        <Icon link="mailto: maxim.zabarka@gmail.com" image={emailIcon} alt="email  -icon" />

      </div>
    </div>
  );
};

export default MenuContent;
