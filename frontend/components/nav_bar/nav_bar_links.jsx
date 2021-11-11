import React from 'react';
import { Link } from 'react-router-dom';

const NavBarLink = ({ category }) => {
    return (
    <Link className='nav-bar-link' to={`/categories/${category.id}`}>
        <li>
            {category.title}
        </li>
    </Link>
)};

export default NavBarLink;