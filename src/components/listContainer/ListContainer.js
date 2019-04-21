import React, { Component } from "react";
/*import arrayMove from 'array-move';*/
import { connect } from "react-redux";
import * as PipeDriveactions from "../../actions/pipedriveApp";
import "./listContainer.css";
import PersonContainer from "./personContainer/PersonContainer";
import {sortableContainer} from 'react-sortable-hoc';
import Modal from "../modal/Modal";
import PropTypes from "prop-types";
import PaginationContainer from "../pagination/PaginationContainer";

class ListContainer extends Component {

    static propTypes = {
        state: PropTypes.shape({
            people: PropTypes.array,
            fetching: PropTypes.bool,
            error: PropTypes,
            displayModal: PropTypes.bool,
            selectedPerson: PropTypes.number,
            currentPage: PropTypes.number,
            peopleInPage: PropTypes.array
        })
    }
      
    /*
    //Updates order of components after they have been dragged to new position
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({people}) => ({
        people: arrayMove(people, oldIndex, newIndex),
        }));
    };*/

    componentDidMount() {
        this.props.fetchPeople();
      }
      
    render() {

        const { people, 
            displayModal, 
            selectedPerson, 
            fetchPeople, 
            toggleModal, 
            personInModal, 
            selectedPage,
            peopleInPage } = this.props;

        // Sotable container HOC - Components inside SortableContainer are sortable and dragable
        const SortableContainer = sortableContainer(({children}) => {
            return <ul className="ListContainer">{children}</ul>;
          });

        return(
            <React.Fragment>

                {/**
                * @param {string} distance Determines the number of pixel that the Draggable component needs to be dragged for it to become dragable
                */}
                <SortableContainer /*onSortEnd={ this.onSortEnd }*/ distance={ 15 }> 

                    { peopleInPage ? (
                        peopleInPage.map((person, index) => (
                        <PersonContainer 
                            key={ person.id } 
                            id={ person.id }
                            index={index} 
                            name={person.name} 
                            company={ person.org_name }
                            toggleModal={ toggleModal }
                            modalStatus={ displayModal }
                            personInModal={ personInModal }
                            fetchPeople={ fetchPeople }
                            />))
                        ):(
                            ""
                        ) 
                    }

                </SortableContainer>

                {displayModal ? (<Modal 
                        showModal={ displayModal } 
                        toggleModal={ toggleModal } 
                        selectedPerson={ selectedPerson } 
                        people={ people }/>
                        ) : ("")}

                <PaginationContainer 
                people={ people } 
                currentPage={ selectedPage }
                fetchPeople={ fetchPeople }
                />

            </React.Fragment>
    
        )
    }
    
}

const mapStateToProps = state => {
    return {
        people: state.people,
        fetching: state.fetching,
        error: state.error,
        displayModal: state.displayModal,
        selectedPerson: state.selectedPerson,
        currentPage: state.currentPage,
        peopleInPage: state.peopleInPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPeople: () => dispatch(PipeDriveactions.fetchPeople()),
        toggleModal: status => dispatch(PipeDriveactions.toggleModal(status)),
        personInModal: person => dispatch(PipeDriveactions.personInModal(person)),
        selectedPage: value => dispatch(PipeDriveactions.currentPage(value)),
        displayPeople: (page, array) => dispatch(PipeDriveactions.peopleInPage(page, array))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);