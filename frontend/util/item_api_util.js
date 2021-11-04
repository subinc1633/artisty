export const fetchItem = (itemId) => (
    $.ajax({
        method: 'GET',
        url: `/api/items/${itemId}`
    })
);