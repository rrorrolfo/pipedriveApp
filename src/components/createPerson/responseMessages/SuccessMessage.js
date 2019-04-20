import React from "react";
import "./success.css"
import PropTypes from "prop-types";

const SuccessMessage = ({name}) => {
    return(
        <div id="successMessage">
            <h3>Success!</h3>
            <p>{name} has been Created</p>
        </div>
    )
}

SuccessMessage.propTypes = {
    name: PropTypes.string.isRequired
}

export default SuccessMessage;