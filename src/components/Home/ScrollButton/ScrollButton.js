import React from "react";
import arrow from "../../../assets/down-chevron.svg";
import "./ScrollButton.scss";
const ScrollButton = (props) => {
  return (
    <div data-swiper-parallax="-700" className="ScrollButton">
      <button onClick={props.click}>
        <img src={arrow} alt="scroll" />
      </button>
    </div>
  );
};

export default ScrollButton;
