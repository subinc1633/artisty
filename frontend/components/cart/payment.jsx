import React from 'react';
import mastercard from '../../../app/assets/images/mastercard.png';
import visa from '../../../app/assets/images/visa.png';
import amex from '../../../app/assets/images/american-express.png';
import discover from '../../../app/assets/images/discover.png';
import paypal from '../../../app/assets/images/paypal.png';
import klarna from '../../../app/assets/images/klarna.png';

const Payment = ({ total, numItems }) => (
    <div className="payment">
        <h3>How you'll pay</h3>
        <div className="payment-method">
            <input type="radio" name="payment" id="card" />
            <label htmlFor="card">
                <img src={mastercard} alt="mastercard logo" width="48" />
                <img src={visa} alt="visa logo" width="48" />
                <img src={amex} alt="american express logo" width="48" />
                <img src={discover} alt="discover logo" width="48" />
            </label>
        </div>
            <br/>
        <div className="payment-method">
            <input type="radio" name="payment" id="paypal" />
            <label htmlFor="paypal">
                <img className="paypal" src={paypal} alt="paypal logo" width="42" height="29" />
            </label>
        </div>
            <br/>
        <div className="payment-method">
            <input type="radio" name="payment" id="klarna"  />
            <label className="klarna-payment" htmlFor="klarna">
                <img className="klarna" src={klarna} alt="klarna logo" width="44" height="31" />
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
        <button className="checkout-button">Proceed to checkout</button>
    </div>
);

export default Payment;