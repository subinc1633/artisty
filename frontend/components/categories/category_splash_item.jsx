import React from 'react';
import { Link } from 'react-router-dom';

const CategorySplashItem = ({ category, url }) => (
    <li className='category-splash-item'>
        <Link to={`/category/${category.id}`}><img className='category-splash-image' src={`${url}`} /><br/>
        <p>{category.title}</p></Link>
    </li>
);

export default CategorySplashItem;