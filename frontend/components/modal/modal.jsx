import React from 'react';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import { clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null
    }
    // debugger

    let component;
    switch (modal) {
        case 'sign in':
            component = <LoginFormContainer />
            break;
        case 'sign up':
            component = <SignupFormContainer />
        default:
            return null;
    }

    const capitalizeModal = () => {
        return modal.charAt(0).toUpperCase() + modal.slice(1);
    }

    return (
        <div>
            <span className='modal-close' onClick={closeModal}>✕</span><br />
            <div className='modal-background' onClick={closeModal}>
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                    <div className='modal-header'>
                        <h3 className='modal-title'>{capitalizeModal()}</h3>
                        <button onClick={() => openModal('sign up')}>Register</button>
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
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal);