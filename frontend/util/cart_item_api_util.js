export const fetchCartItems = (cartId) => (
    $.ajax({
        method: 'GET',
        url: `/api/carts/${cartId}/cart_items`
    })
);

export const fetchCartItem = (cartId, cartItemId) => (
    $.ajax({
        method: 'GET',
        url: `/api/carts/${cartId}/cart_items/${cartItemId}`
    })
);

export const createCartItem = (cartId, cart_item) => (
    $.ajax({
        method: 'POST',
        url: `/api/carts/${cartId}/cart_items`,
        data: { cart_item }
    })
);

export const updateCartItem = (cartId, cart_item) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/carts/${cartId}/cart_items/${cart_item.id}`,
        data: { cart_item }
    })
);

export const deleteCartItem = (cartId, cartItemId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/carts/${cartId}/cart_items/${cartItemId}`
    })
);