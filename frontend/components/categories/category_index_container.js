import { connect } from 'react-redux';
import { fetchCategories } from '../../util/category_api_util';
import CategoryIndex from './category_index';

const mSTP = ({entities: categories}) => ({
    categories
});

const mDTP = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mSTP, mDTP)(CategoryIndex);