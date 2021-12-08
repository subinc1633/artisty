import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER_PROFILE, RECEIVE_ALL_USERS } from '../actions/user_actions';
import { RECEIVE_CART } from '../actions/cart_actions';
import cartReducer from './cart_reducer';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_USER_PROFILE:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_ALL_USERS:
            return action.users;
        default:
            return state;
    }
}

export default usersReducer;