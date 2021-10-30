import SessionForm from './session_form';

const mSTP = (state, ownProps) => ({
    errors: Object.values(state.errors),
    formType: 'login'
});

const mDTP = (dispatch) => ({
    processForm: user => dispatch(login(user))
})