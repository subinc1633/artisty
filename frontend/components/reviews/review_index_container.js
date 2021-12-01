import { connect } from 'react-redux';
import { deleteReview } from '../../actions/review_actions';
import { fetchUsers } from '../../actions/user_actions';
import ReviewIndex from './review_index';

const mSTP = (state, ownProps) => ({
    users: Object.values(state.entities.users),
    currentUser: state.entities.users[state.session.id],
    reviews: ownProps.item.reviews
});

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
});

export default connect(mSTP, mDTP)(ReviewIndex);