import React from "react";
import "./Navbar.scss";
import Hamburger from "../Hamburger/Hamburger";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav-item">
        <h1 className="name paint-hover">zabarka</h1>
      </div>
      <div className="nav-item">
        <Hamburger />
      </div>
    </div>
  );
};

export default Navbar;
