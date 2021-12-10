import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './cart_item';

const Cart = ({ cart, cartItems }) => {
    const allCartItems = Object.values(cartItems);
    const [items, setItems] = useState([]);

    const removeCartItem = (cartItemId) => {
        let newItems = items.filter((item) => item.id !== cartItemId);
        setItems(newItems);
    }

    useEffect(() => {
        if (allCartItems) {
        // for (let [idx, item] of Object.entries(allCartItems)) {
        //     items.unshift(
        //         <CartItem key={idx} cartItem={item} idx={idx} removeCartItem={removeCartItem} />
        //     );
        // };
            setItems(allCartItems);
        }
    }, [cartItems])
    
    return (
        <div>
            { items && items.length > 0 ?
                <div>
                    <h1>{items.length} item(s) in your cart</h1>
                    {
                        items.map((item, idx) => (
                            <CartItem key={item.id} cartItem={item} idx={idx} removeCartItem={removeCartItem} />
                        ))
                    }
                </div>
                :
                <div>
                    <h1>Your cart is empty.</h1>
                    <Link to="/">Discover something unique to fill it up</Link>
                </div>
            }
        </div>
    )
};

export default Cart;