export const fetchReviews = () => (
    $.ajax({
        method: 'GET',
        url: '/api/reviews'
    })
);

export const fetchReview = (reviewId) => (
    $.ajax({
        method: 'GET',
        url: `/api/reviews/${reviewId}`
    })
);

export const createReview = (itemId, review) => (
    $.ajax({
        method: 'POST',
        url: `/api/items/${itemId}/reviews`,
        data: { review }
    })
);

export const updateReview = (itemId, review) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/items/${itemId}/reviews/${review.id}`,
        data: { review }
    })
);

export const deleteReview = (reviewId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/reviews/${reviewId}`
    })
);