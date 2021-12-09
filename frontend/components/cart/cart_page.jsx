import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CartItem from './cart_item';
import { fetchCart } from '../../actions/cart_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchCartItems } from '../../actions/cart_item_actions';

const CartPage = () => {
    const [cart, setCart] = useState('');
    const [items, setItems] = useState('');
    const [state, setState] = useState({
        present: true
    })
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.id);
    
    useEffect(() => {
        dispatch(fetchUser(userId))
        .then(
            (res) => {
                let cart = Object.values(res.user.cart)[0];
                if (cart) {
                    dispatch(fetchCart(userId, cart.id))
                    .then((res) => setCart(res.cart))
                    .then (
                        dispatch(fetchCartItems(cart.id)).then((res) => {
                            let cartItems = Object.values(res.cartItems);
                            setItems(cartItems);
                        })
                    );
                }
            }
        )
    }, []);

    // const itemQuantity = () => {
    //     if (items) {
    //         switch (items.length) {
    //             case 0:
    //                 return <h1>Your cart is empty.</h1>
    //             case 1:
    //                 return (
    //                     <div>
    //                         <h1>{items.length} item in your cart</h1>
    //                         <CartItem cartItem={items[0]} />
    //                     </div>
    //                 )
    //             default:
    //                 return (
    //                     <div>
    //                         <h1>{items.length} items in your cart</h1>
    //                         <ul>
    //                             {
    //                                 items.map((cartItem, idx) => (
    //                                     <CartItem key={idx} cartItem={cartItem} />
    //                                 ))
    //                             }
    //                         </ul>
    //                     </div>
    //                 );
    //         }
    //     } else {
    //         return <h1>Your cart is empty.</h1>
    //     }
    // }

    const allCartItems = [];

    if (items) {
        for (let [key, cartItem] of Object.entries(items)) {
            allCartItems.unshift(<CartItem
                key={key}
                cartItem={cartItem}
            />)
        }
    }

    return (
        <div>
            { allCartItems.length === 0 ?
                <h1>Your cart is empty.</h1>
            : allCartItems }
            <div>
                <h3>Total</h3>
            </div>
        </div>
    );
};

export default CartPage;