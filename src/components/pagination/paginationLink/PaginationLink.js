import React from "react";
import PropTypes from "prop-types";

const PaginationLink = ({ value, currentPage }) => {
    return(
        <li className="paginationLink" onClick={ () => currentPage(value) }> { value } </li>
    )
}

PaginationLink.propTypes = {
    value: PropTypes.number.isRequired,
    currentPage: PropTypes.func
}

export default PaginationLink;