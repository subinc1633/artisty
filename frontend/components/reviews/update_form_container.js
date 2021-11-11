import { connect } from "react-redux";
import { updateReview } from "../../actions/review_actions";
import ReviewForm from "./review_form";

const mSTP = ({errors}, ownProps) => ({
    item: ownProps.item,
    rating: ownProps.review.rating,
    currentUser: ownProps.currentUser,
    errors: errors.review,
    formType: 'Update'
});

const mDTP = dispatch => ({
    updateReview: (itemId, review) => dispatch(updateReview(itemId, review))
});

export default connect(mSTP, mDTP)(ReviewForm);