import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mSTP = (state, ownProps) => {
    return ({
    errors: state.errors,
    item: ownProps.reviewedItem
})};

const mDTP = dispatch => ({
    createReview: (itemId, review) => dispatch(createReview(itemId, review))
});

export default connect(mSTP, mDTP)(ReviewForm);