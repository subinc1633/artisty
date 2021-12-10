import { RECEIVE_ALL_SHOPS } from '../actions/shop_actions';

const shopReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_SHOPS:
            return action.shops
        default:
            return state;
    }
}

export default shopReducer;