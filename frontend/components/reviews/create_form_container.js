import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import { fetchItem } from "../../actions/item_actions";
import ReviewForm from "./review_form";
import { clearErrors } from "../../actions/error_actions";

const mSTP = ({errors}, ownProps) => ({
    errors: errors.review,
    formType: 'Create'
});

const mDTP = dispatch => ({
    fetchItem: itemId => dispatch(fetchItem(itemId)),
    createReview: (itemId, review) => dispatch(createReview(itemId, review)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(ReviewForm);