import React from "react";
import "./personContainer.css";
import {sortableElement} from 'react-sortable-hoc';
import photo from "../../../assets/no_pic.jpg";

const PersonContainer = sortableElement(({name, company}) => 
    <li style={{listStyle: "none"}}>
        <div className="PersonContainer">
            <div className="personal_data">
                <p>{ name }</p>
                <p className="company">{ company }</p>
            </div>
            <img src={ photo } alt="lady" className="profile_pic"/>
        </div>
    </li>
    );

export default PersonContainer;