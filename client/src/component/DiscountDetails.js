import React from 'react';
import '../css/discountDetails.css';

function DiscountDetails()
{
    return(
        <div className="discount-main">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="discount-icon-display">
                        <div className="discount-icon">
                            <svg focusable="false" viewBox="0 0 24 24" role="presentation">
                                <g strokeWidth="1.5" fill="none" fillRule="evenodd">
                                    <path d="M6.5 3.25l12 6" stroke="#00badb"></path>
                                    <path stroke="#1e2d7d" d="M23 7l-10 5L1 6M13 12v11"></path>
                                    <path stroke="#1e2d7d" strokeLinecap="square" d="M23 7v10l-10 6-12-6V6l10-5z"></path>
                                </g>
                            </svg>
                        </div>
                        <div className="discount-info-display">
                            <div className="discount-icon-heading">Free delivery for &#x20B9;6000+ orders</div>
                            <div className="discount-icon-para">We deliver in 48 hours max!</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                <div className="discount-icon-display">
                    <div className="discount-icon">
                        <svg focusable="false" viewBox="0 0 23 24" role="presentation">
                            <g transform="translate(1 1)" strokeWidth="1.5" fill="none" fillRule="evenodd">
                                <path stroke="#00badb" d="M8 4h8v7"></path>
                                <path stroke="#00badb" strokeLinecap="square" d="M11 7L8 4l3-3"></path>
                                <circle stroke="#1e2d7d" strokeLinecap="square" cx="6" cy="20" r="2"></circle>
                                <circle stroke="#1e2d7d" strokeLinecap="square" cx="18" cy="20" r="2"></circle>
                                <path stroke="#1e2d7d" strokeLinecap="square" d="M21 5l-2 10H5L3 0H0"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="discount-info-display">
                        <div className="discount-icon-heading">Satisfied or refunded</div>
                        <div className="discount-icon-para">Free returns within 14 days</div>
                    </div>
                </div>
            </div>
                <div className="col-md-3 col-sm-6">
                    <div className="discount-icon-display">
                        <div className="discount-icon">
                            <svg focusable="false" viewBox="0 0 24 24" role="presentation">
                                <g strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square" width="5px" height="5px">
                                    <path d="M10 17H4c-1.7 0-3 1.3-3 3v3h12v-3c0-1.7-1.3-3-3-3zM7 14c-1.7 0-3-1.3-3-3v-1c0-1.7 1.3-3 3-3s3 1.3 3 3v1c0 1.7-1.3 3-3 3z" stroke="#1e2d7d"></path>
                                    <path stroke="#00badb" d="M13 1v10l4-3h6V1z"></path>
                                </g>
                            </svg>
                        </div>
                        <div className="discount-info-display">
                            <div className="discount-icon-heading">We are available 24/7</div>
                            <div className="discount-icon-para">Contact us by chat, mail, phone</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                <div className="discount-icon-display">
                    <div className="discount-icon">
                        <svg focusable="false" viewBox="0 0 24 24" role="presentation">
                            <g strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="square">
                                <path d="M1 5h22M1 9h22M9 17H3c-1.105 0-2-.895-2-2V3c0-1.105.895-2 2-2h18c1.105 0 2 .895 2 2v10M5 13h5" stroke="#1e2d7d"></path>
                                <path stroke="#00badb" d="M13 16h8v7h-8zM15 16v-2c0-1.1.9-2 2-2s2 .9 2 2v2M17 19v1"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="discount-info-display">
                        <div className="discount-icon-heading">100% Secure payments</div>
                        <div className="discount-icon-para">Visa, Mastercard, Amex, PayPal</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}


export default DiscountDetails