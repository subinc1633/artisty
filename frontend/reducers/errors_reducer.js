import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import review from './review_errors_reducer';

const errorsReducer = combineReducers({
    session,
    review
});

export default errorsReducer;