import React from "react";
import "./listContainer.css";
import PersonContainer from "./personContainer/PersonContainer";



const ListContainer = ({ people }) => {

    const displayPeople = () => {

        const peopleArray = people.map( person => <PersonContainer name={ person.name } company={ person.org_name } key={ person.id }/>)

        return peopleArray;
    } 

    return(
        <div className="ListContainer">

            { people ? (displayPeople()) : ("") }

        </div>
    )
}

export default ListContainer;