import React from "react";
import Icon from "../Navigation/MenuContent/Icon/Icon";
import "./Contact.scss";
import Form from "./Form/Form";
import gitHubIcon from "../../assets/Icons/github.svg";
import instagramIcon from "../../assets/Icons/instagram.svg";
import emailIcon from "../../assets/Icons/email.svg";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="AboutBody">
        <h1 className="purple">Contact</h1>
        <h2>
          <span>I am looking for opportunities.</span> Let's build something
          great together!
        </h2>
        <Form />
      </div>
      <div className="icons">
        <Icon
          link="https://github.com/MaxZabarka"
          image={gitHubIcon}
          alt="github-icon"
        />
        <Icon
          link="https://www.instagram.com/max.zabarka/"
          image={instagramIcon}
          alt="instagram-icon"
        />
        <Icon
          link="mailto: maxim.zabarka@gmail.com"
          image={emailIcon}
          alt="email  -icon"
        />
      </div>
    </div>
  );
};

export default Contact;
