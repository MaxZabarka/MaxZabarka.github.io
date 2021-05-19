import React, { useEffect, useRef } from "react";
import Title from "./Title/Title";
import "./Home.scss";
import ScrollButton from "./ScrollButton/ScrollButton";

const Home = (props) => {
  /* Fix bug on mobile where address bar is
   *  not included in height calculation,
   *  allowing the page to be scrolled even
   *  when the height is 100vh */

  const homeElement = useRef(null);

  useEffect(() => {
    document.querySelector(".swiper-container").onwheel = (event) => {
      console.log("event.deltaY :>> ", event.deltaY);
      const atTop = isTop();
      const atBottom = isBottom();
      console.log("props.swiper.progress :>> ", props.swiper.animating);

      console.log("atTop, atBottom :>> ", atTop, atBottom);
      if (!props.swiper.animating) {
        if (atTop && props.swiper.realIndex !== 0 && event.deltaY < 0) {
          console.log('"previous" :>> ', "previous");
          props.previous();
        }
        if (
          atBottom &&
          event.deltaY > 0 &&
          props.swiper.realIndex !== props.swiper.slides.length - 1
        ) {
          console.log('"next" :>> ', "next");
          props.next();
        }
      }
    };

    // window.addEventListener(
    //   "resize",
    //   resetHeight.bind(null, document.querySelector(".swiper-container"))
    // );
    document.body.addEventListener("touchstart", startTouch, false);
    document.body.addEventListener("touchmove", moveTouch, false);

    // resetHeight(document.querySelector(".swiper-container"));
  });

  useEffect(() => {
    // if (document.querySelector(".About")) {
    //   document
    //     .querySelector(".About")
    //     .addEventListener("mousewheel", function (e) {
    //       e.stopPropagation();
    //     });
    // }
    // return () => {
    //   window.removeEventListener("resize", resetHeight);
    // };
  }, []);

  function isBottom() {
    const activeSlide = document.querySelector(".swiper-slide-active");
    return (
      activeSlide.scrollTop + activeSlide.offsetHeight ===
      activeSlide.scrollHeight
    );
  }

  function isTop() {
    const activeSlide = document.querySelector(".swiper-slide-active");
    return activeSlide.scrollTop === 0;
  }

  // Code for detecting mobile swipe up
  let initialY = null;

  function resetHeight(sliderContainerElement) {
    sliderContainerElement.style.height = window.innerHeight + "px";
  }

  function startTouch(e) {
    initialY = e.touches[0].clientY;
  }
  const moveTouch = (e) => {

    if (initialY === null) {
      return;
    }

    var currentY = e.touches[0].clientY;

    var diffY = initialY - currentY;

    // sliding vertically
    if (diffY > 0) {
      // swiped up
      if (isBottom()) {
        props.next();
      }
    } else {
      // swiped down
      if (isTop()) {
        props.previous();
      }
    }

    initialY = null;

    e.preventDefault();
  }

  return (
    <div ref={homeElement} className="Home">
      <Title />
      <ScrollButton click={props.next} />
    </div>
  );
};

export default Home;
