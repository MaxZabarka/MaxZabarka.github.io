import React from 'react';
import Title from './Title/Title';
import "./Home.scss"
import ScrollButton from './ScrollButton/ScrollButton';

function resetHeight(){
    // reset the body height to that of the inner browser
    document.body.style.height = window.innerHeight + "px";
}
// reset the height whenever the window's resized
window.addEventListener("resize", resetHeight);
// called to initially set the height.
resetHeight();

const Home = () => {
    return (
        <div className="Home">
            <Title/>
            <ScrollButton/>
        </div>
    );
};

export default Home;