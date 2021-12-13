import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Payment = ({ total, numItems }) => {
    const [showModal, setShowModal] = useState(false);
    const [value, setValue] = useState("card")

    const toggleModal = () => {
        if (showModal) {
            setShowModal(false);
        } else {
            setShowModal(true);
        }
    };

    return (
    <div className="payment">
        <h3>How you'll pay</h3>
        <div className="payment-method">
            <input type="radio" name="payment" id="card" onClick={() => setValue("card")} checked={value === "card"} />
            <label htmlFor="card">
                <img src="/mastercard.png" alt="mastercard logo" width="48" />
                <img src="/visa.png" alt="visa logo" width="48" />
                <img src="/american-express.png" alt="american express logo" width="48" />
                <img src="/discover.png" alt="discover logo" width="48" />
            </label>
        </div>
            <br/>
        <div className="payment-method">
            <input type="radio" name="payment" id="paypal" onClick={() => setValue("paypal")} checked={value === "paypal"} />
            <label htmlFor="paypal">
                <img className="paypal" src="/paypal.png" alt="paypal logo" width="42" height="29" />
            </label>
        </div>
            <br/>
        <div className="payment-method">
            <input type="radio" name="payment" id="klarna" onClick={() => setValue("klarna")} checked={value === "klarna"} />
            <label className="klarna-payment" htmlFor="klarna">
                <img className="klarna" src="/klarna.png" alt="klarna logo" width="44" height="31" />
                <span>4 interest free installments</span>
            </label>
        </div>
        <br/><br/>
        <div className="total-fee">
            <div className="payment-items-total">
                <span>Item(s) total</span>
                <span>${(total * 100 / 100).toFixed(2)}</span>
            </div>
            <div className="payment-items-total">
                <span>Shipping</span>
                <span className="free-shipping">FREE</span>
            </div>
            <span className="shipping-destination">(To <u>United States</u>)</span>
            <hr className="cart-item-divider" />
            <div className="payment-items-total total-amount">
                { numItems === 1 ? <span>Total ({numItems} item)</span> : <span>Total ({numItems} items)</span> }
                <span>${(total * 100 / 100).toFixed(2)}</span>
            </div>
        </div><br/>
        <button className="checkout-button" onClick={() => toggleModal()}>Proceed to checkout</button>
        { showModal ?
            <div className="modal-background" onClick={() => toggleModal()}>
                <div className="cart-modal-content" onClick={(e) => e.stopPropagation()}>
                    <span className="cart-modal-close" onClick={() => toggleModal()}>×</span>
                    <h3>Thank you for your purchase!</h3><br/>
                    You will receive an email of your receipt shortly.<br/><br/><br/>
                    <Link to="/"><button className="shopping" onClick={() => toggleModal()}>Continue shopping</button></Link>
                </div>
            </div>
        : null}
    </div>)
};

export default Payment;