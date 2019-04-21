import * as PipedriveActionTypes from "../actionTypes/pipedriveApp";

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
};

export const currentPage = pageNumber => {
    return {
        type: PipedriveActionTypes.CURRENT_PAGE,
        currentPage: pageNumber
    }
}

