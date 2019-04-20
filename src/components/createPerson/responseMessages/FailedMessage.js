import React from "react";
import "./failed.css";

const FailedMessage = () => {
    return(
        <div id="failedMessage">
            <h3>Not Successful</h3>
            <p>Oops! Seems that somehting went wrong while creating the new person. Please check all the fields are filled properly and try again.</p>
        </div>
    )
}

export default FailedMessage;