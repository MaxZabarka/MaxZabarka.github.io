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
import Cube from "./components/Cube/Cube";
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
window.secondSlide = document.createEvent("Event");
window.secondSlide.initEvent("secondslide", true, true);

window.firstSlide = document.createEvent("Event");
window.firstSlide.initEvent("firstslide", true, true);

const speed = 2500;
function App() {
  const [darkenNavbar, setDarkenNavbar] = useState(false);
  const [showFlip, setShowFlip] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true)
  window.addEventListener(
    "secondslide",
    () => {
      setDarkenNavbar(true);
    },
    false
  );
  window.addEventListener(
    "firstslide",
    () => {
      setDarkenNavbar(false);
    },
    false
  );
  return (
    <div className="App">
      <Navbar
      show={showNavbar}
        onNavigate={(section) => {
          if (section === "Home") {
            if (window.slide === 1) {
              document
                .querySelector(".About")
                .scrollIntoView({behavior:"smooth"});
                setTimeout(() => {
                  window.dispatchEvent(window.firstSlide);
                }, 800)
            } else {
              window.dispatchEvent(window.firstSlide);
            }
            // swiper.slidePrev(speed);
          } else {
            if (window.slide === 1) {
              document
                .querySelector("." + section)
                .scrollIntoView({ behavior: "smooth" });
              return;
            }
            window.dispatchEvent(window.secondSlide);
            setTimeout(() => {
              document
              .querySelector("." + section)
              .scrollIntoView({ behavior: "smooth" });
            }, 2600)
            // swiper.slideNext();
            // document
            //   .querySelector("." + section)
            //   .scrollIntoView();
          }
        }}
        darken={darkenNavbar}
      />
      {/* <Cube
        componentOne={
          <Home
            next={() => {
              // if (swiper) {
              //   swiper.slideNext(speed);
              // }
            }}
            previous={() => {
              // if (swiper) {
              //   swiper.slidePrev(speed);
              // }
            }}
            // swiper={swiper}
          />
        }
        componentTwo={
          <div style={{height:"100%", overflow:"auto"}}>
            <About />
            <Work />
            <Contact />
          </div>
        }
      /> */}
      <Cube
        onFirstSlide={() => {
          setShowFlip(false);
        }}
        onSecondSlide={() => {
          setShowFlip(true);
        }}
        startTransition={() => {
          setShowNavbar(false)
        }}
        endTransition={() => {
          setShowNavbar(true)
        }}
        componentOne={<Home />}
        componentTwo={
          <>
            <About />
            <Work showFlip={showFlip} />
            <Contact />
          </>
        }
      />
    </div>
  );
}

export default App;
