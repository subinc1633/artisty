import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SplashFanartItem = ({ item }) => {
    return (
        <li>
            {item ? (
                <Link to={`/items/${item.id}`}>
                    <img className='splash-category-image' src={`${item.photoUrl[0].url}`} />
                    <p className='splash-item-information'>
                        <span className='splash-item-title'>{item.title}</span>
                        <span className='splash-item-shop-name'>Shop Name</span>
                    </p>
                </Link>
            ) : null}
        </li>
    )
};

export default SplashFanartItem;