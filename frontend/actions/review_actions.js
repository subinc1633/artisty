import * as ReviewApiUtil from '../util/review_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

export const removeReview = (itemId, reviewId) => ({
    type: REMOVE_REVIEW,
    itemId,
    reviewId
});

export const createReview = (itemId, review) => dispatch => (
    ReviewApiUtil.createReview(itemId, review)
        .then(review => { dispatch(receiveReview(review)); dispatch(clearErrors()) },
        err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateReview = (itemId, review) => dispatch => {
    return (
    ReviewApiUtil.updateReview(itemId, review)
    .then(review => { dispatch(receiveReview(review)); dispatch(clearErrors()) },
        err => dispatch(receiveErrors(err.responseJSON)))
)};

export const deleteReview = (itemId, reviewId) => dispatch => (
    ReviewApiUtil.deleteReview(itemId, reviewId).then(() => dispatch(removeReview(itemId, reviewId)))
);