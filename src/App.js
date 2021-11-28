import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, Parallax } from "swiper/core";
import "swiper/components/effect-cube/effect-cube.min.css";
import "swiper/swiper.min.css";

import "./App.scss";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navigation/NavBar/Navbar";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";

import "./components/Shared/PaintHover.scss";
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

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
  const [swiper, setSwiper] = useState(null);
  const [darkenNavbar, setDarkenNavbar] = useState(false);
  useEffect(() => {
    if (swiper) {
      const swiperContainer = document.querySelector(".swiper-container");
      // swiperContainer.classList.add("swiper-container-animate");

      swiper.on("slideChangeTransitionStart", () => {
        swiperContainer.classList.add("swiper-container-animate");
        setTimeout(() => {
          swiperContainer.classList.remove("swiper-container-animate");
          if (swiper.realIndex === 1) {
            setDarkenNavbar(true);
          }
        }, speed);
      });
    }
  }, [swiper]);

  return (
    <div className="App">
      <Navbar
        onNavigate={(section) => {
          if (!swiper) return;
          if (section === "Home") {
            swiper.slidePrev(speed);
          } else {
            swiper.slideNext();
            document
              .querySelector("." + section)
              .scrollIntoView({ behavior: "smooth" });
          }
        }}
        darken={darkenNavbar}
      />
      <Swiper
        onSlideChange={(swiper) => {
          if (swiper.realIndex === 0) {
            setDarkenNavbar(false);
          }
          console.log("swiper.realIndex :>> ", swiper.realIndex);
          for (const slide of document.querySelectorAll(".swiper-slide")) {
            slide.scrollTo(0, 0);
          }
        }}
        speed={speed}
        allowTouchMove={false}
        parallax={!isSafari}
        onSwiper={setSwiper}
        direction="vertical"
        cubeEffect={{
          shadow: false,
          slideShadows: false,
        }}
        effect={isSafari ? null : "cube"}
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
          <Contact />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
