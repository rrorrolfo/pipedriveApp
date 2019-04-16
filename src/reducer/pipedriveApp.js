import * as PipedriveActionTypes from "../actionTypes/pipedriveApp";

const initialState = {
    people:"",
    displayModal: false,
    selectedPerson: ""
};

export default function pipedriveApp(state = initialState, action) {
    switch( action.type ) {

        case PipedriveActionTypes.GET_PEOPLE:
        return {
            ...state,
            people: action.payload.people
        }

        case PipedriveActionTypes.TOOGLE_MODAL:
        return {
            ...state,
            displayModal: action.status
        }

        case PipedriveActionTypes.SELECT_PERSON:
        return {
            ...state,
            selectedPerson: action.person
        }

        default:
        return state;
        
    }   
}