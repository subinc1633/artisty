import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserShow from './user_show';

const mSTP = (state, ownProps) => ({
    userId: ownProps.match.params.userId,
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mSTP, mDTP)(UserShow);