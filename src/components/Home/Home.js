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
    document.querySelector(".Home").onwheel = (event) => {
      console.log("TEST");
      if (event.deltaY > 0) {
        props.next();
      }
    };
    document.querySelector(".About").onwheel = (event) => {
      if (event.deltaY > 0) {
        props.next();
      }
    };
    // };

    // window.addEventListener(
    //   "resize",
    //   resetHeight.bind(null, document.querySelector(".swiper-container"))
    // );
    // document.body.addEventListener("touchstart", startTouch, false);
    // document.body.addEventListener("touchmove", moveTouch, false);

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
    const activeSlide = document.getElementById("side-active");
    return (
      activeSlide.scrollTop + activeSlide.offsetHeight ===
      activeSlide.scrollHeight
    );
  }

  function isTop() {
    const activeSlide = document.getElementById("side-active");
    return activeSlide.scrollTop === 0;
  }

  // function resetHeight(sliderContainerElement) {
  //   sliderContainerElement.style.height = window.innerHeight + "px";
  // }

  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);

  var xDown = null;
  var yDown = null;

  function getTouches(evt) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* right swipe */
      } else {
        /* left swipe */
      }
    } else {
      if (yDiff > 0) {
        props.next();
        /* down swipe */
      } else {
        props.next();

        /* up swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }

  return (
    <div ref={homeElement} className="Home">
      <Title />
      <ScrollButton click={props.next} />
    </div>
  );
};

export default Home;
