import * as SessionApiUtil from '../util/session_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const signup = formUser => dispatch => (
    SessionApiUtil.signup(formUser)
    .then(user => {dispatch(receiveCurrentUser(user)); dispatch(clearErrors())},
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const login = formUser => dispatch => (
    SessionApiUtil.login(formUser)
    .then(user => {
        dispatch(receiveCurrentUser(user)); dispatch(clearErrors())},
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
    SessionApiUtil.logout().then(() => dispatch(logoutCurrentUser()))
);