import {
    RECEIVE_ITEM
} from '../actions/item_actions';

const itemsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ITEM:
            return Object.assign({}, {[action.item.id]: action.item});
        default:
            return state;
    }
};

export default itemsReducer;