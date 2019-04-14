import React from "react";
import "./listContainer.css";
import PersonContainer from "./personContainer/PersonContainer";
import {sortableContainer} from 'react-sortable-hoc';
import Modal from "../modal/Modal";

const SortableContainer = sortableContainer(({children}) => {
  return <ul className="ListContainer">{children}</ul>;
});

const ListContainer = ({ people, sortList }) => {
    return(
        
        <React.Fragment>
            {/*/Components inside this container are sortable*/}
            <SortableContainer onSortEnd={ sortList }>
                { people ? (
                    people.map((person, index) => (
                        <PersonContainer 
                            key={ person.id } 
                            index={index} 
                            name={person.name} 
                            company={ person.org_name } />))
                    ):(
                        ""
                    ) 
                }
            </SortableContainer>
            <Modal />
        </React.Fragment>

    )
    
}

export default ListContainer;