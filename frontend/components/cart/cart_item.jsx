import React, { useEffect, useState } from 'react';
import { fetchItem } from '../../actions/item_actions';
import { updateCartItem, deleteCartItem } from '../../actions/cart_item_actions';
import { useDispatch } from 'react-redux';

const CartItem = ({ cartItem }) => {
    const [item, setItem] = useState({});
    const [product, setProduct] = useState(cartItem);
    const [quantity, setQuantity] = useState(cartItem.quantity);
    const dispatch = useDispatch();

    useEffect(() => {
        setProduct({
            id: cartItem.id,
            cart_id: cartItem.cartId,
            item_id: cartItem.itemId,
            quantity: parseInt(quantity)
        })
    }, [quantity])

    useEffect(() => {
        dispatch(fetchItem(cartItem.itemId))
            .then(res => setItem(res.item));
    }, [product]);

    const handleClick = e => {
        dispatch(deleteCartItem(cartItem.cartId, cartItem.id))
            .then(() => setProduct({}));
    }

    const handleChange = e => {
        setQuantity(e.target.value);
        dispatch(updateCartItem(cartItem.cartId, product));
    }

    return (
        <li>
            { item ? 
                <div>
                    <p>Shop Name</p>
                    <img src=""/>
                    <p>{item.title}</p>
                    <p>option</p>
                    <p>edit</p>
                    <button onClick={handleClick}>remove</button>
                    <form>
                        <select name="quantity" value={quantity} onChange={handleChange}>
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
                    <p>${(item.price * quantity * 100 / 100).toFixed(2)}</p>
                </div>
                : null }
        </li>
    );
};

export default CartItem;