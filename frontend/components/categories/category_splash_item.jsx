import React from 'react';

const CategorySplashItem = ({ category, url }) => (
    <li className='category-splash-item'>
        <img className='category-splash-image' src={`${url}`} /><br/>
        <p>{category.title}</p>
    </li>
);

export default CategorySplashItem;