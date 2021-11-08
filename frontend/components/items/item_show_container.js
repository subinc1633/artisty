import { connect } from 'react-redux';
import ItemShow from './item_show';
import { fetchItem } from '../../actions/item_actions';

const mSTP = (state, { match }) => ({
    itemId: match.params.itemId,
    item: state.entities.items[match.params.itemId]
});

const mDTP = dispatch => ({
    fetchItem: itemId => dispatch(fetchItem(itemId))
});

export default connect(mSTP, mDTP)(ItemShow);