const onWheel = (event) => {
  console.log("event.deltaY :>> ", event.deltaY);
  const atTop = isTop();
  const atBottom = isBottom();

  console.log("atTop, atBottom :>> ", atTop, atBottom);
  if (atTop && event.deltaY < 0) {
    console.log("SLIDE CHANGE 0");
    window.dispatchEvent(window.firstSlide);
  }
  if (atBottom && event.deltaY > 0) {
    console.log("SLIDE CHANGE 1");
    window.dispatchEvent(window.secondSlide);

  }
};
function isBottom() {
  const activeSlide = document.querySelector(".slide-active");
  return (
    activeSlide.scrollTop + activeSlide.offsetHeight ===
    activeSlide.scrollHeight
  );
}

function isTop() {
  const activeSlide = document.querySelector(".slide-active");
  return activeSlide.scrollTop === 0;
}

// Code for detecting mobile swipe up
let initialY = null;

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
        window.dispatchEvent(window.secondSlide);
    }
    } else {
      // swiped down
      if (isTop()) {
        window.dispatchEvent(window.firstSlide);
    }
    }
  

  initialY = null;

  e.preventDefault();
};

document.body.addEventListener("touchstart", startTouch, false);
document.body.addEventListener("touchmove", moveTouch, false);

export default onWheel