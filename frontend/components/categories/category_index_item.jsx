import React from 'react';

const CategoryIndexItem = (props) => {
    
    
    return (
        <li>
            <span className='category-index-image'>
                <img src={`${props.category.photoUrl[0].url}`} />
            </span>
            <span className='category-index-title'>
                {props.title}
            </span>
        </li>
    )
}

export default CategoryIndexItem;