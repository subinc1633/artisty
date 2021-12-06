export const fetchCart = cartId => (
    $.ajax({
        method: 'GET',
        url: `/api/cart_items/${cartId}`
    })
);