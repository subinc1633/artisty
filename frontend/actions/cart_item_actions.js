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

export const fetchCartItem = cartItemId => dispatch => (
    CartItemApiUtil.fetchCartItem(cartItemId).then(cartItem => dispatch(receiveCartItem(cartItem)))
);

export const createCartItem = cartItem => dispatch => (
    CartItemApiUtil.createCartItem(cartItem).then(cartItem => dispatch(receiveCartItem(cartItem)))
);

export const updateCartItem = cartItem => dispatch => (
    CartItemApiUtil.updateCartItem(cartItem).then(cartItem => dispatch(receiveCartItem(cartItem)))
);

export const deleteCartItem = cartItemId => dispatch => (
    CartItemApiUtil.deleteCartItem(cartItemId).then(cartItemId => dispatch(removeCartItem(cartItemId)))
);