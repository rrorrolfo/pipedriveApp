import React from "react";
import "./paginationContainer.css";
import PaginationLink from "./paginationLink/PaginationLink";
import PropTypes from "prop-types";

const PaginationContainer = ({ people, currentPage, fetchPeople, updateSortablePeople }) => {

    /**
     *@param {array} array The length of the array passed will determine the number of links to be printed
    */
    const displayLinks = array => {

        let linksToDisplay = Math.ceil(array.length / 10);
        const links = []

        for (let i = 0; i < linksToDisplay; i += 1) {
            links.push(<PaginationLink  
            key={ i + 1 } 
            value={ i + 1 } 
            currentPage={ currentPage }
            fetchPeople={ fetchPeople }
            updateSortablePeople= { updateSortablePeople }
            />)
          }

        return links;

    }

    return(
        <div className="PaginationContainer">
            <ul className="paginationList">

            {people ? (displayLinks(people)) : ("")}
                
            </ul>
        </div>
    )
}

PaginationContainer.propTypes = {
    people: PropTypes.array,
    currentPage: PropTypes.func.isRequired,
    fetchPeople: PropTypes.func.isRequired,
    updateSortablePeople: PropTypes.func.isRequired
}

export default PaginationContainer;