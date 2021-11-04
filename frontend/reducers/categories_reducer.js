import {
    RECEIVE_ALL_CATEGORIES,
    RECEIVE_CATEGORY
} from '../actions/category_actions';
import { RECEIVE_ITEM } from '../actions/item_actions';

const categoryReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_CATEGORIES:
            return action.categories;
        case RECEIVE_CATEGORY:
            return Object.assign({}, state, { [action.category.id]: action.category });
        default:
            return state;
    }
};

export default categoryReducer;