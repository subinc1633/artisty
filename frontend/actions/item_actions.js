import * as ItemApiUtil from '../util/item_api_util';

export const RECEIVE_ITEM = 'RECEIVE_ITEM';

export const receiveItem = item => ({
    type: RECEIVE_ITEM,
    item
});

export const fetchItem = itemId => dispatch => (
    ItemApiUtil.fetchItem(itemId).then(item => dispatch(receiveItem(item)))
);