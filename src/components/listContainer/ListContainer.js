import React from "react";
import "./listContainer.css";
import PersonContainer from "./personContainer/PersonContainer";
import {sortableContainer} from 'react-sortable-hoc';

const SortableContainer = sortableContainer(({children}) => {
  return <ul className="ListContainer">{children}</ul>;
});

const ListContainer = ({ people, sortList }) => {
        return(
            
            //Components inside this container are sortable
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

        )
    
}

export default ListContainer;