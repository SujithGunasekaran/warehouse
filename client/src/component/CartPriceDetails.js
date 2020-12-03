import React from 'react';
import { connect } from 'react-redux';
import PaymentCartAccept from '../component/PaymentCardAccept';
import { Link } from 'react-router-dom';

function CartPriceDetails(props){


    var gstRate = 28;
    let price = 0;


    props.CartReducer.cartData.map((productInfo) => {
        if(productInfo.productType === 'All TVs' || productInfo.productType === 'Bluetooth'){
            gstRate = 18;
        }
        else{
            gstRate = 28;
        }
        price = price + (((((productInfo.productPrice*productInfo.productQuantity)*gstRate)/100)+(productInfo.productPrice*productInfo.productQuantity)))
    })
    
    return(
        <div>
            <div className="cart-component-price-container">
                <div className="cart-component-price-display">
                    <div className="cart-component-price-name">Total Price</div>
                    <div className="cart-component-price-name-value">&#x20B9; {Math.round(Number(price)).toLocaleString('en-IN')}</div>
                </div>
                <hr/>
                <div className="cart-component-price-para">Tax included. Shipping calculated at checkout</div>
                <Link to='/Shipping'><button className="cart-component-price-checkout" onClick={props.handleCheckOut}>Checkout</button></Link>
            </div>
            <div className="cart-component-secure-payment-display" style={{display:'flex'}}>
                <svg focusable="false" className="icon icon--lock-2 cart-component-secure-payment-icon" viewBox="0 0 12 15" role="presentation">
                    <g stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="square">
                        <path d="M6 1C4.32 1 3 2.375 3 4.125V6h6V4.125C9 2.375 7.68 1 6 1zM1 6h10v8H1z"></path>
                    </g>
                </svg>
                <div className="cart-component-secure-payment-name">100% Secure Payments</div>
            </div>
            <PaymentCartAccept />
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        CartReducer : state.CartReducer
    }
}

export default connect(mapStateToProps)(CartPriceDetails)