export const fetchReviews = itemId => (
    $.ajax({
        method: 'GET',
        url: `/api/items/${itemId}/reviews`
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

export const deleteReview = (itemId, reviewId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/items/${itemId}/reviews/${reviewId}`
    })
);