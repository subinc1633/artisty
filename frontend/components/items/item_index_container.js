import React from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../actions/item_actions';
import ItemIndex from './item_index';

const mSTP = state => {
    debugger
    return {items: state.entities.items}
};

const mDTP = dispatch => ({
    fetchItems: () => dispatch(fetchItems())
});

export default connect(mSTP, mDTP)(ItemIndex);