import { connect } from 'react-redux';
import ItemShow from './item_show';
import { fetchItem } from '../../actions/item_actions';
import { fetchReviews } from '../../actions/review_actions';
import { createCartItem } from '../../actions/cart_item_actions';

const mSTP = (state, { match }) => ({
    itemId: match.params.itemId,
    item: state.entities.items[match.params.itemId],
    reviews: state.entities.reviews
});

const mDTP = dispatch => ({
    fetchItem: itemId => dispatch(fetchItem(itemId)),
    fetchReviews: () => dispatch(fetchReviews()),
    createCartItem: cartItem => dispatch(createCartItem(cartItem))
});

export default connect(mSTP, mDTP)(ItemShow);