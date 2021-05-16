import React, { useEffect } from "react";
import Title from "./Title/Title";
import "./Home.scss";
import ScrollButton from "./ScrollButton/ScrollButton";




resetHeight();

const Home = () => {
    function resetHeight() {
        // reset the body height to that of the inner browser
        // document.body.style.height = window.innerHeight + "px";
      }
  useEffect(() => {
    window.addEventListener("resize", resetHeight);
  });

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", resetHeight);
    };
  }, []);



  return (
    <div className="Home">
      <Title />
      <ScrollButton />
    </div>
  );
};

export default Home;
