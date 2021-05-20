import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { EffectCube, Parallax, Mousewheel } from "swiper/core";

import "./App.scss";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navigation/NavBar/Navbar";

// install Swiper modules
SwiperCore.use([EffectCube, Parallax]);

const speed = 2500;

function App() {
  // store swiper instance
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) {
      const swiperContainer = document.querySelector(".swiper-container");
      swiper.on("slideChangeTransitionStart", () => {
          swiperContainer.classList.add("swiper-container-animate")
        setTimeout(() => {
          swiperContainer.classList.remove("swiper-container-animate")

        }, speed);
      });
    }
  }, [swiper]);
  return (
    <div className="App">
      <Navbar/>
      <Swiper
        mousewheel={{forceToAxis:false, releaseOnEdges:true}}
        speed={speed}
        allowTouchMove={false}
        parallax={true}
        mousewheel={true}
        onSwiper={setSwiper}
        direction={"vertical"}
        cubeEffect={{
          shadow: false,
          slideShadows: false,
        }}
        effect="cube"
      >
        <SwiperSlide>
          <Home
            next={() => {
              if (swiper) {
                swiper.slideNext(2500);
              }
            }}
            previous={() => {
              if (swiper) {
                swiper.slidePrev(2500);
              }
            }}
            swiper={swiper}
          />
          {/* <h1>Test</h1> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <h1>Test 2</h1> */}

          <About />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
