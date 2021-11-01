import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign in'
});

const mDTP = (dispatch) => ({
    processForm: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);