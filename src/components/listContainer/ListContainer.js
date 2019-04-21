import React, { Component } from "react";
import arrayMove from 'array-move';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
            currentPage: PropTypes.number
        })
    }

    /*fetchPeople = () => {
        fetch("https://rodolfocompany-860a35.pipedrive.com/v1/persons?api_token=479f2bc15058867bb7dcfdaade60fe25d27c55f4")
        .then(response => response.json())
        .then( data => {
          this.setState({
            people: data.data
          }) 
        })
    }*/
      
    //Updates order of components after they have been dragged to new position
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({people}) => ({
        people: arrayMove(people, oldIndex, newIndex),
        }));
    };

    componentDidMount() {
        const { dispatch } = this.props;
        const fetchPeople = bindActionCreators(PipeDriveactions.fetchPeople, dispatch);
        fetchPeople();
      }
      
    render() {

        const { dispatch, people, displayModal, selectedPerson } = this.props;
        /*const { people } = this.state;*/
        
        // Action dispatchers
        const fetchPeople = bindActionCreators(PipeDriveactions.fetchPeople, dispatch);
        const toggleModal = bindActionCreators(PipeDriveactions.toggleModal, dispatch);
        const personInModal = bindActionCreators(PipeDriveactions.personInModal, dispatch);
        const selectedPage = bindActionCreators(PipeDriveactions.currentPage, dispatch);

        // Sotable container HOC - Components inside SortableContainer are sortable and dragable
        const SortableContainer = sortableContainer(({children}) => {
            return <ul className="ListContainer">{children}</ul>;
          });

        return(
            <React.Fragment>

                {/**
                * @param {string} distance Determines the number of pixel that the Draggable component needs to be dragged for it to become dragable
                */}
                <SortableContainer onSortEnd={ this.onSortEnd } distance={ 15 }> 

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

                <PaginationContainer people={ people } currentPage={ selectedPage }/>

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
        currentPage: state.currentPage
    }
}

export default connect(mapStateToProps)(ListContainer);