import React, { useState } from 'react';
import { fetchCartItem, updateCartItem, removeCartItem } from '../../actions/cart_item_actions';

const CartItem = () => {
    const [cartItem, setCartItem] = useState(initialState)

    useEffect(() => {
        fetchCartItem();
    }, [cartItem])
    
    return (
        <div>

        </div>
    );
};

export default CartItem;