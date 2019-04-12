import React from "react";
import logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
    return(
        <header className="Header">
            <img src={ logo } alt="Pipedrive" title="Pipedrive" className="logo"/>
        </header>
    )
}

export default Header;