import { connect } from 'react-redux';
import ItemShow from './item_show';

const mSTP = (state, ownProps) => ({
    item: state.entities.items[ownProps.match.params.itemId]
});

const mDTP = dispatch => ({
    fetchItem: itemId => dispatch(fetchItem(itemId))
});

export default connect(mSTP, mDTP)(ItemShow);