import { connect } from 'react-redux';
import { fetchReviews, updateReview, createReview, deleteReview } from '../../actions/review_actions';
import { fetchUsers } from '../../actions/user_actions';
import ReviewIndex from './review_index';

const mSTP = (state, ownProps) => ({
    reviews: ownProps.item.reviews,
    reviewers: Object.values(state.entities.users),
    item: ownProps.item,
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchReviews: itemid => dispatch(fetchReviews(itemid)),
    fetchUsers: () => dispatch(fetchUsers()),
    deleteReview: (itemId, reviewId) => dispatch(deleteReview(itemId, reviewId)),
});

export default connect(mSTP, mDTP)(ReviewIndex)