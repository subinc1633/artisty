import { CLOSE_MODAL } from "../actions/modal_actions";
import { RECEIVE_ERRORS, CLEAR_ERRORS } from "../actions/error_actions";

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ERRORS:
            console.log(action.errors)
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        case CLOSE_MODAL:
            return [];
        default:
            return state;
    }
};

export default sessionErrorsReducer;