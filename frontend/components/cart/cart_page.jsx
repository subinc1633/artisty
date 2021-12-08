import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CartItem from './cart_item';
import { fetchCart } from '../../actions/cart_actions';
import { fetchUser } from '../../actions/user_actions';

const CartPage = () => {
    const [cart, setCart] = useState({});
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.id);
    
    useEffect(() => {
        dispatch(fetchUser(userId)).then(
            (res) => {
                let cart = Object.values(res.user.cart)[0];
                if (cart) {
                    dispatch(fetchCart(userId, cart.id)).then((res) => {
                        setCart(res.cart)
                    });
                }
            }
        );
    }, []);

    const itemQuantity = () => {
        if (cart.cartItems) {
            let items = Object.values(cart.cartItems);
            let count = items.length;
            if (count === 1) {
                return (
                    <div>
                        <h1>1 item in your cart</h1>
                        <CartItem cartItem={items[0]} />
                    </div>
                )
             } else {
                 return (
                    <div>
                        <h1>{count} items in your cart</h1>
                        {
                            items.map((cartItem, idx) => {
                                <CartItem key={idx} cartItem={cartItem} />
                            })
                        }
                    </div>
                 )
             } 
        } else {
            return <h1>Your cart is empty</h1>
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