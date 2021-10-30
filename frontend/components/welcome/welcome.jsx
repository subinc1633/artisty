import React from 'react';

const Welcome = ({ currentUser, logout }) => {
    const loggedIn = () => (
        <div>
            <h1>Welcome, {currentUser}!</h1>
            <button onClick={logout}></button>
        </div>
    );
    
    const loggedOut = () => (
        <nav>
            <button>Login</button>
            <button>Sign Up</button>
        </nav>
    );

    return currentUser ? loggedIn() : loggedOut();
};

export default Welcome;