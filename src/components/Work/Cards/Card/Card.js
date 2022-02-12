import React, { forwardRef } from "react";
import Tag from "../Tag/Tag";
import "./Card.scss";

const Card = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="Card">
      <div className="content-wrapper">
      {props.footer ? <div className="footer">{props.footer}</div> : null}

        <div className="content" style={props.footer ? {marginTop:"1.8rem" } : {}}>
          <img style={props.imageStyle} alt="" src={props.image} />
          <h1>{props.title}</h1>
          <ul>
            {props.tags.map((element) => {
              console.log(element);
              return <Tag key={element}>{element}</Tag>;
            })}
          </ul>
          <p>{props.description}</p>
          <div className="links">
            {props.github ? (
              <a href={props.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            ) : null}
            {props.demo ? (
              <a href={props.demo} target="_blank" rel="noreferrer">
                Demo
              </a>
            ) : null}
          </div>
        </div>
      </div>
      <div className="top-left" />
      <div className="bottom-right" />
    </div>
  );
});

export default Card;
