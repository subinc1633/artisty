import React from 'react';

export const SingleItem = ({item}) => {
    console.log(item.price)
    return (
        <li>
            <strong>{item.title}</strong>
            <p>{(item.price * 100 / 100).toFixed(2)}</p>
        </li>
    )
};