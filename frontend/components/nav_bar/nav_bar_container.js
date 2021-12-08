import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchCategories } from '../../actions/category_actions';
import { fetchCart } from '../../actions/cart_actions';
import { fetchUser } from '../../actions/user_actions';
import NavigationBar from './nav_bar';

const mSTP = ({ session, entities }, {match}) => {
    return ({
        currentUser: entities.users[session.id],
        userId: session.id,
        navCategories: Object.values(entities.categories)
})};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchCart: (userId, cartId) => dispatch(fetchCart(userId, cartId)),
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default withRouter(connect(mSTP, mDTP)(NavigationBar));