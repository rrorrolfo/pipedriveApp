import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";

// 404 component to be displayed when 404 error happens
const NotFound = () => {
    return(
        <div className="NotFound">

            <p>404</p>
            <p>Oops! We couldn´t find the page you were looking for</p>
            <Link to="/" className="return_button">
                Back to home page
            </Link>

        </div>
    )
}

export default NotFound;