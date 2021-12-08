import * as CartApiUtil from '../util/cart_api_util';

export const RECEIVE_CART = 'RECEIVE_CART';

export const receiveCart = cart => ({
    type: RECEIVE_CART,
    cart
});

export const fetchCart = (userId, cartId) => dispatch => (
    CartApiUtil.fetchCart(userId, cartId).then(cart => dispatch(receiveCart(cart)))
);

export const createCart = (userId, cart) => dispatch => (
    CartApiUtil.createCart(userId, cart).then(cart => dispatch(receiveCart(cart)))
);