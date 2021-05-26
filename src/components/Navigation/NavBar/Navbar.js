import React, { useEffect, useState } from 'react';
import "./Navbar.scss";
import Hamburger from "../Hamburger/Hamburger";
import Menu from '../Menu/Menu';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    document.querySelector(".swiper-container").classList.toggle("blur")
  }, [openMenu])
  return (
    <>
    <div className="Navbar">
      <div className="nav-item">
        <h1 className="name paint-hover">zabarka</h1>
      </div>
      <div className="nav-item">
        <Hamburger open={openMenu} click={() => {
          setOpenMenu(!openMenu)
        }}/>
      </div>
    </div>
    <Menu open={openMenu}/>
    </>
  );
};

export default Navbar;
