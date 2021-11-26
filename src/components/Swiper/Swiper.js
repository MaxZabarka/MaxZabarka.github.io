import React, { useEffect, useState, useRef } from "react";
import "./Swiper.scss";

const Swiper = (props) => {
  const wrapperRef = useRef(null);
  const firstUpdate = useRef(true);
  const transitioning = useRef(false);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      document.querySelector(".Cube").classList.remove("finish-transition");
    }
    if (props.firstSlide) {
      document.querySelector(".cube").classList.add("show-1");
      document.querySelector(".cube").classList.remove("show-2");
    } else {
      document.querySelector(".cube").classList.remove("show-1");
      document.querySelector(".cube").classList.add("show-2");
    }
  }, [props.firstSlide]);

  return (
    <div className="Cube">
      <div
        ref={wrapperRef}
        className={"cube show-1"}
        onTransitionEnd={(e) => {
          if (e.target === wrapperRef.current) {
            if (!props.firstSlide) {
              document
                .querySelector(".Cube")
                .classList.add("finish-transition");
            }
            // transitioning.current = false;
            // console.log("transitioning.current :>> ", transitioning.current);
          }
        }}
      >
        <div className="side-1">{props.slide1}</div>
        <div className="side-2">
          <div>{props.slide2}</div>
        </div>
      </div>
    </div>
  );

  // } else {
  //   console.log("IN HERE 2");
  //   return (
  //     // <h1 style={{color:"white"}}>HELLO</h1>
  //     <div style={{ transition: "none" }} className="Cube">
  //       <div style={{ transition: "none" }}>
  //         <div
  //           style={{ transition: "none" }}
  //           id="side-active"
  //           className="side-1"
  //         >
  //           {props.slide2}
  //         </div>
  //         {/* <div

  //       //   className={props.firstSlide ? "show-1" : "show-2"}
  //       >
  //         <div className="side-1">{props.slide2}</div>
  //       </div> */}
  //       </div>
  //     </div>
  //   );
  // }
};

export default Swiper;
