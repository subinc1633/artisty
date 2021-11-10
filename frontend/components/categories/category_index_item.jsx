import React from 'react';

const CategoryIndexItem = (props) => {
    return (
        <li className='category-index-item'>
            <span className='category-picture'>
                <img className='category-index-image' src={`${props.category.photoUrl[0].url}`} />
            </span>
            <span className='category-index-title'>
                {props.category.title}
            </span>
        </li>
    )
}

export default CategoryIndexItem;