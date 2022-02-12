import React, { useState } from "react";
import CardFilter from "./Cards/CardFilter/CardFilter";
import Cards from "./Cards/Cards";
import "./Work.scss";

const Work = () => {
  const [selectedTags, setSelectedTags] = useState(new Set())
  return (
    <div className="Work">
      <h1>
        <span className="purple">Work</span>
      </h1>
      <p>A selection of my most impressive projects that I have built for work or on my personal time</p>
      <CardFilter
        onSelectedTagsChange={(newTags) => {
          setSelectedTags(newTags)
        }}
        tags={[
          "Web",
          "Systems",
          "3D",
          "React",
          "Express",
          "MongoDB",
          "C",
          // "Assembly",
          "Python",
        ]}
      />
      <Cards selectedTags={selectedTags} />
    </div>
  );
};

export default Work;
