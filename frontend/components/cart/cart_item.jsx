import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchItem } from '../../actions/item_actions';
import { fetchCartItem, updateCartItem, deleteCartItem } from '../../actions/cart_item_actions';
import { useDispatch } from 'react-redux';
import { fetchShop } from '../../actions/shop_actions';

const CartItem = ({ cartItem, removeCartItem }) => {
    const [item, setItem] = useState(null);
    const [shop, setShop] = useState(null);
    const [product, setProduct] = useState(cartItem);
    const [quantity, setQuantity] = useState(cartItem.quantity);
    const dispatch = useDispatch();

    let itemTotal = cartItem.price * quantity;

    useEffect(() => {
        dispatch(fetchItem(cartItem.itemId))
            .then(res => setItem(res.item));

        dispatch(fetchCartItem(cartItem.cartId, cartItem.id))
            .then(res => setProduct(res.cartItem));
    }, []);

    useEffect(() => {
        if (item) {
            dispatch(fetchShop(item.shopId))
            .then(res => setShop(res.shop))
        }
    }, [item])

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
            { item && product && shop ? 
                <div className="cart-item">
                    <p className="cart-shop-name">{shop.igHandle}</p><br/>
                    <Link to={`/items/${item.id}`}><img src={item.photoUrl[0].url} /></Link>
                    <div className="cart-item-info">
                        <Link to={`/items/${item.id}`}><p className="cart-item-title">{item.title}</p></Link>
                        <p className="cart-item-option">{cartItem.option}</p>
                        <button onClick={handleClick}>Remove</button>
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
                    <br/><br/>
                    <hr className="cart-item-divider" />
                </div>
                : null }
        </li>
    );
};

export default CartItem;