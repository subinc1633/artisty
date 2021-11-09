import {
    RECEIVE_ITEM
} from '../actions/item_actions';
import reviewsReducer from './reviews_reducer';

const itemsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ITEM:
            return Object.assign({}, state, { [action.item.id]: action.item});
            // return {
            //     ...state,
            //     [action.item.id]: {
            //         [action.item]: reviewsReducer(state[action.item.id][action.item], action)
            //     }
            // };
        default:
            return state;
    }
};

export default itemsReducer;