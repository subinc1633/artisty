import { RECEIVE_SHOP } from '../actions/shop_actions';

const shopReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_SHOP:
            return action.shop
        default:
            return state;
    }
}

export default shopReducer;