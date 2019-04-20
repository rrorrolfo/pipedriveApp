import React from "react";
import "./deleteButton.css";
import PropTypes from "prop-types";

const DeletePersonButton = ({identifier}) => {
    return(
        <button type="button" className="DeleteButton" id={identifier}>Delete</button>
    )
}

DeletePersonButton.propTypes = {
    identifier: PropTypes.string.isRequired
}

export default DeletePersonButton;