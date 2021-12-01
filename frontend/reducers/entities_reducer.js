import { combineReducers } from 'redux';
import users from './users_reducer';
import items from './items_reducer';
import categories from './categories_reducer';
import reviews from './review_reducers';

const entitiesReducer = combineReducers({
    users,
    items,
    categories,
    reviews
});

export default entitiesReducer;