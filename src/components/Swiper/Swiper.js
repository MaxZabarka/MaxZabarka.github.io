import React, { useEffect, useState, useRef } from "react";
import "./Swiper.scss";

const Swiper = (props) => {
  const wrapperRef = useRef(null);
  const [transitioning, setTransitioning] = useState(false);
  const [initialRender, setInitialRender] = useState(true);
  console.log("transitioning :>> ", transitioning);
  useEffect(() => {
    console.log("transition start");
    setTransitioning(true);
  }, [props.firstSlide]);

  console.log("props.firstSlide :>> ", props.firstSlide);
  if (transitioning) {
    return (
      <div className="Cube">
        <div
          ref={wrapperRef}
          onTransitionEndCapture={(e) => {
            console.log(e);
            if (e.target === wrapperRef.current) {
              console.log("transition stop");
              setTransitioning(false);
            }
          }}
          className={props.firstSlide ? "show-1" : "show-2"}
        ></div>
      </div>
    );
  }
  if (!(!transitioning && !props.firstSlide)) {
    console.log("IN HERE");
    return (
      <div className="Cube">
        <div
          ref={wrapperRef}
          onTransitionEndCapture={(e) => {
            console.log(e);
            if (e.target === wrapperRef.current) {
              console.log("transition stop");
              setTransitioning(false);
            }
          }}
          className={props.firstSlide ? "show-1" : "show-2"}
        >
          <div id="side-active" className="side-1 side-1-animate">
            {props.slide1}
          </div>
          <div className="side-2 side-2-animate">
            <div>{props.slide2}</div>
          </div>
        </div>
      </div>
    );
  } else {
    console.log("IN HERE 2");
    return (
      // <h1 style={{color:"white"}}>HELLO</h1>
      <div className="Cube">
        <div style={{ transition: "none" }}>
          <div id="side-active" className="side-1">
            {props.slide2}
          </div>
          {/* <div

        //   className={props.firstSlide ? "show-1" : "show-2"}
        >
          <div className="side-1">{props.slide2}</div>
        </div> */}
        </div>
      </div>
    );
  }
};

export default Swiper;
