import { useEffect, useState } from "react";
import "./components/Shared/PaintHover.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css";
// import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { EffectCube, Parallax } from "swiper/core";

import "./App.scss";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navigation/NavBar/Navbar";
import Work from "./components/Work/Work";

// install Swiper modules
SwiperCore.use([EffectCube, Parallax]);

//TODO
//scrollbar progress bar
//--Reset scroll on slide change
//--Create navigation menu (reuse mars project)
// Show and hide navbar depending on scroll up or down
// Make navbar background black when on second slide
// Add scroll in transitions


const speed = 2500;

function App() {
  // store swiper instance
  const [swiper, setSwiper] = useState(null);
  setInterval(() => {
    // document.querySelector(".swiper-container").style.transform += " translateZ(1px)"
    // document.querySelector(".swiper-wrapper").style.transform += " translateZ(1px)"
    // document.querySelector(".swiper-slide").style.transform += " translateZ(1px)"
    // console.log(document.querySelector(".swiper-container").classList.remove("swiper-container-cube"))
    // console.log(document.querySelector(".swiper-container").classList.remove("swiper-container-3d"))
  }, 1000);
  useEffect(() => {
    if (swiper) {
      const swiperContainer = document.querySelector(".swiper-container");
      swiper.on("slideChangeTransitionStart", () => {
        swiperContainer.classList.add("swiper-container-animate");
        setTimeout(() => {
          swiperContainer.classList.remove("swiper-container-animate");
        }, speed);
      });
    }
  }, [swiper]);
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
        allowTouchMove={false}
        parallax={true}
        onSwiper={setSwiper}
        direction={"vertical"}
        cubeEffect={{
          shadow: false,
          slideShadows: false,
        }}
        // effect="cube"
      >
        <SwiperSlide>
          <Home
            next={() => {
              if (swiper) {
                swiper.slideNext(speed);
              }
            }}
            previous={() => {
              if (swiper) {
                swiper.slidePrev(speed);
              }
            }}
            swiper={swiper}
          />
        </SwiperSlide>
        <SwiperSlide>
          <About />
          <Work />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
