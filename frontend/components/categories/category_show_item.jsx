import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchShop } from '../../actions/shop_actions';

const CategoryShowItem = ({ item }) => {
    const [shop, setShop] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (item) {
            dispatch(fetchShop(item.shopId)).then(res => setShop(res.shop));
        };
    }, [item]);

    if (item && shop) {
        return (
            <Link to={`/items/${item.id}`}>
                <li className="category-show-item-container">
                    <img className="category-show-item-image" src={`${item.photoUrl[0].url}`} alt="" />
                    <p className="category-show-item-desc">
                        <span className="category-item-title">{item.title}</span><br/>
                        <span className="category-item-shop">{shop.igHandle}</span><br/>
                        <span className="category-item-price">${(item.price * 100 / 100).toFixed(2)}</span><br/>
                    </p>
                </li>
            </Link>
        )
    } else { return null }
};

export default CategoryShowItem;