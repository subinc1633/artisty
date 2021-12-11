import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchShop } from '../../actions/shop_actions';

const SplashFanartItem = ({ item }) => {
    const [shop, setShop] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (item) {
            dispatch(fetchShop(item.shopId)).then(res => setShop(res.shop));
        }
    }, []);

    return (
        <li>
            {item && shop ? (
                <Link to={`/items/${item.id}`}>
                    <img className='splash-category-image' src={`${item.photoUrl[0].url}`} />
                    <p className='splash-item-information'>
                        <span className='splash-item-title'>{item.title}</span>
                        <span className='splash-item-shop-name'>{shop.igHandle}</span>
                    </p>
                </Link>
            ) : null}
        </li>
    );
};

export default SplashFanartItem;