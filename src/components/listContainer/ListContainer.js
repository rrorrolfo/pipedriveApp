import React from "react";
import "./listContainer.css";
import PersonContainer from "./personContainer/PersonContainer";
import {sortableContainer} from 'react-sortable-hoc';
import Modal from "../modal/Modal";
import PropTypes from "prop-types";

const SortableContainer = sortableContainer(({children}) => {
  return <ul className="ListContainer">{children}</ul>;
});

const ListContainer = ({ people, sortList, showModal }) => {
    return(
        
        <React.Fragment>
            {/*/Components inside this container are sortable*/}
            <SortableContainer onSortEnd={ sortList } >
                { people ? (
                    people.map((person, index) => (
                        <PersonContainer 
                            key={ person.id } 
                            index={index} 
                            name={person.name} 
                            company={ person.org_name }
                            />))
                    ):(
                        ""
                    ) 
                }
            </SortableContainer>
            <Modal showModal={ showModal } />
        </React.Fragment>

    )
    
}

ListContainer.propTypes = {
    people: PropTypes.arrayOf(PropTypes.object).isRequired,
    sortList: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired

}

export default ListContainer;