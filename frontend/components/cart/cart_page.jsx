import React, { useEffect, useState } from 'react';
import CartItem from './cart_item';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchCart } from '../../actions/cart_actions';

const CartPage = () => {
    const [total, setTotal] = useState(0);
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.id);

    useEffect(() => {
        fetchCart(userId, )
    })
    
    // const userId = useSelector(state => state.session.id);
    // const cart = useSelector(state => {
    //     debugger
    //     Object.values(state.entities.users[userId].cart)
    // });

    return (
        <div>
            <div>
                {
                    // Object.values(cart.cartItems).length === 0 ?
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