import React from "react";
import "./Input.scss";

const Input = (props) => {
  return (
    <>
      <div style={props.textArea ? {} : { height: "3rem" }} className="Input">
        <label htmlFor={props.name}>{props.name}</label>
        {props.textArea ? (
          <textarea
            rows="9"
            className="field"
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
          />
        ) : (
          <input
            className="field"
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
          />
        )}
        <div className="top-left" />
        <div className="bottom-right" />
      </div>
    </>
  );
};

export default Input;
