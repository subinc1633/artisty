import React from 'react';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../../actions/category_actions';

const NavigationBar = props => {
    const { currentUser, logout, openModal } = props;
    
    const loggingOut = () => {
        logout();
        props.history.push('/');
    };
    
    return (
    <nav className='nav-bar'>
        <ul>
            <li><Link to="/"><h2 className='artisty'>Artisty</h2></Link></li>
            <li>searchbar</li>
            <li>{currentUser ? <button onClick={() => loggingOut()}>Log out</button> : <button onClick={() => openModal('sign in')}>Sign in</button>}</li>
            <li>shoppingcart</li>
        </ul><br/>
        <ul className='bottom-nav'>
            <li>Fanart</li>
            <li>Food & Drinks</li>
            <li>Landscape</li>
            <li>Original Characters</li>
            <li>Stickers & Accessories</li>
        </ul>
    </nav>
)};

export default NavigationBar;