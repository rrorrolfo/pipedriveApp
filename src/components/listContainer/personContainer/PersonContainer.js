import React from "react";
import "./personContainer.css";
import {sortableElement} from 'react-sortable-hoc';
import photo from "../../../assets/no_pic.jpg";
import PropTypes from "prop-types";

const PersonContainer = sortableElement(({id, name, company, toggleModal, selectedPersonFunc}) => 
    <li style={{listStyle: "none"}} onClick={ event => {toggleModal(); selectedPersonFunc(event)} }>
        
        <div className="PersonContainer">
            <div className="personal_data">
                <div className="personMask" identifier={ id }></div>
                <p>{ name }</p>
                <p className="company">{ company }</p>
            </div>
            <img src={ photo } alt="lady" className="profile_pic"/>
        </div>

    </li>
);

PersonContainer.propTypes = {
    name: PropTypes.string,
    company: PropTypes.string,
    toggleModal: PropTypes.func,
    selectedPersonFunc: PropTypes.func
}

export default PersonContainer;