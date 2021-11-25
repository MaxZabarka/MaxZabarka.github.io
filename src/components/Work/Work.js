import React from "react";
import CardFilter from "./Cards/CardFilter/CardFilter";
import Cards from "./Cards/Cards";
import "./Work.scss";

const Work = () => {
  return (
    <div className="Work">
      <h1><span className="purple">Work</span></h1>
      <p>A list of projects I have built for work or on my personal time</p>
      <CardFilter
        tags={[
          "Web",
          "Systems",
          "3D",
          "React",
          "Express",
          "MongoDB",
          "C",
          "Assembly",
          "Python",
        ]}
      />
      <Cards />
    </div>
  );
};

export default Work;
