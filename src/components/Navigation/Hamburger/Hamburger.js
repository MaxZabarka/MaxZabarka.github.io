import React, { useRef } from 'react';
import "./Hamburger.css";

const Hamburger = () => {

const hamburgerRef = useRef(null)
console.log('this :>> ', this);
  return (
    <div ref={hamburgerRef} onClick={() => {
        hamburgerRef.current.classList.toggle("open")
    }} id="nav-icon4">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
