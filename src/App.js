import { useEffect, useState } from "react";
import "./components/Shared/PaintHover.scss";
import Swiper from "./components/Swiper/Swiper";

import "./App.scss";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navigation/NavBar/Navbar";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";

//TODO
//scrollbar progress bar
//--Reset scroll on slide change
//--Create navigation menu (reuse mars project)
// Show and hide navbar depending on scroll up or down
// Make navbar background black when on second slide
// Add scroll in transitions

const speed = 2500;

function App() {
  const [firstSlide, setFirstSlide] = useState(true);
  return (
    <div className="App">
      <Navbar />
      <Swiper
        onSlideChange={() => {
          for (const slide of document.querySelectorAll(".swiper-slide")) {
            slide.scrollTo(0, 0);
          }
        }}
        speed={speed}
        firstSlide={true}
        slide1={
          <Home
            next={() => {
              setFirstSlide(false);
            }}
            previous={() => {
              setFirstSlide(true);
            }}
          />
        }
        slide2={
          <>
            <About />
            <Work />
            <Contact/>
          </>
        }
      ></Swiper>
    </div>
  );
}

export default App;
