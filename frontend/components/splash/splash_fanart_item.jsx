import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchShop } from '../../actions/shop_actions';

const SplashFanartItem = ({ item }) => {
    const dispatch = useDispatch();

    if (item) {
        return (
            <Link to={`/items/${item.id}`}>
                <li>
                    <img className='splash-category-image' src={`${item.photoUrl[0].url}`} />
                    <p className='splash-item-information'>
                        <span className='splash-item-title'>{item.title}</span>
                    </p>
                </li>
            </Link>
        );
    } else { return null}
};

export default SplashFanartItem;