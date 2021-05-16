import React, { useEffect } from "react";
import Title from "./Title/Title";
import "./Home.scss";
import ScrollButton from "./ScrollButton/ScrollButton";





const Home = () => {

  useEffect(() => {
    window.addEventListener("resize", resetHeight);
  });

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", resetHeight);
    };
  }, []);

  function resetHeight() {
      console.log('window.innerHeight :>> ', window.innerHeight);
    // reset the body height to that of the inner browser
    // document.body.style.height = window.innerHeight + "px";
  }

  return (
    <div className="Home">
      <Title />
      <ScrollButton />
    </div>
  );
};

export default Home;
