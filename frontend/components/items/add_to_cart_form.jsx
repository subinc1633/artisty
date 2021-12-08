import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import OptionValueItem from './option_value_item';
import { IoChevronDownSharp } from 'react-icons/io5';
import { createCartItem, updateCartItem } from '../../actions/cart_item_actions';
import { fetchCart } from '../../actions/cart_actions';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';

const AddToCartForm = ({ item, itemId, userId, createCartItem, updateCartItem, fetchUser, fetchCart, openModal }) => {
    const [product, setProduct] = useState({});
    const [option, setOption] = useState('');
    const [active, setActive] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState({});

    useEffect(() => {
        if (userId) {
            fetchUser(userId).then(
                (res) => {
                    let cart = Object.values(res.user.cart)[0];
                    if (cart) {
                        fetchCart(userId, cart.id).then((res) => {
                            setCart(res.cart);
                        });
                    }
                }
            );
        };
    }, [product]);

    const toggleDescription = () => {
        active ? setActive(false) : setActive(true);
    };

    const handleChange = e => {
        setQuantity(e.target.value);
        setProduct({
            cart_id: cart.id,
            item_id: itemId,
            quantity: parseInt(e.target.value)
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        let updatedProduct;
        let newProduct;
        let cartItems;

        if (cart.cartItems) {
            cartItems = Object.values(cart.cartItems);
        }

        const hasCartItem = (obj) => {
            obj.some(item => item.itemId === itemId)
        }

        const filteredCartItems = (obj) => {
            return obj.filter(cartItem => cartItem.itemId === itemId);
        }

        if (userId) {
            if (cartItems && product && hasCartItem(cartItems)) {
                let productId = filteredCartItems(cartItems)[0].id;
                
                let total = filteredCartItems(cartItems).reduce((acc, item) => {
                    return acc + item.quantity;
                }, product.quantity);
                
                updatedProduct = {
                    id: productId,
                    cart_id: cart.id,
                    item_id: itemId,
                    quantity: total
                }
                
                updateCartItem(cart.id, updatedProduct).then(
                    () => setProduct(updatedProduct)
                );
            } else {
                newProduct = {
                    cart_id: cart.id,
                    item_id: itemId,
                    quantity: quantity
                }
    
                createCartItem(cart.id, newProduct).then(
                    () => setProduct(newProduct)
                );
            }
        } else {
            openModal('sign in');
        }
    };

    return (
        <div className='right-item-column'>
            {item.shop_id}
            <h1>{item.title}</h1> 
            { option && item.options ? 
                <span className='item-show-price'>${(Object.values(item.options)[0][option] * quantity * 100 / 100).toFixed(2)}</span>
                :
                <span className='item-show-price'>${(item.price * quantity * 100 / 100).toFixed(2)}</span>
            }
            <br/>
            <form className="request-form" onSubmit={handleSubmit}>
                { item.options &&
                    Object.entries(item.options).map(([key, val], idx) => (
                    <label key={idx}>{key}<br/>
                        <select className="item-select" name={key} value={option} onChange={(e) => setOption(e.target.value)}>
                            <option value="Select an option">Select an option</option>
                            <OptionValueItem val={val} />
                        </select>
                    </label>))
                }<br/>
                <label>Quantity<br/>
                    <select id="quantity" name="quantity" value={quantity} onChange={handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </label>
                <br/><br/>
                <button>Add to cart</button><br/>
            </form>
            <button className='item-desc-toggler' onClick={toggleDescription}>Description <IoChevronDownSharp className='down-arrow' /></button>
            {active && <div className='item-desc'>{item.description}</div>}
        </div>
    )
}

const mSTP = state => ({
    userId: state.session.id
});

const mDTP = dispatch => ({
    createCartItem: (cartId, cartItem) => dispatch(createCartItem(cartId, cartItem)),
    updateCartItem: (cartId, cartItem) => dispatch(updateCartItem(cartId, cartItem)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchCart: (userId, cartId) => dispatch(fetchCart(userId, cartId)),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(AddToCartForm);