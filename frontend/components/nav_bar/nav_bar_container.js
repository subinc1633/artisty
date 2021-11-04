import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import NavigationBar from './nav_bar';

const mSTP = ({ session, entities: { users, categories } }) => ({
    currentUser: users[session.id],
    categories
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mSTP, mDTP)(NavigationBar));