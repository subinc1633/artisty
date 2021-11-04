import { combineReducers } from 'redux';
import users from './users_reducer';
import items from './items_reducer';
import categories from './categories_reducer';

const entitiesReducer = combineReducers({
    users,
    items,
    categories
});

export default entitiesReducer;