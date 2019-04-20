import React from "react";
import "./deleteButton.css";
import PropTypes from "prop-types";

const deletePerson = id => {

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
        .then(data => console.log(data.success))
        .catch(error => console.error(error))
}

const DeletePersonButton = ({identifier}) => {
    return(
        <button type="button" className="DeleteButton" id={identifier} onClick={ () => deletePerson(identifier) }>Delete</button>
    )
}

DeletePersonButton.propTypes = {
    identifier: PropTypes.number.isRequired
}

export default DeletePersonButton;