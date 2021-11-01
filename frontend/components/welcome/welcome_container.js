import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Welcome from './welcome';

const mSTP = ({ session, entities: { users } }) => {
    return { user: users[session.id],
    isActive: false }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Welcome);