import React from 'react';
import { useState } from 'react';

const Dropdown = ({ currentUser, logout}) => {
    const [expanded, setExpanded] = useState(false);

    function expand() {
        setExpanded(true);
    }

    function close() {
        setExpanded(false);
    }

    function select() {
        close();
    }

    return (
        <div>
            { expanded ? <div className="user-nav-dropdown" onFocus={expand} onBlur={close}>
                <ul className="dropdown-list">
                    <Link to={`/users/${currentUser.id}`}><li className="user-nav-profile" onClick={select}>
                        <IoPersonCircle className="person-circle-icon" />
                        <div className="user-nav-info"><span className="user-nav-name">{currentUser.name}</span><br/>
                        View your profile</div>
                    </li></Link>
                    <li>My Favorites</li>
                    <li onClick={() => logout()}>Log Out</li>
                </ul>
            </div>
            : null }
        </div>
    )
}

export default Dropdown;