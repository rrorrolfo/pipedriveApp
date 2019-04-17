import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as PipeDriveactions from "../../actions/pipedriveApp";
import "./listContainer.css";
import PersonContainer from "./personContainer/PersonContainer";
import {sortableContainer} from 'react-sortable-hoc';
import Modal from "../modal/Modal";
import PropTypes from "prop-types";

class ListContainer extends Component {

    static propTypes = {

        people: PropTypes.arrayOf(PropTypes.object),
        sortList: PropTypes.func.isRequired,
        state: PropTypes.shape({
            displayModal: PropTypes.bool,
            selectedPerson: PropTypes.number
        })
    
    }

    render() {

        const SortableContainer = sortableContainer(({children}) => {
            return <ul className="ListContainer">{children}</ul>;
          });


        const { sortList, dispatch, people, displayModal, selectedPerson } = this.props;
        
        const toggleModal = bindActionCreators(PipeDriveactions.toggleModal, dispatch);
        const personInModal = bindActionCreators(PipeDriveactions.personInModal, dispatch);

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
                            modalStatus={ displayModal }
                            selectedPerson={ selectedPerson }
                            personInModal={ personInModal }
                            />))
                        ):(
                            ""
                        ) 
                    }
                </SortableContainer>
                <Modal showModal={ displayModal } toggleModal={ toggleModal } selectedPerson={ selectedPerson }/>
            </React.Fragment>
    
        )
    }
    
}

const mapStateToProps = state => {
    return {
        displayModal: state.displayModal,
        selectedPerson: state.selectedPerson
    }
}

export default connect(mapStateToProps)(ListContainer);