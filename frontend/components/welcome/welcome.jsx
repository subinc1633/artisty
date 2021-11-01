import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = ({ currentUser, logout, clearErrors }) => {
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
                <Link to="/login"><button onClick={clearErrors}>Log in</button></Link>
            </nav>
        );
    };
}

export default Welcome;