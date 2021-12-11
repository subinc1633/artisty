import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './cart';
import CategoryShowItem from '../categories/category_show_item';
import { fetchUser } from '../../actions/user_actions';
import { fetchCart } from '../../actions/cart_actions';
import { fetchItems } from '../../actions/item_actions';
import { fetchCartItems } from '../../actions/cart_item_actions';
import { IoLeaf } from 'react-icons/io5';

const CartPage = () => {
    const [cart, setCart] = useState('');
    const [cartItems, setCartItems] = useState('');
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [items, setItems] = useState('');
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
                            setCartItems(cartItems);
                        })
                    );
                }
            }
        );

        dispatch(fetchItems())
        .then(res => setItems(res.items));
    }, []);

    useEffect(() => {
        setNum2(Math.floor(Math.random() * Object.values(items).length + 5));
    }, [items]);

    useEffect(() => {
        setNum1(num2 - 5);
    }, [num2]);

    return (
        <>
            <div className="cart-items-shopping">
                { cartItems.length === 1 ? 
                    <h1>{cartItems.length} item in your cart</h1> :
                    <h1>{cartItems.length} items in your cart</h1>
                }
                <button>Keep shopping</button>
            </div>
            <div className="cart-page-container">
                <Cart cart={cart} cartItems={cartItems} />
            </div>
            <br/><br/>
            <p className="carbon"><IoLeaf /> Artisty offsets carbon emissions from every delivery</p>
            <br/><br/>
        </>
    );
};

export default CartPage;