import React from "react";
import PropTypes from "prop-types";

const PaginationLink = ({ value, currentPage, fetchPeople, updateSortablePeople }) => {
    return(
        <li 
        className="paginationLink" 
        onClick={ () => {currentPage(value); fetchPeople(); updateSortablePeople(value);}}> { value } </li>
    )
}

PaginationLink.propTypes = {
    value: PropTypes.number.isRequired,
    currentPage: PropTypes.func.isRequired,
    fetchPeople: PropTypes.func.isRequired,
    updateSortablePeople: PropTypes.func.isRequired
}

export default PaginationLink;