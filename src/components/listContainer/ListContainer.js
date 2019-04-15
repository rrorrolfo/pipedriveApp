import React from "react";
import "./listContainer.css";
import PersonContainer from "./personContainer/PersonContainer";
import {sortableContainer} from 'react-sortable-hoc';
import Modal from "../modal/Modal";
import PropTypes from "prop-types";

const SortableContainer = sortableContainer(({children}) => {
  return <ul className="ListContainer">{children}</ul>;
});

const ListContainer = ({ people, sortList, showModal, toggleModal, selectedPersonFunc, selectedPerson}) => {
    return(
        
        <React.Fragment>
            {/*/Components inside SortableContainer are sortable and dragable*/}
            {/**
            * @param {string} distance Determines the number of pixel that the Draggable component needs to be dragged for it to become dragable
            */}
            <SortableContainer onSortEnd={ sortList } distance={ 15 }> 
                { people ? (
                    people.map((person, index) => (
                        <PersonContainer 
                            key={ person.id } 
                            id={ person.id }
                            index={index} 
                            name={person.name} 
                            company={ person.org_name }
                            toggleModal={ toggleModal }
                            selectedPersonFunc={ selectedPersonFunc }
                            />))
                    ):(
                        ""
                    ) 
                }
            </SortableContainer>
            <Modal showModal={ showModal } toggleModal={ toggleModal } selectedPerson={ selectedPerson }/>
        </React.Fragment>

    )
    
}

ListContainer.propTypes = {
    people: PropTypes.arrayOf(PropTypes.object).isRequired,
    sortList: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func,
    selectedPersonFunc: PropTypes.func

}

export default ListContainer;