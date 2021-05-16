import React from 'react';
import "./Background.scss"

const Background = (props) => {
    const style = {
        backgroundImage: props.image
    }
    return (
        <div styles={{ backgroundImage:`url(${car})` }} className={props.className + " Background"}/>
    );
};

export default Background;