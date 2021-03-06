import { connect } from 'react-redux';
import { fetchCategory } from '../../actions/category_actions';
import { fetchItem } from '../../actions/item_actions';
import { fetchShops, fetchShop } from '../../actions/shop_actions';
import CategoryShow from './category_show';

const mSTP = (state, ownProps) => ({
    categoryId: ownProps.match.params.categoryId
});

const mDTP = dispatch => ({
    fetchCategory: categoryId => dispatch(fetchCategory(categoryId)),
    fetchItem: itemId => dispatch(fetchItem(itemId)),
    fetchShops: () => dispatch(fetchShops()),
    fetchShop: shopId => dispatch(fetchShop(shopId))
});

export default connect(mSTP, mDTP)(CategoryShow);