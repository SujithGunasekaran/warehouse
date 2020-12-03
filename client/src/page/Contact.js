import React, { Component } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import '../css/contact.css';
import { Input } from 'reactstrap';
import store from '../image/store.webp';

class Contact extends Component
{

    componentDidMount()
    {
        window.scrollTo(0,0);
    }

    render()
    {

        document.title = "Warehouse | Contact"

        return(
            <div className="main-main-div">
                <div className="header-sticky-display">
                    <Header/>
                </div>
                {/* <Header /> */}
                <div className="contact-page-main">
                    <div className="contact-page-heading">Contact us</div>
                    <div className="contact-page-para">Want to get in touch with us? Just fill out the form below and we'll get back to you as soon as possible.</div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="contact-page-form-heading">Leave your message</div>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" placeholder="Your Name" className="contact-page-form-input-field" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" placeholder="Your email" className="contact-page-form-input-field"/>
                                        </div>
                                    </div>
                                    <Input type="select" className="contact-page-form-input-field" placeholder="hello" name="select" id="exampleSelect">
                                        <option>Customer Services</option>
                                        <option>Press</option>
                                        <option>Legal</option>
                                        <option>Partnership</option>
                                    </Input>
                                    <input type="text" placeholder="Message" maxLength="200" className="contact-page-form-input-field"/>
                                    <button className="contact-page-form-submit">Send message</button>
                                </form>
                            </div>
                            <div className="col-md-3">
                                <div className="contact-page-store-heading">Our store</div>
                                <img src={store} alt='store' width="100%"/>
                                <div className="contact-page-store-para">This is our main store you can directly come and purchase or you can purchase your product in online.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact