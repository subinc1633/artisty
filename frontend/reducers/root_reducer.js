import session from './session_reducer';
import entities from './entities_reducer';
import errors from './errors_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    entities,
    errors,
    session
});

export default rootReducer;