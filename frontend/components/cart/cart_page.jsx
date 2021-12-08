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
            let count = Object.values(cart.cartItems).length;
            if (count === 1) {
                return <h1>1 item in your cart</h1>
             } else {
                 return <h1>{count} items in your cart</h1>
             } 
        }
    }

    return (
        <div>
            <div>
                {   
                    cart.cartItems ?
                    <div>
                        {itemQuantity()}
                        <button>Keep shopping</button>
                        <CartItem />
                    </div> :
                    <div>Your cart is empty.</div>
                }
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default CartPage;