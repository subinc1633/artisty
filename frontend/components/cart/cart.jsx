import React, { useEffect, useState } from 'react';
import { fetchCart } from '../../actions/cart_actions';
import CartItem from './cart_item';

const Cart = () => {
    const [cart, setCart] = useState({});
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetchCart();
    }, [cart]);

    return (
        <div>
            <div>
                {
                    // Object.values(Object.values(cart).cartItems).length === 0 ?
                    // <div>Your cart is empty.</div> :
                
                    <div>
                        <p>x items in your cart</p>
                        <button>Keep shopping</button>
                        <CartItem />
                    </div>
                }
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Cart;