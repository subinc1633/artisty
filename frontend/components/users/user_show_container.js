import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import UserShow from './user_show';

const mSTP = (state, ownProps) => ({
    userId: ownProps.match.params.userId,
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default withRouter(connect(mSTP, mDTP)(UserShow));