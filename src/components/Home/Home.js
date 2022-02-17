import React, { useEffect, useRef, useState } from "react";
import Title from "./Title/Title";
import "./Home.scss";
import ScrollButton from "./ScrollButton/ScrollButton";
import onWheel from "../../util/onWheel";
window.animateHome = true;

const Home = (props) => {
  /* Fix bug on mobile where address bar is
   *  not included in height calculation,
   *  allowing the page to be scrolled even
   *  when the height is 100vh */

  const homeElement = useRef(null);
  const [animate, setAnimate] = useState(true);


  return (
    <div
      onWheel={onWheel}
      ref={homeElement}
      className={"Home slide-active " + (window.animateHome ? "animate" : "")}
      onAnimationEnd={(e) => {
        console.log("animate", animate);
        console.log("e.target", e.target);
        window.animateHome = false;
      }}
    >
      <Title />
      <ScrollButton click={() => {
            window.dispatchEvent(window.secondSlide);
      }} />
    </div>
  );
};

export default Home;
