import { connect } from 'react-redux';
import { allReviews } from '../../reducers/selectors';
import { fetchReviews, updateReview } from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mSTP = state => ({
    reviews: allReviews(state),
    users: Object.values(state.entities.users),
    items: Object.values(state.entities.items),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchReviews: () => dispatch(fetchReviews()),
    updateReviews: (itemId, review) => dispatch(updateReview(itemId, review))
});

export default connect(mSTP, mDTP)(ReviewIndex)