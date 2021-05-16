import React, { useEffect, useRef } from "react";
import Title from "./Title/Title";
import "./Home.scss";
import ScrollButton from "./ScrollButton/ScrollButton";

const Home = () => {
  const homeElement = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", resetHeight);
  });

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", resetHeight);
    };
  }, []);

  function resetHeight() {
    homeElement.current.style.height = window.innerHeight+"px";
  }
resetHeight()
  return (
    <div ref={homeElement} className="Home">
      <Title />
      <ScrollButton />
    </div>
  );
};

export default Home;
