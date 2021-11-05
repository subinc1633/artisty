import { connect } from 'react-redux';
import { fetchCategory } from '../../actions/category_actions';
import CategoryShow from './category_show';

const mSTP = (state, ownProps) => ({
    categoryId: ownProps.match.params.categoryId
});

const mDTP = dispatch => ({
    fetchCategory: categoryId => dispatch(fetchCategory(categoryId)),
    fetchItem: () => dispatch(fetchItem)
});

export default connect(mSTP, mDTP)(CategoryShow);