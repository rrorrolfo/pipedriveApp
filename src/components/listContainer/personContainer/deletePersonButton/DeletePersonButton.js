import React from "react";
import "./deleteButton.css";
import PropTypes from "prop-types";

/**
     @param {number} id ID number of the person that will be deleted
     @callback callback function that will be executed if the delete request has received a success response
*/
const deletePerson = (id, callback) => {

    const data = {
        id
    }
    
    fetch(`https://api.pipedrive.com/v1/persons/${data.id}?api_token=479f2bc15058867bb7dcfdaade60fe25d27c55f4`, {
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

const DeletePersonButton = ({identifier, fetchPeople}) => {

    return(
        <button 
            type="button" 
            className="DeleteButton" 
            id={identifier} 
            onClick={ () => deletePerson(identifier, fetchPeople) }>
        Delete</button>
    )

}

DeletePersonButton.propTypes = {
    identifier: PropTypes.number.isRequired,
    fetchPeople: PropTypes.func.isRequired
}

export default DeletePersonButton;