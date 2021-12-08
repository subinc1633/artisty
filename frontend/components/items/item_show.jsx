import React, { useState, useEffect } from 'react';
import OptionValueItem from './option_value_item';
import ReviewIndexContainer from '../reviews/review_index_container';
import { IoChevronDownSharp } from 'react-icons/io5';

const ItemShow = props => {
    const [active, setActive] = useState(false);
    const [cartItem, setCartItem] = useState({
        cartId: '',
        itemId: ''
    });
    const [quantity, setQuantity] = useState(1);

    const { item, itemId, reviews, currentUserId, users, cart, fetchItem, fetchReviews, fetchCart, createCartItem } = props

    useEffect(() => {
        fetchItem(itemId);
        fetchReviews();
        fetchCart(cart.id);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        let product;

        if (currentUserId) {
            product = {
                cartId: users.currentUserId.cart.id,
                itemId: itemId
            };
        } else {
            product = {
                cartId: cart.id,
                itemId: itemId
            };
        }
        
        createCartItem(product).then(
            () => { setCartItem(product); }
        );
    };

    const toggleDescription = e => {
        e.preventDefault();
        active ? setActive(false) : setActive(true);
    }

    const currencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
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
                        <div className='right-item-column'>
                            {item.shop_id}
                            <h1>{item.title}</h1> 
                            <span className='item-show-price'>{currencyFormat.format(item.price)}</span><br/>
                            <form className='request-form' onSubmit={handleSubmit}>
                                { item.options &&
                                    Object.entries(item.options).map(([key, val], idx) => (
                                    <label key={idx}>{key}<br/>
                                        <select className='item-select' name={key}>
                                            <option value='Select an option'>Select an option</option>
                                            <OptionValueItem val={val} />
                                        </select>
                                    </label>))
                                }<br/>
                                <label>Quantity<br/>
                                    <select id='quantity' name='quantity' defaultValue={quantity}>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                        <option value='6'>6</option>
                                        <option value='7'>7</option>
                                        <option value='8'>8</option>
                                        <option value='9'>9</option>
                                        <option value='10'>10</option>
                                    </select>
                                </label>
                                <br/><br/>
                                <button>Add to cart</button><br/>
                            </form>
                            <button className='item-desc-toggler' onClick={toggleDescription}>Description <IoChevronDownSharp className='down-arrow' /></button>
                            {active && <div className='item-desc'></div>}
                        </div>
                    </div>
                )}
        </div>
    );
}

export default ItemShow;