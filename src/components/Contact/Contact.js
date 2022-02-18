import React from "react";
import Icon from "../Navigation/MenuContent/Icon/Icon";
import "./Contact.scss";
import Form from "./Form/Form";
import gitHubIcon from "../../assets/Icons/github.svg";
// import instagramIcon from "../../assets/Icons/instagram.svg";
import emailIcon from "../../assets/Icons/email.svg";
import linkIcon from "../../assets/Icons/linkedin.svg";

const Contact = () => {
  let year = new Date().getFullYear().toString();
  year = year === "2021" ? "2021" : "2021-" + year;
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
        {/* <Icon
          link="https://www.instagram.com/max.zabarka/"
          image={instagramIcon}
          alt="instagram-icon"
        /> */}
        <Icon
          link="https://www.linkedin.com/in/max-zabarka-0a739a1b6/"
          image={linkIcon}
          alt="linkedin-icon"
        />
        <Icon
          link="mailto: maxim.zabarka@gmail.com"
          image={emailIcon}
          alt="email-icon"
        />
      </div>
      <p>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/inkubators">inkubators</a>{" "}
        from
        <a href="https://www.flaticon.com/"> flaticon</a>
      </p>
      <p>© {year} Max Zabarka. All Rights Reserved.</p>
    </div>
  );
};

export default Contact;
