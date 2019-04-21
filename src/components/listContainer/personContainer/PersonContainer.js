import React from "react";
import "./personContainer.css";
import {sortableElement} from 'react-sortable-hoc';
import photo from "../../../assets/no_pic.jpg";
import PropTypes from "prop-types";
import DeletePersonButton from "./deletePersonButton/DeletePersonButton";

const PersonContainer = sortableElement(({id, name, company, toggleModal, modalstatus, personInModal, fetchPeople, updateSortablePeople, currentPage }) => 

    <li style={{listStyle: "none"}}>
        
        <div className="PersonContainer">
            <div className="personal_data">
                <div className="personMask" identifier={ id } onClick={ event => {toggleModal(modalstatus); personInModal(event.target.getAttribute("identifier"))} }></div>
                <p>{ name }</p>
                <p className="company">{ company }</p>
            </div>
            <img src={ photo } alt="lady" className="profile_pic"/>
            <DeletePersonButton 
                identifier={ id } 
                fetchPeople={ fetchPeople } 
                updateSortablePeople={ updateSortablePeople }
                currentPage={ currentPage }
            />
        </div>

    </li>
    
);

PersonContainer.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    company: PropTypes.string,
    toggleModal: PropTypes.func,
    modalstatus: PropTypes.bool,
    personInModal: PropTypes.func.isRequired,
    fetchPeople: PropTypes.func.isRequired,
    updateSortablePeople: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}

export default PersonContainer;