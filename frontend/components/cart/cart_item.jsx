import React, { useEffect, useState } from 'react';
import { fetchItem } from '../../actions/item_actions';
import { fetchCartItem, updateCartItem, deleteCartItem } from '../../actions/cart_item_actions';
import { useDispatch } from 'react-redux';

const CartItem = ({ cartItem, removeCartItem }) => {
    const [item, setItem] = useState({});
    const [product, setProduct] = useState(cartItem);
    const [quantity, setQuantity] = useState(cartItem.quantity);
    const dispatch = useDispatch();
    let itemTotal = item.price * quantity;

    useEffect(() => {
        dispatch(fetchItem(cartItem.itemId))
            .then(res => setItem(res.item));

        dispatch(fetchCartItem(cartItem.cartId, cartItem.id))
            .then(res => {
                setProduct(res.cartItem)
            });
    }, []);

    const handleClick = (e) => {
        removeCartItem(cartItem.id);
        dispatch(deleteCartItem(cartItem.cartId, cartItem.id));
    }

    const handleChange = e => {
        let num = parseInt(e.target.value);
        setQuantity(num);
        let updated = {
            id: product.id,
            cart_id: product.cartId,
            item_id: product.itemId,
            quantity: num,
            price: parseInt(item.price),
            option: product.option
        };
        
        dispatch(updateCartItem(cartItem.cartId, updated));
    }

    return (
        <li>
            { item && product ? 
                <div>
                    <p>Shop Name</p>
                    <img src=""/>
                    <p>{item.title}</p>
                    <p>{cartItem.option}</p>
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
                    <p>${(itemTotal * 100 / 100).toFixed(2)}</p>
                    {
                        Math.round(itemTotal) !== Math.round(item.price) ?
                            <p>(${(item.price * 100 / 100).toFixed(2)} each)</p>
                        : null
                    }
                </div>
                : null }
        </li>
    );
};

export default CartItem;