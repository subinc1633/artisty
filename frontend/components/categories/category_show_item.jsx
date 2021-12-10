import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchShop } from '../../actions/shop_actions';

const CategoryShowItem = ({ item }) => {
    const [shop, setShop] = useState(null);

    useEffect(() => {
        if (item) fetchShop(item.shopId).then(res => setShop(res.shop));
    }, [])

    if (item) {
        return (
            <Link to={`/items/${item.id}`}>
                <li className="category-show-item-container">
                    <img className="category-show-item-image" src={`${item.photoUrl[0].url}`} alt="" />
                    <p className="category-show-item-desc">
                        <span className="category-item-title">{item.title}</span><br/>
                        <span className="category-item-shop">Shop Name</span><br/>
                        <span className="category-item-price">${(item.price * 100 / 100).toFixed(2)}</span><br/>
                    </p>
                </li>
            </Link>
        )
    } else { return null }
};

export default CategoryShowItem;