import React from 'react';
import '../css/paymentComponent.css'

function PaymentComponent(props){

    const { handlePaymentInputChange, selectPaymentName, showPaymentDetails, showPaymentButton, handlePaymentCardInputChange,
        paymentCardName, paymentCardNumber, paymentCardDate, paymentCardCvv, paymentCardNameError, paymentCardNumberError,
        paymentCardDateError, paymentCardCvvError } = props;

    return(
        <div>
            <div className="payment-component-main">
                <div className="payment-component-heading">Payment Method</div>
                <hr/>
                <div className={ selectPaymentName !== 'Paypal' ? 'payment-component-radio' : 'payment-component-radio-checked'}>
                    <input className="form-check-input payment-component-radio-btn" type="radio" onClick={handlePaymentInputChange} name="exampleRadios" id="Paypal" value="option1"/>
                    <label className="form-check-label payment-component-radio-label-main" htmlFor="exampleRadios1">
                        PayPal<br/>
                        <span className="payment-component-radio-label-sub">Safe Payment online Credit card needed, Paypal Account needed</span>
                    </label><br/>

                   
                </div>
                <div className={selectPaymentName !== 'Debit' ? 'payment-component-radio' : 'payment-component-radio-checked'}>
                <   input className="form-check-input payment-component-radio-btn" type="radio" onClick={handlePaymentInputChange} name="exampleRadios" id="Debit" value="option1"/>
                    <label className="form-check-label payment-component-radio-label-main" htmlFor="exampleRadios1">
                        Debit /Credit Card<br/>
                        <span className="payment-component-radio-label-sub">Safe Payment online Credit card needed, Debit Account needed</span>
                    </label>
                </div>
            </div>
            {
                showPaymentDetails ? 
                <div className="payment-component-main">
                    <div className="payment-component-heading">Billing Details</div>
                    <hr/>
                    <form>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="payment-component-form-label">Cardholder's Name</div>
                                <input 
                                    type="text" 
                                    className="payment-component-form-input-field" 
                                    name="paymentCardName"
                                    value={paymentCardName}
                                    onChange={handlePaymentCardInputChange}
                                />
                                {
                                    paymentCardNameError !== '' ?
                                    <div className="payment-component-form-input-error">{paymentCardNameError}</div> :null
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="payment-component-form-label">Card Number</div>
                                <input 
                                    type="text" 
                                    className={paymentCardNumberError === '' ? 'payment-component-form-input-field' : 'payment-component-form-input-field payment-component-form-input-field-error'}
                                    name="paymentCardNumber"
                                    maxLength='19'
                                    placeholder="0000 0000 0000 0000"
                                    value={paymentCardNumber}
                                    onChange={handlePaymentCardInputChange}
                                />
                                {
                                    paymentCardNumberError !== '' ?
                                    <div className="payment-component-form-input-error">{paymentCardNumberError}</div> :null
                                }
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-6">
                                <div className="payment-component-form-label">Valid Through</div>
                                <input 
                                    type="text" 
                                    placeholder="MM / YYYY"
                                    className={paymentCardDateError === '' ? 'payment-component-form-input-field' : 'payment-component-form-input-field payment-component-form-input-field-error'}
                                    name="paymentCardDate"
                                    maxLength='9'
                                    value={paymentCardDate}
                                    onChange={handlePaymentCardInputChange}
                                />
                                {
                                    paymentCardDateError !== '' ?
                                    <div className="payment-component-form-input-error">{paymentCardDateError}</div> :null
                                }
                            </div>
                            <div className="col-md-6">
                                <div className="payment-component-form-label">CVV</div>
                                <input 
                                    placeholder="000"
                                    maxLength='3'
                                    type="password" 
                                    className="payment-component-form-input-field" 
                                    name="paymentCardCvv"
                                    value={paymentCardCvv}
                                    onChange={handlePaymentCardInputChange}
                                />
                                {
                                    paymentCardCvvError !== '' ?
                                    <div className="payment-component-form-input-error">{paymentCardCvvError}</div> :null
                                }
                            </div>
                        </div>
                    </form>
                </div>
                : null
            }
            {
                showPaymentButton ? 
                <button className="payment-component-pay-button">Pay</button> : null
            }
        </div>
    )
}

export default PaymentComponent