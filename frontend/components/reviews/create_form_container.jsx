import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import ReviewForm from "./review_form";

const mSTP = ({errors}, ownProps) => ({
    item: ownProps.item,
    currentUser: ownProps.currentUser,
    errors: errors.review,
    formType: 'Create'
});

const mDTP = dispatch => ({
    createReview: (itemId, reviewId) => dispatch(createReview(itemId, reviewId))
});

export default connect(mSTP, mDTP)(ReviewForm);