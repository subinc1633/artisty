import React, { useEffect, useState } from 'react';
import CartItem from './cart_item';
import { fetchCart } from '../../actions/cart_actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Cart = () => {
    const [total, setTotal] = useState(0);
    const cartId = useSelector(state => {
        debugger
        state.entities.cart.id});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCart(cartId));
    })

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