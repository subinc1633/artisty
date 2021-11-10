import { connect } from 'react-redux';
import Splash from './splash';
import { fetchCategories } from '../../actions/category_actions';
import { fetchItems } from '../../actions/item_actions';

const mSTP = ({ session, entities: { users, items, categories } }) => ({
    items: Object.values(items),
    categories: Object.values(categories),
    currentUser: users[session.id]
});

const mDTP = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories()),
    fetchItems: () => dispatch(fetchItems())
});

export default connect(mSTP, mDTP)(Splash);