import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CartItem from './cart_item';
import { fetchCart } from '../../actions/cart_actions';
import { fetchUser } from '../../actions/user_actions';

const CartPage = () => {
    const [cart, setCart] = useState('');
    const [items, setItems] = useState('');
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.id);
    
    useEffect(() => {
        dispatch(fetchUser(userId)).then(
            (res) => {
                let cart = Object.values(res.user.cart)[0];
                if (cart) {
                    dispatch(fetchCart(userId, cart.id)).then((res) => {
                        setCart(res.cart);
                    });
                }
            }
        );
    }, []);

    useEffect(() => {
        cart.cartItems ? setItems(cart.cartItems) : null
    }, [items])

    const itemQuantity = () => {
        if (cart.cartItems) {
            let cartItems = Object.values(cart.cartItems);
            let count = cartItems.length;
            switch (count) {
                case 1:
                    return (
                        <div>
                            <h1>{count} item in your cart</h1>
                            <CartItem cartItem={cartItems[0]} />
                        </div>
                    )
                default:
                    return (
                        <div>
                            <h1>{count} items in your cart</h1>
                            <ul>
                                {
                                    cartItems.map((cartItem, idx) => (
                                        <CartItem key={idx} cartItem={cartItem} />
                                    ))
                                }
                            </ul>
                        </div>
                    );
            }
        } else {
            return <h1>Your cart is empty.</h1>
        }
    }

    return (
        <div>
            {itemQuantity()}
            <div>
                
            </div>
        </div>
    );
};

export default CartPage;