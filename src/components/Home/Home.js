import React, { useEffect, useRef } from "react";
import Title from "./Title/Title";
import "./Home.scss";
import ScrollButton from "./ScrollButton/ScrollButton";

const Home = () => {

   /* Fix bug on mobile where address bar is
    *  not included in height calculation,
    *  allowing the page to be scrolled even
    *  when the height is 100vh */
  const homeElement = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", resetHeight);
    resetHeight()

  });

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", resetHeight);
    };
  }, []);

  function resetHeight() {
    homeElement.current.style.height = window.innerHeight+"px";
  }
  return (
    <div ref={homeElement} className="Home">
      <Title />
      <ScrollButton />
    </div>
  );
};

export default Home;
