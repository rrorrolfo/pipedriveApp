import React from "react";
import "./paginationContainer.css";
import PaginationLink from "./paginationLink/PaginationLink";

const PaginationContainer = () => {
    return(
        <div className="PaginationContainer">
            <ul className="paginationList">
                <PaginationLink />
                <PaginationLink />
                <PaginationLink />
                <PaginationLink />
            </ul>
        </div>
    )
}

export default PaginationContainer;