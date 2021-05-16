import React, { useEffect, useRef } from "react";
import Title from "./Title/Title";
import "./Home.scss";
import ScrollButton from "./ScrollButton/ScrollButton";

const Home = () => {

    // Fix unintended feature on mobile where the address bar is not accounted 
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
