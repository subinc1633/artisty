import { combineReducers } from 'redux';
import users from './users_reducer';
import items from './items_reducer';
import categories from './categories_reducer';
import reviews from './review_reducers';
import cart from './cart_reducer';
import cartItems from './cart_item_reducer';

const entitiesReducer = combineReducers({
    users,
    items,
    categories,
    reviews,
    cart,
    cartItems
});

export default entitiesReducer;