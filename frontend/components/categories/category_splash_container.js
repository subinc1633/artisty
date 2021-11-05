import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/category_actions';
import CategorySplash from './category_splash';

const mSTP = state => {
    return ({
    categories: Object.values(state.entities.categories)
})};

const mDTP = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mSTP, mDTP)(CategorySplash);