import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PopularItems = ({fetchItems, items}) => {
    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, [setAllItems]);

    const sortedItems = items
        .sort((a, b) => {
            return b.favCount - a.favCount;
        })
        .slice(0, 8);

    return (
        <ul>
            {
                sortedItems.map((item, idx) => (
                    <li className='popular-items-container' key={idx}>
                        <Link to={`/items/${item.id}`}><img className='popular-item' src={`${item.photoUrl[0].url}`} />
                            <p className='splash-item-price-container'>
                                <span className='splash-item-price'>${(item.price * 100 / 100).toFixed(2)}</span>
                            </p>
                            <p className='splash-item-popularity-container'>
                                <span className='splash-item-popularity'>{idx + 1}</span>
                            </p>
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
}

export default PopularItems;