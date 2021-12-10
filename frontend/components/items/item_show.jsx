import React, { useEffect } from 'react';
import { fetchAllShops } from '../../actions/shop_actions';
import ReviewIndexContainer from '../reviews/review_index_container';
import AddToCartForm from './add_to_cart_form';

const ItemShow = props => {
    const { item, itemId, reviews, currentUserId, fetchItem, fetchAllShops, fetchReviews } = props;
    const [shops, setShops]

    useEffect(() => {
        fetchItem(itemId);
        fetchReviews();
        fetchAllShops().then(res => setShops(res.shops));
    }, []);

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
                            shops={shops} />
                    </div>
                )}
        </div>
    );
}

export default ItemShow;