import { RECEIVE_ALL_SHOPS, RECEIVE_SHOP } from '../actions/shop_actions';

const shopReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_SHOPS:
            return action.shops;
        case RECEIVE_SHOP:
            return Object.assign({}, state, { [action.shop.id]: action.shop });
        default:
            return state;
    }
}

export default shopReducer;