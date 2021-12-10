import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { IoCartOutline, IoPersonCircle, IoCaretDown } from 'react-icons/io5';
import NavBarLink from './nav_bar_links';
import SearchBar from './search_bar';

function useCompVisible(initVisible) {
    const [isVisible, setIsVisible] = useState(initVisible);
    const ref = useRef(null);

    const handleOutsideClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick, true);
        return () => document.removeEventListener('click', handleOutsideClick, true);
    }, []);

    return { ref, isVisible, setIsVisible };
}

const NavigationBar = (props) => {
    const { currentUser, navCategories, logout, openModal, fetchCategories } = props;
    const { ref, isVisible, setIsVisible } = useCompVisible(true);
    const [display, setDisplay] = useState(false);
    const [classState, setClassState] = useState('hide-dropdown');
    const history = useHistory();

    useEffect(() => {
        fetchCategories();
    }, []);

    const signIn = () => {
        openModal('sign in');
    };

    const toggleDisplay = () => {
        if (display) {
            setDisplay(false);
            setClassState('hide-dropdown');
        } else {
            setDisplay(true);
            setClassState('show-dropdown');
        }
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
                currentUser ?
                <div className="dropdown-background" ref={ref}>
                    {
                        isVisible ?
                        (<div className={`user-nav-dropdown ${classState}`}>
                            <ul className="dropdown-list">
                                <Link to={`/users/${currentUser.id}`}><li className="user-nav-profile" onClick={() => setDisplay(!display)}>
                                    <IoPersonCircle className="person-circle-icon" />
                                    <div className="user-nav-info"><span className="user-nav-name">{currentUser.name}</span><br/>
                                    View your profile</div>
                                </li></Link>
                                <li>My Favorites</li>
                                <li onClick={() => logout()}>Log Out</li>
                            </ul>
                        </div>)
                        : null
                    }
                </div>
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