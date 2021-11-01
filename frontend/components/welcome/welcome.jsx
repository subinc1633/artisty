import React from 'react';
// import LoginFormContainer from '../session/login_form_container';
import { Link } from 'react-router-dom';

// function Welcome() {
//     const []
// }

const Welcome = ({ currentUser, logout }) => {
    if (currentUser) {
        return (
            <nav>
                <button onClick={logout}>Log out</button>
                <h1>Welcome, {currentUser.name}!</h1>
            </nav>
        );
    } else {
        return (
            <nav>
                <Link to="/login"><button>Log in</button></Link>
            </nav>
        );
    };
}

export default Welcome;