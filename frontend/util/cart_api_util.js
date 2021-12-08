export const fetchCart = (userId, cartId) => {
    return (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/carts/${cartId}`
    })
)};

export const createCart = (userId, cart) => (
    $.ajax({
        method: 'POST',
        url: `/api/users/${userId}/carts`,
        data: { cart }
    })
);