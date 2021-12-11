import React from 'react';
import { Link } from 'react-router-dom';
import { IoPersonCircle } from 'react-icons/io5';

const Dropdown = ({ currentUser, logout, display }) => {
    return (
        <div>
            { display && currentUser ? 
                <div className="user-nav-dropdown" onBlur={() => toggleDropdown()}>
                    <ul className="dropdown-list">
                        <Link to={`/users/${currentUser.id}`}><li className="user-nav-profile">
                            <IoPersonCircle className="person-circle-icon" />
                            <div className="user-nav-info"><span className="user-nav-name">{currentUser.name}</span><br/>
                            View your profile</div>
                        </li></Link>
                        <li onClick={() => logout()}>Log Out</li>
                    </ul>
                </div>
                : null
            }
        </div>
    )
}

export default Dropdown;