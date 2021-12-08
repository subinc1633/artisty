import React, { useEffect } from 'react';
import ReviewIndexContainer from '../reviews/review_index_container';
import AddToCartForm from './add_to_cart_form';

const ItemShow = props => {
    const { item, itemId, reviews, currentUserId, fetchItem, fetchReviews, fetchUser, createCartItem, fetchCart, openModal } = props

    useEffect(() => {
        fetchItem(itemId);
        fetchReviews();
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
                            createCartItem={createCartItem}
                            openModal={openModal}
                            userId={currentUserId}
                            fetchUser={fetchUser}
                            fetchCart={fetchCart} />
                    </div>
                )}
        </div>
    );
}

export default ItemShow;