import React, { useEffect, useState } from 'react';
import { IoStar, IoStarOutline } from 'react-icons/io5'

const CategoryShowItem = ({ item }) => {
    
    const ratings = [];
    item.reviews ? Object.values(item.reviews).forEach(review => {
        ratings.push(review.rating)
    }) : null;
    const avgRating = item && ratings.length > 0 ? Math.round(ratings.reduce((acc, el) => acc + el, 0) / ratings.length) : 0;

    debugger

    if (item) {
    return (
        <ul className='category-show-items'>
            <li className='category-show-item-container'>
                <img className='category-show-item-image' src={`${item.photoUrl[0].url}`} alt='' />
                <p className='category-show-item-desc'>
                    <span className='category-item-title'>{item.title}</span><br/>
                    <span className='category-item-shop'>Shop Name</span><br/>
                    <span className='review-rating'>
                        {
                            [...Array(5)].map((star, idx) => (
                                idx + 1 <= avgRating ? <IoStar key={idx} /> : <IoStarOutline key={idx} />
                            ))
                        }
                    </span> ({item.rating})<br/>
                    <span className='category-item-price'>${(item.price * 100 / 100).toFixed(2)}</span><br/>
                </p>
            </li>  
        </ul>
    )
    } else { return null }
};

export default CategoryShowItem;