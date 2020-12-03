import React, { Component } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import '../css/faq.css';
import { Link } from 'react-router-dom';
import DiscountDetails from '../component/DiscountDetails';



class Faq extends Component
{

    componentDidMount()
    {
        window.scrollTo(0,0)

        var accordian = document.getElementsByClassName("faq-accordian");
        var i;
        for(i=0;i<accordian.length;i++)
        {
            accordian[i].addEventListener("click",function(){
                this.classList.toggle("faq-accordian-active");
                var panel = this.nextElementSibling;
                if(panel.style.maxHeight){
                    panel.style.maxHeight = null;
                }
                else{
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                }
            })
        }
    }

    render()
    {

        document.title = "Warehouse | FAQ"

        return(
            <div className="main-main-div">
                <div className="header-sticky-display">
                    <Header/>
                </div>
                {/* <Header /> */}
                <div className="faq-page-main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="faq-page-heading">FAQ</div>
                                <div className="faq-page-subheading">Theme Info</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <button className="faq-accordian">How to add FAQ to your store?</button>
                                <div className="faq-accordian-panel">
                                    You can add a similar FAQ page to your store using Warehouse theme built-in FAQ page template. For more information,
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="faq-page-subheading">Shipping</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <button className="faq-accordian">Do you ship overseas?</button>
                                <div className="faq-accordian-panel">
                                    Yes, we ship all over the world. Shipping costs will apply, and will be added at checkout. We run discounts and promotions all year, so stay tuned for exclusive deals.
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <button className="faq-accordian">How long will it take to get my order?</button>
                                <div className="faq-accordian-panel">
                                    It depends on where you are. Orders processed here will take 5-7 business days to arrive. Overseas deliveries can take anywhere from 7-16 days. Delivery details will be provided in your confirmation email.
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <button className="faq-accordian">Whap Shipping carriers do you use?</button>
                                <div className="faq-accordian-panel">
                                    We use all major carriers, and local courier partners. You’ll be asked to select a delivery method during checkout.
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="faq-page-subheading">Product</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <button className="faq-accordian">Can I return my product?</button>
                                <div className="faq-accordian-panel">
                                    We always aim for make sure our customers love our products, but if you do need to return an order, we’re happy to help. Just email us directly and we’ll take you through the process.
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <button className="faq-accordian">Can I get my product personalized?</button>
                                <div className="faq-accordian-panel">
                                    It depends on the creator and the product. All options are outlined on the product page, so look out for customization options there.
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="faq-page-subheading">Account</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <button className="faq-accordian">Do i necessarliy have to create an account to order?</button>
                                <div className="faq-accordian-panel">
                                    Yes, it is mandatory to create account, It will allow you to find your history, edit your addresses and track your parcel online faster. You will also be notified of new products and special events.
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <button className="faq-accordian">Do you save our bank details?</button>
                                <div className="faq-accordian-panel">
                                    Absolutely not! We never have access to this information. It is the company Stripe that deals with it. Your data is completely safe.
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <div className="faq-page-subheading">Any Questions?</div>
                                <div class="faq-page-card-body2">
                                    If we still haven't answered your question, you can contact us below and we will get back to you as soon as possible. Our support team is always happy to help!
                                </div>
                                <div className="row">
                                    <div className="col-md-6 p-md-0">
                                        <div className="faq-page-question-container">
                                            <div className="faq-page-question-icon">
                                                <svg focusable="false" class="icon icon--bi-phone" viewBox="0 0 24 24" role="presentation">
                                                    <g stroke-width="1.5" fill="none" filRule="evenodd" strokeLinecap="square">
                                                        <path d="M17 15l-3 3-8-8 3-3-5-5-3 3c0 9.941 8.059 18 18 18l3-3-5-5z" stroke="#1e2d7d"></path>
                                                        <path d="M14 1c4.971 0 9 4.029 9 9m-9-5c2.761 0 5 2.239 5 5" stroke="#00badb"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="faq-page-question-heading">Customer Support</div>
                                            <div className="faq-page-question-para">Our support is here to answer your questions. We’re available 24/7.</div>
                                            <div className="faq-page-question-para">Phone : 202-555-0174</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 p-md-0">
                                        <div className="faq-page-question-container">
                                            <div className="faq-page-question-icon">
                                                <svg focusable="false" viewBox="0 0 24 20" role="presentation">
                                                    <g stroke-width="1.5" fill="none" fillRule="evenodd" strokeLinecap="square">
                                                        <path stroke="#00badb" d="M19 5l-7 7-7-7"></path>
                                                        <path stroke="#1e2d7d" d="M1 1h22v18H1z"></path>
                                                        <path d="M7 13l-2 2M17 13l2 2" stroke="#00badb"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="faq-page-question-heading">Send a message</div>
                                            <div className="faq-page-question-para">You can also contact us by email. Our team replies in 24 hours.</div>
                                            <div className="faq-page-question-para">Fill in the <Link to='/Contact'>contact form</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <DiscountDetails />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Faq 