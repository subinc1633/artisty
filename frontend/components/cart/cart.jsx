import React, { useEffect, useState } from 'react';
import CartItem from './cart_item';
import { fetchCartItem } from '../../actions/cart_item_actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchCart } from '../../actions/cart_actions';
import { fetchUser } from '../../actions/user_actions';

const Cart = (props) => {
    const [cart, setCart] = useState(props.cart);

    const dispatch = useDispatch();
    
    return (
        <div>
            {   
                cart.cartItems ?
                <div>
                    <p>x items in your cart</p>
                    <button>Keep shopping</button>
                    <CartItem />
                </div> :
                <div>Your cart is empty.</div>
            }
        </div>
    )
}

export default Cart;