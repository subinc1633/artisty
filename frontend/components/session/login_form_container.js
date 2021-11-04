import SessionForm from './session_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { login, clearErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors, session }) => ({
    session,
    errors: errors.session,
    formType: 'Sign in'
});

const mDTP = (dispatch) => ({
    processForm: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mSTP, mDTP)(SessionForm));