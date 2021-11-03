import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = ({ currentUser }) => {
    if (currentUser) {
        return (<h1 className='welcome'>Welcome back, <Link to={`/users/${currentUser.id}`}>{currentUser.name}</Link>!</h1>)
    } else {
<<<<<<< HEAD:frontend/components/nav_bar/welcome.jsx
        return (
            <nav className='display'>
                <Link to='/login'><button onClick={clearErrors}>Log in</button></Link>
                <Link to='/signup'><button onClick={clearErrors}>Sign up</button></Link>
            </nav>
        );
=======
        return (<h1 className='welcome'>Find a new piece of art from artists worldwide.</h1>);
>>>>>>> splash:frontend/components/welcome/welcome.jsx
    }
}

export default Welcome;