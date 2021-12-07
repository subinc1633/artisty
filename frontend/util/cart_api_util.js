export const fetchCart = cartId => (
    $.ajax({
        method: 'GET',
        url: `/api/carts/${cartId}`
    })
);