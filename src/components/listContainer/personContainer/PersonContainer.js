import React from "react";
import "./personContainer.css";
import {sortableElement} from 'react-sortable-hoc';
import photo from "../../../assets/no_pic.jpg";
import PropTypes from "prop-types";

const PersonContainer = sortableElement(({name, company, toggleModal}) => 
    <li style={{listStyle: "none"}} onClick={ () => toggleModal() }>
        <div className="PersonContainer">
            <div className="personal_data">
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
    toggleModal: PropTypes.func
}

export default PersonContainer;