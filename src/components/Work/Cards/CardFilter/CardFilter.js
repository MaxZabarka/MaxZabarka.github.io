import React from "react";
import "./CardFilter.scss";
import Tag from "../Tag/Tag";

// const TAG_COLORS = {};
// TAGS.forEach((tag, index) => {
//   TAG_COLORS[tag] = `hsl(${(360 / TAGS.length) * index}deg, 50%, 50%)`;
// });
const CardFilter = (props) => {
  return (
    <div className="CardFilter">
      {props.tags.map((tag, index) => {
        return (
          <Tag
            onClick={() => {
              console.log("index :>> ", index);
            }}
          >
            {tag}
          </Tag>
        );
      })}
    </div>
  );
};

export default CardFilter;
