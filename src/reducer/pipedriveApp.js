import * as PipedriveActionTypes from "../actionTypes/pipedriveApp";

const initialState = {
    people: null,
    fetching: false,
    error: null,
    displayModal: false,
    selectedPerson: "",
    currentPage: 1,
    peopleInPage: null
};

export default function pipedriveApp(state = initialState, action) {
    switch( action.type ) {

        case PipedriveActionTypes.FETCH_STARTED:
        return {
            ...state,
            fetching: true
        };

        case PipedriveActionTypes.FETCH_SUCCESS:
        return {
            ...state,
            people: action.people,
            fetching: false
        };

        case PipedriveActionTypes.FETCH_FAILURE:
        return {
            ...state,
            fetching: false,
            error: action.error
        };

        case PipedriveActionTypes.TOOGLE_MODAL:
        return {
            ...state,
            displayModal: action.isDisplayed
        };

        case PipedriveActionTypes.SELECT_PERSON:
        return {
            ...state,
            selectedPerson: action.personID
        };

        case PipedriveActionTypes.CURRENT_PAGE:
        return {
            ...state,
            currentPage: action.currentPage
        };

        case PipedriveActionTypes.PEOPLE_IN_PAGE:
        return {
            ...state,
            peopleInPage: [...action.array.slice(action.indexStart, action.indexEnd)]
        }

        default:
        return state;
        
    }   
}