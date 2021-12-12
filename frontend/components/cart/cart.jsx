import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './cart_item';
import Payment from './payment';

const Cart = ({ cartItems }) => {
    const allCartItems = Object.values(cartItems);
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(null);
    const prices = [];
    
    useEffect(() => {
        if (allCartItems) setItems(allCartItems);
    }, [cartItems]);
    
    const removeCartItem = (cartItemId) => {
        let newItems = items.filter((item) => item.id !== cartItemId);
        setItems(newItems);
    };

    const receivePrice = (price) => {
        prices.push(price);
        receiveTotalPrice();
    };

    const receiveTotalPrice = () => {
        let sum = prices.reduce((acc, el) => acc + el);
        setTotal(sum);
    };
    
    return (
        <>
            { items && items.length > 0 ?
                <div className="cart-container">
                    <div className="cart">
                        <div className="cart-items-shopping">
                            { items.length === 1 ? 
                                <h1>{items.length} item in your cart</h1> :
                                <h1>{items.length} items in your cart</h1>
                            }
                        </div>
                        {
                            items.map((item, idx) => (
                                <div key={item.id}>
                                    <CartItem cartItem={item} idx={idx} removeCartItem={removeCartItem} receivePrice={receivePrice} />
                                    { idx === items.length - 1 ? null : <hr className="cart-item-divider" /> }
                                </div>
                            ))
                        }
                    </div>
                    <div className="payment-container">
                        <Link to="/categories"><button className="keep-shopping">Keep shopping</button></Link><br/>
                        <Payment total={total} numItems={items.length} />
                    </div>
                </div>
                :
                <div className="empty-cart">
                    <h1>Your cart is empty.</h1><br/>
                    <Link to="/">Discover something unique to fill it up</Link>
                </div>
            }
        </>
    )
};

export default Cart;