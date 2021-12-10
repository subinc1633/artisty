import { fetchAllShops } from '../util/shop_api_util';

export const RECEIVE_ALL_SHOPS = 'RECEIVE_ALL_SHOPS';

export const receiveAllShops = shops => ({
    type: RECEIVE_ALL_SHOPS,
    shops
});

export const fetchAllShops = () => dispatch => (
    fetchAllShops().then(shops => dispatch(receiveAllShops(shops)))
);