import React from "react";
import "./Tag.scss";

const TAG_COLORS = {
  Web: "D60096",
  Systems: "858585",
  "3D": "FF4747",
  React: "200094",
  Express: "FC5CFF",
  MongoDB: "1EBE46",
  C: "5286FF",
  Assembly: "B000E0",
  Python: "10C19E",
};

const lightenColor = function (color, percent) {
  var num = parseInt(color, 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = ((num >> 8) & 0x00ff) + amt,
    G = (num & 0x0000ff) + amt;

  return (
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
    (G < 255 ? (G < 1 ? 0 : G) : 255)
  )
    .toString(16)
    .slice(1);
};

const Tag = (props) => {
  console.log(
    "lightenColor(TAG_COLORS[props.children], 50) :>> ",
    lightenColor(TAG_COLORS[props.children], 50)
  );
  const background = `linear-gradient(45deg, #${
    TAG_COLORS[props.children]
  }, #${lightenColor(TAG_COLORS[props.children], -30)})`;
  console.log(background);
  if (props.onClick) {
    return (
      <button style={{ background }} className="Tag-button">
        {props.children}
      </button>
    );
  } else {
    return (
      <li style={{ background }} className="Tag-li">
        {props.children}
      </li>
    );
  }
};

export default Tag;
