import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign in'
});

const mDTP = (dispatch) => ({
    processForm: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SessionForm);