import * as CartItemApiUtil from '../util/cart_item_api_util';

export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

export const receiveCartItem = cartItem => ({
    type: RECEIVE_CART_ITEM,
    cartItem
});

export const removeCartItem = cartItemId => ({
    type: REMOVE_CART_ITEM,
    cartItemId
});

export const fetchCartItem = (cartId, cartItemId) => dispatch => (
    CartItemApiUtil.fetchCartItem(cartId, cartItemId).then(cartItem => dispatch(receiveCartItem(cartItem)))
);

export const createCartItem = (cartId, cartItem) => dispatch => (
    CartItemApiUtil.createCartItem(cartId, cartItem).then(cartItem => dispatch(receiveCartItem(cartItem)))
);

export const updateCartItem = (cartId, cartItem) => dispatch => (
    CartItemApiUtil.updateCartItem(cartId, cartItem).then(cartItem => dispatch(receiveCartItem(cartItem)))
);

export const deleteCartItem = (cartId, cartItemId) => dispatch => (
    CartItemApiUtil.deleteCartItem(cartId, cartItemId).then(cartItemId => dispatch(removeCartItem(cartItemId)))
);