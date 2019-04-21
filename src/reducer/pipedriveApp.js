import * as PipedriveActionTypes from "../actionTypes/pipedriveApp";

const initialState = {
    displayModal: false,
    selectedPerson: "",
    currentPage: 1
};

export default function pipedriveApp(state = initialState, action) {
    switch( action.type ) {

        case PipedriveActionTypes.TOOGLE_MODAL:
        return {
            ...state,
            displayModal: action.isDisplayed
        }

        case PipedriveActionTypes.SELECT_PERSON:
        return {
            ...state,
            selectedPerson: action.personID
        }

        case PipedriveActionTypes.CURRENT_PAGE:
        return {
            ...state,
            currentPage: action.currentPage
        }

        default:
        return state;
        
    }   
}