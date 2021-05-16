import React from 'react';
import arrow from "../../../assets/down-chevron.svg"
import "./ScrollButton"
const ScrollButton = () => {
    return (
        <div className="ScrollButton">
            <button><img src={arrow} alt="scroll"/>tEST</button>
        </div>
    );
};

export default ScrollButton;