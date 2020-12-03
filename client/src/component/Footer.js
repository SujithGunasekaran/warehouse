import React, { Component } from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import ShopIcon from '@material-ui/icons/Shop';
import PaymentCartAccept from './PaymentCardAccept';

class Footer extends Component
{
    render()
    {
        return(
            <div className="footer-main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer-about-container">
                                <div className="footer-about-heading">About The Store</div>
                                <div className="footer-about-para">Our mission statement is to provide the absolute best customer experience available in the Audio/Video industry without exception</div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-about-popular-container">
                                <div className="footer-about-popular-heading">Popular Collection</div>
                                <div className="footer-about-popular-display">
                                    <Link to="/Shop/Audio" className="first">Speakers</Link>
                                    <Link to="/Shop/Accessories">Audio Accessories</Link>
                                    <Link to="/Shop/Headphones">Head Phones</Link>
                                    <Link to="/Shop/Sound Bars">Home Cinema</Link>
                                    <Link to="/Shop/All TVs">LED TVs</Link>
                                    <Link to="/Shop/Sound Bars">Sound Bars</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-about-information-container">
                                <div className="footer-about-information-heading">Information</div>
                                <div className="footer-about-information-display">
                                    <Link to="/About" className="first">About us</Link>
                                    <Link to="/Brand">Brand We Distribute</Link>
                                    <Link to="/Team">Meet the Team</Link>
                                    <Link to="/Contact">Contact Information</Link>
                                    <Link to="/faq">FAQ</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-about-news-container">
                                <div className="footer-about-news-heading">Our Newsletter</div>
                                <div className="footer-about-news-para">Subscribe to get notified about product launches, special offers and news.</div>
                                <form>
                                    <input type="email" placeholder="Email Address" className="footer-about-news-input"/>
                                    <button className="footer-about-news-btn">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <hr className="footer-hr"/>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-copyright-container">
                                <div className="footer-copyright">© 2020, WareHouse.in, All Rights Reserved</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-social-link-heading">Follow us</div>
                            <div className="footer-social-link">
                                <a href="some"><TwitterIcon style={{fontSize:'18px'}}/></a>
                                <a href="some"><InstagramIcon style={{fontSize:'18px'}}/></a>
                                <a href="some"><LinkedInIcon style={{fontSize:'18px'}}/></a>
                                <a href="some"><PinterestIcon style={{fontSize:'18px'}}/></a>
                                <a href="some"><ShopIcon style={{fontSize:'18px'}}/></a>
                            </div> 
                        </div>
                        <div className="col-md-4">
                            <div className="footer-card-container">
                                <div className="footer-card-heading">We Accept</div>
                                <div className="footer-card-display">
                                    {/* <i className="fa fa-cc-visa"></i>
                                    <i className="fa fa-cc-mastercard"></i>
                                    <i className="fa fa-cc-paypal"></i>
                                    <i className="fa fa-credit-card"></i> */}
                                    <PaymentCartAccept />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer