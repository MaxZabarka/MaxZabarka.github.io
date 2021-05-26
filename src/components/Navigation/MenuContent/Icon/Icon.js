import React from "react";
import "./Icon.scss";

const Icon = (props) => {
  return (
    <a target="_blank" href={props.link} rel="noopener noreferrer">
      <div className="Icon">
        <img className="overlay" src={props.image} alt={props.alt}></img>
        <img className="hover" src={props.image} alt={props.alt}></img>
      </div>
    </a>
  );
};

export default Icon;
