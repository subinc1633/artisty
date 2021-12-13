import React from 'react';
import { Link } from 'react-router-dom';

const NavBarLink = ({ category, numNav }) => {
    return (
    <Link className={`nav-bar-link-${numNav}`} to={`/categories/${category.id}`}>
        <li>
            {category.title}
        </li>
    </Link>
)};

export default NavBarLink;