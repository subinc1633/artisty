import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';

const mSTP = (state, ownProps) => ({
    errors: Object.values(state.errors),
    formType: 'signup'
});

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SessionForm);