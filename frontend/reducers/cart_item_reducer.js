import { RECEIVE_ALL_CART_ITEMS, RECEIVE_CART_ITEM, REMOVE_CART_ITEM } from '../actions/cart_item_actions';

const cartItemReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_CART_ITEMS:
            return action.cartItems;
        case RECEIVE_CART_ITEM:
            return Object.assign({}, state, { [action.cartItem.id]: action.cartItem });
        case REMOVE_CART_ITEM:
            let nextState = Object.assign({}, state);
            delete nextState[action.cartItemId];
            return nextState;
        default:
            return state;
    }
};

export default cartItemReducer;