import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mSTP = state => {
    debugger
    return ({
    errors: state.errors
})};

const mDTP = dispatch => ({
    createReview: (itemId, review) => dispatch(createReview(itemId, review))
});

export default connect(mSTP, mDTP)(ReviewForm);