import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/category_actions';
import CategoryIndex from './category_index';

const mSTP = state => ({
    categories: Object.values(state.categories)
});

const mDTP = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mSTP, mDTP)(CategoryIndex);