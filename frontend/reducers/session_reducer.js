import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    RECEIVE_CART
} from '../actions/session_actions';

const _nullUser = {
    id: null
};

const sessionReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        case RECEIVE_CART:
            debugger
        default:
            return state;
    }
};

export default sessionReducer;