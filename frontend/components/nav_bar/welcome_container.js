import { connect } from 'react-redux';
import Welcome from './welcome';

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

export default connect(mSTP)(Welcome);