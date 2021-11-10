import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { sampleSize } from 'lodash';

const SplashItem = ({items, fetchItems}) => {
    const [splashItems, setSplashItems] = useState([]);
    
    useEffect(() => {
        fetchItems()
    }, [setSplashItems]);

    return (
        <ul>
            {
                sampleSize(items, 4).map((item, idx) => (
                    <Link to={`/items/${item.id}`} key={idx}>
                        <li className='splash-item'>
                                <img className='splash-item-image' src={`${item.photoUrl[0].url}`} />
                                <p className='splash-item-price-container'>
                                    <span className='splash-item-price'>${(item.price * 100 / 100).toFixed(2)}</span>
                                </p>
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
};

export default SplashItem;