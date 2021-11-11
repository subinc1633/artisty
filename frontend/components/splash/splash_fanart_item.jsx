import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SplashFanartItem = ({ item }) => {
    return (
        <li>
            {item ? (
                <Link to={`/items/${item.id}`}>
                    <img className='splash-category-image' src={`${item.photoUrl[0].url}`} />
                    <p className='splash-category-price-container'>
                        <span className='splash-category-price'>${(item.price * 100 / 100).toFixed(2)}</span>
                    </p>
                </Link>
            ) : null}
        </li>
    )
};

export default SplashFanartItem;