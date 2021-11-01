import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign up'
});

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SessionForm);