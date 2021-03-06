import { connect } from 'react-redux';
import ItemShow from './item_show';
import { fetchItem } from '../../actions/item_actions';
import { fetchReviews } from '../../actions/review_actions';
import { fetchShop } from '../../actions/shop_actions';

const mSTP = (state, { match }) => ({
    itemId: parseInt(match.params.itemId),
    item: state.entities.items[match.params.itemId],
    reviews: state.entities.reviews
});

const mDTP = dispatch => ({
    fetchItem: itemId => dispatch(fetchItem(itemId)),
    fetchReviews: () => dispatch(fetchReviews()),
    fetchShop: shopId => dispatch(fetchShop(shopId))
});

export default connect(mSTP, mDTP)(ItemShow);