import React from 'react';
import { Link } from 'react-router-dom';

const PopularItems = ({items}) => {
    const sortedItems = items
        .sort((a, b) => {
            return b.favCount - a.favCount;
        })
        .slice(0, 7);

    return (
        <ul className="popular-items-grid">
            {
                sortedItems.map((item, idx) => (
                    <li key={item.id} className={`pop-grid-${idx + 1}`} >
                        <Link to={`/items/${item.id}`}><img src={`${item.photoUrl[0].url}`} />
                            <p className='splash-item-price-container'>
                                <span className='splash-item-price'>${(item.price * 100 / 100).toFixed(2)}</span>
                            </p>
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
}

export default PopularItems;