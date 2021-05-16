import React, { useEffect } from "react";
import Title from "./Title/Title";
import "./Home.scss";
import ScrollButton from "./ScrollButton/ScrollButton";



window.addEventListener("resize", resetHeight);

resetHeight();

const Home = () => {

  useEffect(() => {
    window.addEventListener("resize", handleScroll);
  });

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function resetHeight() {
    // reset the body height to that of the inner browser
    document.body.style.height = window.innerHeight + "px";
  }

  return (
    <div className="Home">
      <Title />
      <ScrollButton />
    </div>
  );
};

export default Home;
