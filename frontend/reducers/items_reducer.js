import { RECEIVE_ITEM } from '../actions/item_actions';
import {
    RECEIVE_ALL_REVIEWS,
    RECEIVE_REVIEW,
    REMOVE_REVIEW
} from '../actions/review_actions';

const itemsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ITEM:
            return Object.assign({}, state, { [action.item.id]: action.item});
        case RECEIVE_ALL_REVIEWS:
            if (action.reviews.length > 0) {
                const reviewedItem = state[action.reviews[0].itemId];
                return Object.assign({}, state, { [reviewedItem.id]: reviewedItem });
            } else {
                return Object.assign({}, state);
            }
        case RECEIVE_REVIEW:
            const item = state[action.review.itemId];
            item.reviews.push(action.review);
            return Object.assign({}, state, { [item.id]: item });
        case REMOVE_REVIEW:
            const nextState = Object.assign({}, state);
            delete nextState[action.reviewId];
            return nextState;
        default:
            return state;
    }
};

export default itemsReducer;