import React from 'react';
import { Link } from 'react-router-dom';

export const SingleItem = ({item, url, filename}) => (
    <li>
        {/* <img className='index-image' src={`${url}`} alt={`an image of ${filename}`} /> */}
        <Link to={`/items/${item.id}`}><strong>{item.title}</strong></Link>
        <p>{(item.price * 100 / 100).toFixed(2)}</p>
    </li>
);