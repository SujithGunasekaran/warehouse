import React from 'react';
import { connect } from 'react-redux';
import PaymentCartAccept from '../component/PaymentCardAccept';
import '../css/shippingPriceSummary.css';


function ShippingPriceSummary(props){

    const { productCheckoutList } = props.productListReducer;

    var deliveryCharge = 0;
    var productPrice=0;
    var finalPrice=0;
    var productQuantity=0;
    var savedPrice = 0;
    var gstRate = 28;
    var noOfProduct;


    productCheckoutList.productInfoList.map((listInfo)=>{
        noOfProduct = listInfo.length;
    })

    return(
        <div>
            <div className="summary-price-component-main">
                <div className="summary-price-component-heading">PIRCE DETAILS</div>
                {/* <hr className="summary-price-component-hr"/> */}
                <hr/>
                <div className="summary-price-component-comman-tag-display">
                <div className="summary-price-component-comman-tag-name">Price ( {noOfProduct} {noOfProduct > 1 ? 'items' : 'item'} )</div>
                    {
                        productCheckoutList.productInfoList.map((listInfo)=>{
                            return(
                                listInfo.map((info) =>{
                                    if(info.productType === 'All TVs' || info.productType === 'Bluetooth'){
                                        gstRate = 18;
                                    }
                                    else{
                                        gstRate = 28;
                                    }
                                    Number(info.productPrice)*info.productQuantity < 5000 ? deliveryCharge = 120 : deliveryCharge = 0;
                                                                            
                                    productPrice = productPrice + ( info.productPrice*info.productQuantity ); 

                                    savedPrice = savedPrice + ( ( info.productActualPrice*info.productQuantity ) - ( info.productPrice*info.productQuantity ) );

                                    productQuantity = productQuantity + Number(info.productQuantity);

                                    finalPrice = finalPrice + ( Math.round( ( info.productPrice*info.productQuantity )*gstRate/100 ) + ( info.productPrice*info.productQuantity ) );
                                })
                            )
                        })
                    }
                <div className="summary-price-component-comman-value">&#x20B9; {Number(productPrice).toLocaleString('en-IN')}</div>
                </div>
                <div className="summary-price-component-comman-tag-display">
                    <div className="summary-price-component-comman-tag-name">{noOfProduct > 1 ? 'Total Quantity' : 'product Quantity' }</div>
                    <div className="summary-price-component-comman-value">{productQuantity}</div>
                </div>
                <div className="summary-price-component-comman-tag-display">
                    <div className="summary-price-component-comman-tag-name">Delivery Charges</div>
                    <div className="summary-price-component-comman-value">&#x20B9; {deliveryCharge}</div>
                </div>
                <hr className="summary-price-component-hr-dashed"/>
                <div className="summary-price-component-comman-tag-display">
                    <div className="summary-price-component-comman-tag-name">TOTAL PAYABLE</div>
                    <div className="summary-price-component-comman-value">&#x20B9;  { (finalPrice).toLocaleString('en-IN') }</div>
                </div>
                {
                    savedPrice > 0 ?
                    <div>
                        {/* <hr className="summary-price-component-hr"/>  */}
                        <hr/>
                        <div className="summary-price-component-save-price">You Save Total of &#x20B9; {Number(savedPrice).toLocaleString('en-IN')}</div>
                    </div> : null
                }
                <hr/>
                <div className="cart-component-secure-payment-name">Total Payable includes GST tax rate and Delivery Charges</div>
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
        productListReducer : state.productListReducer
    }
}


export default connect(mapStateToProps) (ShippingPriceSummary)