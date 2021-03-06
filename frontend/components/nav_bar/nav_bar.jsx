import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { IoLogoGithub, IoLogoLinkedin, IoCartOutline, IoPersonCircle, IoCaretDown } from 'react-icons/io5';
import { FaAngellist, FaUserTie } from 'react-icons/fa';
import NavBarLink from './nav_bar_links';
import SearchBar from './search_bar';
import Dropdown from './dropdown';

const NavigationBar = (props) => {
    const { currentUser, navCategories, openModal, logout, fetchCategories } = props;
    const [display, setDisplay] = useState(false);
    const history = useHistory();

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        if (display) {
            window.addEventListener('click', toggleDropdown, false);
            return () => window.removeEventListener('click', toggleDropdown, false);
        }
    })

    const signIn = () => {
        openModal('sign in');
    };

    const toggleDropdown = () => {
        if (display) {
            setDisplay(false);
        } else {
            setDisplay(true);
        }
    };

    const checkIfLoggedIn = () => {
        if (currentUser) {
            history.push('/cart');
        } else {
            signIn();
        }
    };

    return (
        <nav className="nav-bar">
            <ul className="top-nav">
                <li><Link to="/"><h2 className="artisty">Artisty</h2></Link></li>
                <li className="nav-searchbar"><SearchBar /></li>
                <li className="nav-buttons">
                    <a href="https://github.com/subinc1633" target="_blank"><button className="nav-contact-button"><IoLogoGithub /></button></a>
                    <a href="https://www.linkedin.com/in/sc1633/" target="_blank"><button className="nav-contact-button"><IoLogoLinkedin /></button></a>
                    <a href="https://angel.co/u/subin-cho" target="_blank"><button className="nav-contact-button"><FaAngellist /></button></a>
                    <a href="http://subincho.net/" target="_blank"><button className="nav-contact-button"><FaUserTie /></button></a>    
                    {currentUser ? <button className="user-button" onClick={() => toggleDropdown()}><IoPersonCircle /> <IoCaretDown className="caret-button" /></button> : <button className="sign-in-button" onClick={() => signIn()}>Sign in</button>}
                    <button className="cart-button" onClick={() => checkIfLoggedIn()}><IoCartOutline /></button>
                </li>
            </ul><br/>
            <Dropdown currentUser={currentUser} logout={logout} display={display} onClick={e => e.stopPropagation()} />
            <ul className="bottom-nav">
                {
                    navCategories.map((category, idx) => (
                        <NavBarLink key={category.id} category={category} numNav={idx + 1} />
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavigationBar;