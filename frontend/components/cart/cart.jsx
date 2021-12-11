import React, { useEffect, useState } from 'react';
import mastercard from '../../../app/assets/images/mastercard.png';
import visa from '../../../app/assets/images/visa.png';
import amex from '../../../app/assets/images/american-express.png';
import discover from '../../../app/assets/images/discover.png';
import paypal from '../../../app/assets/images/paypal.png';
import klarna from '../../../app/assets/images/klarna.png';
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
        <>
            { items && items.length > 0 ?
                <div className="cart-container">
                    <div className="cart">
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
                        <h3>How you'll pay</h3>
                        <div className="payment-method">
                            <input type="radio" name="payment" value="card" />
                            <label >
                                <img src={mastercard} alt="mastercard logo" width="48" />
                                <img src={visa} alt="visa logo" width="48" />
                                <img src={amex} alt="american express logo" width="48" />
                                <img src={discover} alt="discover logo" width="48" />
                            </label>
                        </div>
                            <br/>
                        <div className="payment-method">
                            <input type="radio" name="payment" value="paypal" />
                            <label>
                                <img className="paypal" src={paypal} alt="paypal logo" width="42" height="29" />
                            </label>
                        </div>
                            <br/>
                        <div className="payment-method">
                            <input type="radio" name="payment" value="klarna"  />
                            <label className="klarna-payment">
                                <img className="klarna" src={klarna} alt="klarna logo" width="44" height="31" />
                                <span>4 interest free installments</span>
                            </label>
                        </div>
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