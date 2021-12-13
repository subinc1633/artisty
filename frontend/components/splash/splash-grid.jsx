import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SplashGrid = ({ items }) => {
    const splashGridItems = [];

    if (items) {
        splashGridItems.push(items[11], items[16], items[5], items[9], items[2], items[8], items[22], items[10]);

        return (
            <div className="splash-img-grid">
                {
                    splashGridItems.map((item, idx) => (
                        <Link key={item.id} to={`/items/${item.id}`} className={`grid-item-${idx + 1}`}>
                            <img src={item.photoUrl[0].url} alt={item.title} />
                            <p className='splash-item-price-container'>
                                <span className='splash-item-price'>${(item.price * 100 / 100).toFixed(2)}</span>
                            </p>
                        </Link>
                    ))
                }
            </div>
        )
    } else { return null; }
};

export default SplashGrid;