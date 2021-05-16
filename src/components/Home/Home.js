import React from 'react';
import Title from './Title/Title';
import "./Home.scss"
import ScrollButton from './ScrollButton/ScrollButton';

const Home = () => {
    return (
        <div className="Home">
            <Title/>
            <ScrollButton/>
        </div>
    );
};

export default Home;