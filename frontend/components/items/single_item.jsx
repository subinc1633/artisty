import React from 'react';

export const SingleItem = ({item}) => {
    return (
        <li>
            <strong>{item.title}</strong>
            <p>{item.price}</p>
        </li>
    )
};