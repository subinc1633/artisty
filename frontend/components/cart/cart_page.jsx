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

    return (
        <>
            <div className="cart-page-container">
                <Cart cart={cart} cartItems={cartItems} />
            </div>
            <br/><br/>
            <p className="carbon"><IoLeaf /> Artisty offsets carbon emissions from every delivery</p>
            <br/><br/>
            <h3>You may also like</h3>
            <div className="shop-recommendations">
                {
                    items ? Object.values(items).slice(11, 15).map(item => (
                        <div className="recommended-items">
                            <CategoryShowItem key={item.id} item={item} />
                            <button onClick={() => cartItems.push(item)}>Add to cart</button>
                        </div>
                    )) : null
                }
            </div>
        </>
    );
};

export default CartPage;