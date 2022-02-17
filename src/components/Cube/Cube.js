import React, { useEffect, useRef, useState } from "react";
import onWheel from "../../util/onWheel";
import "./Cube.scss";
window.slide = 0;
const Cube = (props) => {
  const [slide, setSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const wrapperRef = useRef(null);


  window.addEventListener(
    "secondslide",
    () => {
      if (
        window.slide === 1 ||
        slide === 1 ||
        document.querySelector(".Cube.zoom")
      ) {
        return;
      }
      window.slide = 1;
      props.onSecondSlide();
      props.startTransition()
      setTransitioning(true);
      setSlide(1);
    },
    false
  );
  window.addEventListener(
    "firstslide",
    () => {
      if (
        window.slide === 0 ||
        slide === 0 ||
        document.querySelector(".Cube.zoom")
      ) {
        return;
      }
      window.slide = 0;
      props.onFirstSlide();
      props.startTransition()
      setTransitioning(true);
      setSlide(0);
    },
    false
  );

  if (!transitioning) {
    if (slide === 0) {
      return (
        <div className="Cube">
          <div ref={wrapperRef} className={"wrapper show-0"}>
            <div className="slide-1">{props.componentOne}</div>
            <div className="slide-2">
              <div
                style={{ color: "white", height: "100%", overflowY: "hidden" }}
              >
                {props.componentTwo}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          onWheel={onWheel}
          className="slide-active"
          style={{ color: "white", height: "100%", overflowY: "scroll" }}
        >
          {props.componentTwo}
        </div>
      );
    }
  }

  const prevSlide = slide ? 0 : 1;
  setTimeout(() => {
    wrapperRef.current.classList.remove("show-" + prevSlide);
    wrapperRef.current.classList.add("show-" + slide);
  }, 0);

  return (
    <div className="Cube zoom">
      <div
        ref={wrapperRef}
        className={"wrapper show-" + prevSlide}
        onTransitionEnd={(e) => {
          if (e.target === wrapperRef.current) {
            console.log("event", e);
            console.log("e.target", e.target);
            props.endTransition()
            setTransitioning(false);
          }
        }}
      >
        <div className="slide-1">{props.componentOne}</div>
        <div className="slide-2">
          <div
            style={{
              color: "white",
              height: "100%",
              overflowY: "hidden",
              paddingRight: "10px",
            }}
          >
            {props.componentTwo}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cube;
