import React from "react";
import "./personContainer.css";
import photo from "../../../assets/lady.jpg";

const PersonContainer = () => {
    return(
        <div className="PersonContainer">
            <div className="personal_data">
                <p>Diana Tamm</p>
                <p>Acme Inc.</p>
            </div>
            <img src={ photo } alt="lady" className="profile_pic"/>
        </div>
    )
}

export default PersonContainer;