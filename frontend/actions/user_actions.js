import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'

export const receiveUserProfile = user => ({
    type: RECEIVE_USER_PROFILE,
    user
});

export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
});

export const fetchUsers = () => dispatch => (
    UserApiUtil.fetchUsers().then(users => dispatch(receiveAllUsers(users)))
);

export const fetchUser = userId => dispatch => (
    UserApiUtil.fetchUser(userId).then(user => dispatch(receiveUserProfile(user)))
);