import * as PipedriveActionTypes from "../actionTypes/pipedriveApp";

const initialState = {
    displayModal: false,
    selectedPerson: ""
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

        default:
        return state;
        
    }   
}