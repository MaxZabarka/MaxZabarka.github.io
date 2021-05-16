import React from 'react';
import Title from './Title/Title';
import "./Home.scss"
import ScrollButton from './ScrollButton/ScrollButton';

function resetHeight(){
    // reset the body height to that of the inner browser
    document.body.style.height = window.innerHeight + "px";
}

window.addEventListener("resize", resetHeight);

resetHeight();

const Home = () => {
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
      });
      useEffect(() => {
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      function handleScroll() {
        let scrollTop = window.scrollY;
      }
    return (
        <div className="Home">
            <Title/>
            <ScrollButton/>
        </div>
    );
};

export default Home;