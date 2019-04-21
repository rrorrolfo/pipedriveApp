import React from "react";
import "./deleteButton.css";
import PropTypes from "prop-types";
import apiKey from "../../../../config/config";

/**
     @param {number} id ID number of the person that will be deleted
     @callback callback function that will be executed if the delete request has received a success response
*/
const deletePerson = (id, callback) => {

    const data = {
        id
    }
    
    fetch(`https://api.pipedrive.com/v1/persons/${data.id}?api_token=${apiKey}`, {
            method: "DELETE",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(data => {
            if(data.success) {
                callback();
            }
        })
        .catch(error => console.error(error))
}

const DeletePersonButton = ({identifier, fetchPeople, updateSortablePeople, currentPage}) => {

    return(
        <button 
            type="button" 
            className="DeleteButton" 
            id={identifier} 
            onClick={ () => {deletePerson(identifier, fetchPeople); updateSortablePeople(currentPage)} }>
        Delete</button>
    )

}

DeletePersonButton.propTypes = {
    identifier: PropTypes.number.isRequired,
    fetchPeople: PropTypes.func.isRequired,
    updateSortablePeople: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}

export default DeletePersonButton;