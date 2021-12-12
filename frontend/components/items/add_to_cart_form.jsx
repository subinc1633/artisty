import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import OptionValueItem from './option_value_item';
import { IoChevronDownSharp, IoCheckmarkSharp } from 'react-icons/io5';
import { createCartItem, updateCartItem } from '../../actions/cart_item_actions';
import { fetchCart } from '../../actions/cart_actions';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import { useHistory } from 'react-router-dom';

const AddToCartForm = ({ item, itemId, userId, shop, createCartItem, updateCartItem, fetchUser, fetchCart, openModal }) => {
    const [product, setProduct] = useState(null);
    const [option, setOption] = useState('');
    const [active, setActive] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(item.price);
    const [cart, setCart] = useState({});
    const history = useHistory();

    let shopUrl;
    if (shop) shopUrl = `https://www.instagram.com/${shop.igHandle}/`;

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
    }, [userId, product]);

    useEffect(() => {
        if (option && item.options) {
            if (option === 'Select an option') {
                setPrice === item.price;
            } else {
                setPrice(Object.values(item.options)[0][option] * quantity * 100 / 100);
            }
        }
    }, [option]);

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

    const handleOptionChange = e => {
        setOption(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        let updatedProduct;
        let newProduct;
        let cartItems;

        if (option && option === 'Select an option') {
            return <div></div>
        }

        if (cart.cartItems) {
            cartItems = Object.values(cart.cartItems);
        }

        const hasCartItem = (obj) => {
            return obj.some(cartItem => cartItem.itemId === itemId);
        };

        const filteredCartItems = (obj) => {
            return obj.filter(cartItem => cartItem.itemId === itemId);
        };

        if (userId) {
            if ((cart.cartItems && hasCartItem(cartItems))) {
                let productId = filteredCartItems(cartItems)[0].id;

                let total = filteredCartItems(cartItems)[0].quantity + parseInt(quantity);
                
                updatedProduct = {
                    id: productId,
                    cart_id: cart.id,
                    item_id: itemId,
                    quantity: total,
                    price: parseFloat(item.price),
                    option: option
                };
                
                updateCartItem(cart.id, updatedProduct).then(
                    () => setProduct(updatedProduct)
                );
            } else {
                newProduct = {
                    cart_id: cart.id,
                    item_id: itemId,
                    quantity: quantity,
                    price: item.price,
                    option: option
                };
    
                createCartItem(cart.id, newProduct).then(
                    () => setProduct(newProduct)
                );
            }
            history.push('/cart');
        } else {
            openModal('sign in');
        }
    };

    return (
        <div className="right-item-column">
            { shop ? <p className="item-show-shop"><a href={shopUrl} target="_blank">{shop.igHandle}</a></p> : null }<br/>
            <h1>{item.title}</h1> 
            <div className="price-in-stock">
                { option && item.options ? 
                    <span className="item-show-price">${(Object.values(item.options)[0][option] * quantity * 100 / 100).toFixed(2)}</span>
                    :
                    <span className="item-show-price">${(item.price * 100 / 100).toFixed(2)}</span>
                }
                <span className="in-stock"><IoCheckmarkSharp className="item-checkmark"/> In stock</span>
            </div>
            <br/>
            <form className="request-form" onSubmit={handleSubmit}>
                { item.options &&
                    Object.entries(item.options).map(([key, val], idx) => (
                    <label key={idx}>{key}<br/>
                        <select className="item-select" name={key} value={option} onChange={handleOptionChange}>
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
            <button className="item-desc-toggler" onClick={toggleDescription}>Description <IoChevronDownSharp className="down-arrow" /></button>
            {active && <div className="item-desc">{item.description}</div>}
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