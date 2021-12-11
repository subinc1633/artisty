import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './cart_item';

const Cart = ({ cartItems }) => {
    const allCartItems = Object.values(cartItems);
    const [items, setItems] = useState([]);

    const removeCartItem = (cartItemId) => {
        let newItems = items.filter((item) => item.id !== cartItemId);
        setItems(newItems);
    }

    useEffect(() => {
        if (allCartItems) setItems(allCartItems);
    }, [cartItems])
    
    return (
        <div>
            { items && items.length > 0 ?
                <div className="cart-container">
                    <div className="cart">
                        { items.length === 1 ? 
                            <h1>{items.length} item in your cart</h1> :
                            <h1>{items.length} items in your cart</h1>
                        }
                        {
                            items.map((item, idx) => (
                                <div>
                                    <CartItem key={item.id} cartItem={item} idx={idx} removeCartItem={removeCartItem} />
                                    { idx === items.length - 1 ? null : <hr className="cart-item-divider" /> }
                                </div>
                            ))
                        }
                    </div>
                    <div className="payment">
                        <h3>Total</h3>
                    </div>
                </div>
                :
                <div className="empty-cart">
                    <h1>Your cart is empty.</h1><br/>
                    <Link to="/">Discover something unique to fill it up</Link>
                </div>
            }
        </div>
    )
};

export default Cart;