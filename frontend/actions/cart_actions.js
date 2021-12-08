import * as CartApiUtil from '../util/cart_api_util';

export const RECEIVE_CART = 'RECEIVE_CART';

export const receiveCart = cart => ({
    type: RECEIVE_CART,
    cart
});

export const fetchCart = cartId => dispatch => (
    CartApiUtil.fetchCart(cartId).then(cart => dispatch(receiveCart(cart)))
);

export const createCart = cart => dispatch => (
    CartApiUtil.createCart(cart).then(cart => dispatch(receiveCart(cart)))
);