import React, { useRef } from "react";
import Tag from "../Tag/Tag";
import "./Card.scss";

const Card = (props) => {
  return (
    <div className="Card">
      <img alt="" src={props.image} />
      <h1>{props.title}</h1>
      <ul>
        {props.tags.map((element) => {
          console.log(element);
          return <Tag>{element}</Tag>;
        })}
      </ul>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
