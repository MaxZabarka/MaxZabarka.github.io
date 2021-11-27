import React, { forwardRef } from "react";
import Tag from "../Tag/Tag";
import "./Card.scss";

const Card = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="Card">
      <img alt="" src={props.image} />
      <h1>{props.title}</h1>
      <ul>
        {props.tags.map((element) => {
          console.log(element);
          return <Tag key={element}>{element}</Tag>;
        })}
      </ul>
      <p>{props.description}</p>
    </div>
  );
});

export default Card;
