import * as ItemApiUtil from '../util/item_api_util';

export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';

export const receiveAllItems = items => ({
    type: RECEIVE_ALL_ITEMS,
    items
});

export const receiveItem = item => ({
    type: RECEIVE_ITEM,
    item
});

export const fetchItems = () => dispatch => (
    ItemApiUtil.fetchItems().then(items => dispatch(receiveAllItems(items)))
);

export const fetchItem = itemId => dispatch => (
    ItemApiUtil.fetchItem(itemId).then(item => dispatch(receiveItem(item)))
);