import React from 'react';
import { Link } from 'react-router-dom';

export const SplashItem = ({item}) => (
    <li>
        <Link to={`/items/${item.id}`}><strong>{item.title}</strong></Link>
        <p>{(item.price * 100 / 100).toFixed(2)}</p>
    </li>
);