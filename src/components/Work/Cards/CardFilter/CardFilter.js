import React, { useEffect, useState } from "react";
import "./CardFilter.scss";
import Tag from "../Tag/Tag";

const CardFilter = (props) => {
  const [selectedTags, setSelectedTags] = useState(new Set(props.tags));
  const all = selectedTags.size === props.tags.length;

  useEffect(() => {
    console.log("selectedTags :>> ", selectedTags);
    props.onSelectedTagsChange(selectedTags);
  }, [selectedTags, props]);

  return (
    <div className="CardFilter">
      <Tag
        active={all}
        onClick={() => {
          setSelectedTags(new Set(props.tags));
        }}
      >
        All
      </Tag>
      {props.tags.map((tag, index) => {
        return (
          <Tag
            active={selectedTags.has(tag) && !all}
            key={index}
            onClick={() => {
              if (all) {
                selectedTags.clear();
              }
              if (selectedTags.has(tag)) {
                selectedTags.delete(tag);
              } else {
                selectedTags.add(tag);
              }
              if (selectedTags.size === 0) {
                setSelectedTags(new Set(props.tags));
              } else {
                setSelectedTags(new Set(selectedTags));
              }
            }}
          >
            {tag}
          </Tag>
        );
      })}
    </div>
  );
};

export default CardFilter;
