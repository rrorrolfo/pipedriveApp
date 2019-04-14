import React from "react";
import "./personContainer.css";
import photo from "../../../assets/no_pic.jpg";

const PersonContainer = ({ name, company }) => {
    return(

        <div className="PersonContainer">
            <div className="personal_data">
                <p>{ name }</p>
                <p>{ company }</p>
            </div>
            <img src={ photo } alt="lady" className="profile_pic"/>
        </div>

    )
}

export default PersonContainer;