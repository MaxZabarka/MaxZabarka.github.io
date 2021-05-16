import React from 'react';
import arrow from "../../../assets/down-chevron.svg"
import "./ScrollButton.scss";
const ScrollButton = () => {
    return (
        <div className="ScrollButton">
            <button><img src={arrow} alt="scroll"/> S</button>
        </div>
    );
};

export default ScrollButton;