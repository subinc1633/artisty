import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/session_actions';
import Welcome from './welcome';

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(Welcome);