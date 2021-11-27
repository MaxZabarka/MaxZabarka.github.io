import React from "react";
import "./Input.scss";

const Input = (props) => {
  return (
    <>
      <div style={props.textarea ? {} : {height:"3rem"}} className="Input">
        <label for={props.name}>{props.name}</label>
        {props.textarea ? (
          <textarea rows="9" className="field" {...props} />
        ) : (
          <input className="field" {...props} />
        )}
        <div className="top-left" />
        <div className="bottom-right" />
      </div>
    </>
  );
};

export default Input;
