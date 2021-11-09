import { connect } from 'react-redux';
import { fetchReviews, updateReview, createReview, deleteReview } from '../../actions/review_actions';
import { fetchUsers } from '../../actions/user_actions';
import ReviewIndex from './review_index';

const mSTP = (state, ownProps) => ({
    reviews: Object.values(ownProps.item.reviews),
    reviewers: Object.values(state.entities.users),
    item: ownProps.item,
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.review
});

const mDTP = dispatch => ({
    fetchReviews: itemid => dispatch(fetchReviews(itemid)),
    fetchUsers: () => dispatch(fetchUsers()),
    updateReview: (itemId, review) => dispatch(updateReview(itemId, review)),
    deleteReview: (itemId, reviewId) => dispatch(deleteReview(itemId, reviewId)),
    createReview: (itemId, review) => dispatch(createReview(itemId, review)),
});

export default connect(mSTP, mDTP)(ReviewIndex)