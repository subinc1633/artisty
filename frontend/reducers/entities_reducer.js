import { combineReducers } from 'redux';
import users from './users_reducer';
import items from './items_reducer';

const entitiesReducer = combineReducers({
    users,
    items
});

export default entitiesReducer;