import React, { useState } from "react";
import "./CardFilter.scss";
import Tag from "../Tag/Tag";
import { useEffect } from "react/cjs/react.development";

const CardFilter = (props) => {
  const [selectedTags, setSelectedTags] = useState(new Set(props.tags));
  const all = selectedTags.size === props.tags.length;

  useEffect(() => {
    props.onSelectedTagsChange(selectedTags);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTags]);

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
