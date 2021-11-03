import React from 'react';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import { clearErrors } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';

const Modal = ({ modal, signInForm, signUpForm, closeModal }) => {
    if (!modal) {
        return null
    }

    const capitalizeModal = () => {
        return modal.charAt(0).toUpperCase() + modal.slice(1);
    }

    let component, otherForm, title;
    switch (modal) {
        case 'sign in':
            otherForm = signUpForm;
            component = <LoginFormContainer />;
            title = 'Sign in';
            break;
        case 'sign up':
            otherForm = signInForm;
            component = <SignupFormContainer />;
            title = 'Create your account'
            break;
        default:
            return null;
    }

    return (
        <div>
            <span className='modal-close' onClick={closeModal}>✕</span><br />
            <div className='modal-background' onClick={closeModal}>
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                    <div className='modal-header'>
                        <h3 className='modal-title'>{title}</h3>
                        { otherForm }
                    </div>
                    <div className='modal-body'>
                        { component }
                    </div>
                </div>
            </div>
        </div>
    )
};

const mSTP = state => ({
    modal: state.ui.modal
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    signUpForm: (
        <button className='register-button' onClick={() => {dispatch(openModal('sign up')); dispatch(clearErrors())}}>
            Register
        </button>
    ),
    signInForm: (
        <button className='register-button' onClick={() => { dispatch(openModal('sign in')); dispatch(clearErrors()) }}>
            Sign in
        </button>
    )
});

export default connect(mSTP, mDTP)(Modal);