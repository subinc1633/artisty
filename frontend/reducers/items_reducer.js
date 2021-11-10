import { RECEIVE_ALL_ITEMS, RECEIVE_ITEM } from '../actions/item_actions';
import {
    RECEIVE_REVIEW,
    REMOVE_REVIEW
} from '../actions/review_actions';

const itemsReducer = (state = {}, action) => {
    Object.freeze(state);
    let item;
    let nextState;
    switch (action.type) {
        case RECEIVE_ALL_ITEMS:
            return action.items;
        case RECEIVE_ITEM:
            return Object.assign({}, state, { [action.item.id]: action.item});
        case RECEIVE_REVIEW:
            nextState = Object.assign({}, state);
            item = nextState[action.review.itemId];
            item.reviews[action.review.id] = action.review
            return nextState;
        case REMOVE_REVIEW:
            nextState = Object.assign({}, state);
            item = nextState[action.itemId];
            delete item.reviews[action.reviewId];
            return nextState;
        default:
            return state;
    }
};

export default itemsReducer;