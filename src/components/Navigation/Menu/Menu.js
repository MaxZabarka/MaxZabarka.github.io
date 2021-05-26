import React from 'react';
import MenuContent from '../MenuContent/MenuContent';
import "./Menu.scss"

const Menu = (props) => {
    return (
        <div className={"Menu " + (props.open ? "" : "menu-closed")}>
            <MenuContent/>
        </div>
    );
};

export default Menu;