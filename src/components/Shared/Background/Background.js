import React from 'react';
import "./Background.scss"

const Background = (props) => {
    
    return (
        <div style={style} className={props.className + " Background"}/>
    );
};

export default Background;