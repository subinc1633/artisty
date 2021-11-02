import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';

export const receiveUserProfile = user => ({
    type: RECEIVE_USER_PROFILE,
    user
});

export const fetchUser = userId => dispatch => (
    UserApiUtil.fetchUser(userId).then(user => dispatch(receiveUserProfile(user)))
);