import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchCart, logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchCategories } from '../../actions/category_actions';
import NavigationBar from './nav_bar';

const mSTP = ({ session, entities }, { match }) => {
    return ({
    currentUser: entities.users[session.id],
    navCategories: Object.values(entities.categories),
    categoryId: match.params.categoryId
})};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchCart: cartId => dispatch(fetchCart(cartId))
});

export default withRouter(connect(mSTP, mDTP)(NavigationBar));