import * as PipedriveActionTypes from "../actionTypes/pipedriveApp";

export const getPeople = people => {
    return {
        type: PipedriveActionTypes.GET_PEOPLE,
        payload: people
    }
};

export const toggleModal = currentStatus => {
    return {
        type: PipedriveActionTypes.TOOGLE_MODAL,
        isDisplayed: !currentStatus
    }
};

export const personInModal = personID => {
    return {
        type: PipedriveActionTypes.SELECT_PERSON,
        personID
    }
}