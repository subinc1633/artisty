import React from 'react';
import { Link } from 'react-router-dom';

const NavBarLink = ({ category }) => {
    return (
    <li>
        <Link to={`/categories/${category.id}`}>
            {category.title}
        </Link>
    </li>
)};

export default NavBarLink;