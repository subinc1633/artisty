import * as ReviewApiUtil from '../util/review_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const REVIEW_ERROR = 'REVIEW_ERROR';

export const receiveAllReviews = reviews => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
});

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

export const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const reviewError = error => ({
    type: REVIEW_ERROR,
    error
});

export const fetchReviews = itemId => dispatch => (
    ReviewApiUtil.fetchReviews(itemId).then(reviews => dispatch(receiveAllReviews(reviews)))
);

export const createReview = (itemId, review) => dispatch => (
    ReviewApiUtil.createReview(itemId, review).then(review => {
        dispatch(receiveReview(review));
        dispatch(clearErrors())
    }, (err => dispatch(receiveErrors(err.responseJSON))))
);

export const updateReview = (itemId, review) => dispatch => (
    ReviewApiUtil.updateReview(itemId, review).then(review => {
        dispatch(receiveReview(review));
        dispatch(clearErrors())
    },
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteReview = (itemId, reviewId) => dispatch => (
    ReviewApiUtil.deleteReview(itemId, reviewId).then(() => dispatch(removeReview(reviewId)))
);