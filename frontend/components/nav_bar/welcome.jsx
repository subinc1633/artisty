import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = ({ currentUser }) => {
    if (currentUser) {
        return (<h1 className='welcome'>Welcome back, <Link to={`/users/${currentUser.id}`}>{currentUser.name}</Link>!</h1>)
    } else {
        return (<h1 className='welcome'>Find new pieces of art from artists worldwide.</h1>);
    }
}

export default Welcome;