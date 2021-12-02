import { connect } from 'react-redux';
import Splash from './splash';
import { fetchItems } from '../../actions/item_actions';

const mSTP = ({ session, entities: { users, items, categories } }) => ({
    items: Object.values(items),
    categories: Object.values(categories),
    currentUser: users[session.id]
});

const mDTP = dispatch => ({
    fetchItems: () => dispatch(fetchItems())
});

export default connect(mSTP, mDTP)(Splash);