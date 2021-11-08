import { connect } from 'react-redux';
import { allReviews } from '../../reducers/selectors';
import { fetchReviews, updateReview } from '../../util/review_api_util';
import ReviewIndex from './review_index';

const mSTP = state => ({
    reviews: allReviews(state),
});

const mDTP = dispatch => ({
    fetchReviews: () => dispatch(fetchReviews()),
    updateReviews: review => dispatch(updateReview(review))
});

export default connect(mSTP, mDTP)(ReviewIndex)