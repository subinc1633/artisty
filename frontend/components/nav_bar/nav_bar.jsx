import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { IoCartOutline, IoPersonCircle, IoCaretDown } from 'react-icons/io5';
import NavBarLink from './nav_bar_links';
import SearchBar from './search_bar';
import Dropdown from './dropdown';

const NavigationBar = (props) => {
    const { currentUser, navCategories, logout, openModal, fetchCategories } = props;
    const [display, setDisplay] = useState(false);
    const history = useHistory();

    useEffect(() => {
        fetchCategories();
    }, []);

    const signIn = () => {
        openModal('sign in');
    };

    function toggleDisplay() {
        display ? setDisplay(false) : setDisplay(true);
    }

    const checkIfLoggedIn = () => {
        if (currentUser) {
            history.push('/cart');
        } else {
            signIn();
        }
    }

    return (
        <nav className="nav-bar">
            <ul className="top-nav">
                <li><Link to="/"><h2 className="artisty">Artisty</h2></Link></li>
                <li className="nav-searchbar"><SearchBar /></li>
                <li>{currentUser ? <button className="user-button" onClick={() => toggleDisplay()}><IoPersonCircle /> <IoCaretDown className="caret-button" /></button> : <button className="sign-in-button" onClick={() => signIn()}>Sign in</button>}</li>
                <li><button className="cart-button" onClick={() => checkIfLoggedIn()}><IoCartOutline /></button></li>
            </ul><br/>
            {
                currentUser && display ?
                    <Dropdown currentUser={currentUser} logout={logout} />
                : null
            }
            <ul className="bottom-nav">
                {
                    navCategories.map((category, idx) => (
                        <NavBarLink key={idx} category={category}/>
                    ))
                }
                    <Link className="nav-bar-link" to="/categories"><li>All Categories</li></Link>
            </ul>
        </nav>
    )
}

export default NavigationBar;