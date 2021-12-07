import { RECEIVE_CART } from '../actions/cart_actions';

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_CART:
            return Object.assign({}, state, { [action.cart.id]: action.cart });
        default:
            return state;
    }
};

export default cartReducer;