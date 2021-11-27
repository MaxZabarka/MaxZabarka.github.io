import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import Hamburger from "../Hamburger/Hamburger";
import Menu from "../Menu/Menu";

const Navbar = (props) => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.querySelector(".swiper-container").classList.add("blur");
    } else {
      document.querySelector(".swiper-container").classList.remove("blur");
    }
  }, [openMenu]);
  return (
    <>
      <div
        style={
          props.darken
            ? {
                background:
                  "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
              }
            : {}
        }
        className="Navbar"
      >
        {/* We have to put margin: clamp in here, because the minifier messes it up when we put in css file */}
        {/* it has to be 0px and not just 0 */}
        <div style={{ margin: "clamp(0px, 5%, 2.5rem)" }} className="nav-item">
          <h1 className="name paint-hover">zabarka</h1>
        </div>
        <div style={{ margin: "clamp(0px, 5%, 2.5rem)" }} className="nav-item">
          <Hamburger
            open={openMenu}
            click={() => {
              setOpenMenu(!openMenu);
            }}
          />
        </div>
      </div>
      <Menu
        onClose={() => {
          setOpenMenu(false);
        }}
        onNavigate={props.onNavigate}
        open={openMenu}
      />
    </>
  );
};

export default Navbar;
