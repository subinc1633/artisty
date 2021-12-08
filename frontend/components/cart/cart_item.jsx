import React, { useEffect, useState } from 'react';
import { fetchItem } from '../../actions/item_actions';
import { fetchCartItem, updateCartItem, removeCartItem } from '../../actions/cart_item_actions';
import { useDispatch } from 'react-redux';

const CartItem = ({ cartItem }) => {
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchItem(cartItem.itemId))
            .then(res => setItem(res.item))
    }, []);

    return (
        <div>
            { item ? 
                <div>
                    <p>Shop Name</p>
                    <img src=""/>
                    <p>{item.title}</p>
                    <p>option</p>
                    <p>edit</p>
                    <button>remove</button>
                    <form>
                        <select name="quantity">
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                        </select>
                    </form>
                    <p>${(item.price * 100 / 100).toFixed(2)}</p>
                </div>
                : null }
        </div>
    );
};

export default CartItem;