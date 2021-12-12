import * as ShopApiUtil from '../util/shop_api_util';

export const RECEIVE_ALL_SHOPS = 'RECEIVE_ALL_SHOPS';
export const RECEIVE_SHOP = 'RECEIVE_SHOP';

export const receiveAllShops = shops => ({
    type: RECEIVE_ALL_SHOPS,
    shops
});

export const receiveShop = shop => ({
    type: RECEIVE_SHOP,
    shop
});

export const fetchShops = () => dispatch => (
    ShopApiUtil.fetchShops().then(shops => dispatch(receiveAllShops(shops)))
);

export const fetchShop = shopId => dispatch => (
    ShopApiUtil.fetchShop(shopId).then(shop => dispatch(receiveShop(shop)))
);