import React, {useRef} from "react";
import "./Card.scss";

const Card = (props) => {
  const cardElement = useRef(null);

  console.log("props.technologies :>> ", props.technologies);
  return (
    <div ref={cardElement}
    onMouseEnter={() => {
      cardElement.current.classList.add("hover")
    }}
    onMouseLeave={() => {
      cardElement.current.classList.remove("hover")
    }}
      className="Card"
      style={{
        backgroundImage: `linear-gradient(
            rgba(0, 0, 0, ${props.darkness}), 
            rgba(0, 0, 0, ${props.darkness})
          ), url(${props.image})`,
      }}
    >
      <div className="top-left">
        {props.technologies.map((item, index) => {
          console.log(
            "index, props.technologies.length :>> ",
            index,
            props.technologies.length
          );
          if (index === props.technologies.length - 1) {
            return <h2>{item}</h2>;
          } else {
            return (
              <>
                <h2>{item}</h2>
                <div />
              </>
            );
          }
        })}
      </div>
      <div className="content">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div className="buttons">
        {props.children}
      </div>
    </div>
  );
};

export default Card;
