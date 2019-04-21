import React from "react";
import PropTypes from "prop-types";

const PaginationLink = ({ value, currentPage, fetchPeople }) => {
    return(
        <li className="paginationLink" onClick={ () => {currentPage(value); fetchPeople();}}> { value } </li>
    )
}

PaginationLink.propTypes = {
    value: PropTypes.number.isRequired,
    currentPage: PropTypes.func.isRequired,
    fetchPeople: PropTypes.func.isRequired
}

export default PaginationLink;