import * as ReviewApiUtil from '../util/review_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_ITEM_REVIEWS = 'RECEIVE_ITEM_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveItemReviews = reviews => ({
    type: RECEIVE_ITEM_REVIEWS,
    reviews
});

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const fetchReviews = () => dispatch => (
    ReviewApiUtil.fetchReviews().then(reviews => { dispatch(receiveItemReviews(reviews))})
);

export const fetchReview = (reviewId) => dispatch => (
    ReviewApiUtil.fetchReview(reviewId).then(review => { dispatch(receiveReview(review))})
);

export const createReview = (itemId, review) => dispatch => (
    ReviewApiUtil.createReview(itemId, review)
        .then(review => { dispatch(receiveReview(review)); dispatch(clearErrors()) },
        err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateReview = (itemId, review) => dispatch => (
    ReviewApiUtil.updateReview(itemId, review)
    .then(review => { dispatch(receiveReview(review)); dispatch(clearErrors()) },
        err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteReview = (reviewId) => dispatch => (
    ReviewApiUtil.deleteReview(reviewId).then(() => dispatch(removeReview(reviewId)))
);