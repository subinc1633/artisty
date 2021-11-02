import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = ({ currentUser, logout, clearErrors }) => {
    if (currentUser) {
        return (
            <nav>
                <button onClick={logout}>Log out</button>
                <h1>Welcome, <Link to={`/users/${currentUser.id}`}>{currentUser.name}</Link>!</h1>
            </nav>
        );
    } else {
        return (
            <nav className='display'>
                <Link to="/login"><button onClick={clearErrors}>Log in</button></Link>
            </nav>
        );
    }
}

export default Welcome;