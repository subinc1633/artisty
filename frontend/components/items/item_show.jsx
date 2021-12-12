import React, { useEffect, useState, useRef } from 'react';
import ReviewIndexContainer from '../reviews/review_index_container';
import AddToCartForm from './add_to_cart_form';

const usePrevProps = val => {
    const ref = useRef();
    useEffect(() => {
        ref.current = val;
    });
    return ref.current
}

const ItemShow = props => {
    const { item, itemId, reviews, fetchItem, fetchShop, fetchReviews } = props;
    const [shop, setShop] = useState(null);
    const prevId = usePrevProps(itemId);

    useEffect(() => {
        fetchItem(itemId)
        .then(res => {
            let shopId = res.item.shopId;
            fetchShop(shopId)
            .then(res => setShop(res.shop));
        });
        fetchReviews();
    }, []);

    useEffect(() => {
        if (prevId !== itemId) {
            fetchItem(itemId);
        }
    });

    return (
        <div className='item-show-container'>
            { !item ? null :
                (
                    <div className='item-show-page'>
                        <div className='left-item-column'>
                            <div className='item-thumbnail'>
                                <img className='item-image' src={`${item.photoUrl[0].url}`} />
                            </div>
                            <div className='reviews'>
                                <ReviewIndexContainer item={item} reviews={reviews} />
                            </div>
                        </div>
                        <AddToCartForm
                            item={item}
                            itemId={itemId}
                            shop={shop} />
                    </div>
                )}
        </div>
    );
}

export default ItemShow;