import React from "react";
import "./listContainer.css";
import PersonContainer from "./personContainer/PersonContainer";

const ListContainer = () => {
    return(
        <div className="ListContainer">
            <PersonContainer />
            <PersonContainer />
        </div>
    )
}

export default ListContainer;