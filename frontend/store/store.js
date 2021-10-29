import RootReducer from '../reducers/root_reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default configureStore = (preloadedState) => (
    createStore(RootReducer, preloadedState, applyMiddleware(thunk))
);