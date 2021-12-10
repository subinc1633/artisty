import * as ShopApiUtil from '../util/shop_api_util';

export const RECEIVE_SHOP = 'RECEIVE_SHOP';

export const receiveShop = shop => ({
    type: RECEIVE_SHOP,
    shop
});

export const fetchShop = shopId => dispatch => (
    ShopApiUtil.fetchShop(shopId).then(shop => dispatch(receiveShop(shop)))
);