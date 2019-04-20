import React from "react";
import PropTypes from "prop-types";

const PaginationLink = ({ value }) => {
    return(
        <li className="paginationLink"> { value } </li>
    )
}

PaginationLink.propTypes = {
    value: PropTypes.number.isRequired
}

export default PaginationLink;