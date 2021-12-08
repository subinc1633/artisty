import SessionForm from './session_form';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign up'
});

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    createCart: cart => dispatch(createCart(cart))
});

export default withRouter(connect(mSTP, mDTP)(SessionForm));