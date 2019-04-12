import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
    return(
        <nav>
            <ul className="mainNav">
                <li><NavLink to="/">People´s List</NavLink></li>
                <li><NavLink to="/">Add New Person</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;