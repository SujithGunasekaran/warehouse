import React, { Component } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import store from '../image/store.webp';
import store_inside from '../image/store_inside.webp';
import '../css/about.css';
import DiscountDetails from '../component/DiscountDetails';

class About extends Component
{

    componentDidMount()
    {
        window.scrollTo(0,0);
    }

    render()
    {

        document.title = "Warehouse | About"

        return(
            <div className="main-main-div">
                <div className="header-sticky-display">
                    <Header/>
                </div>
                <div className="about-page-main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="mx-auto col-md-8">
                                <div className="about-page-heading">About</div>
                                <div className="about-page-para">Content below is a demonstration content, designed to showcase how this page could look with your brand content.<br/>
                                A big thank you to HiDEF Lifestyle for allowing us to use their products in this demo store. Below is a little bit about them.</div>
                                <img src={store} className="about-page-image" alt='store' />
                                <div className="about-page-subheading">Why choose HiDEF Lifestyle?</div>
                                <div className="about-page-para">
                                Our mission statement is to provide the absolute best customer experience available in the Audio/Video industry without exception. We choose to only sell the best performing products in the world, learning them inside and out to ensure your experience with our organization and the products we supply is second to none. HiDEF Lifestyle is one of the fastest growing Audio and Video retailers in the United States. All because of our passion for our products and our customers. We care like no one else.
                                <br/><br/>
                                We employ salaried representatives whose primary focus is to know and love our products and our customers. Our reps have an average of 7 years of industry experience and go through product trainings and certifications on a weekly basis. You will not find another source that has more industry involved reps on call for you all the time. We only sell what we would and do have in our own homes. Honesty and integrity are the most important pieces to our business and reputation.
                                </div>
                                <img src={store_inside} className="about-page-image" alt='store_inside' />
                                <div className="about-page-para">
                                We're the largest retail AV showroom in central Pennsylvania with over 12,000 square feet of product to play with. We offer in house design and installation by the area's best-certified installers and technicians. This means our knowledge pool is vast and ever expanding. Real experience on the products we sell equals real answers to the questions you pose.
                                </div>
                                <div className="about-page-subheading">Buying Power?</div>
                                <div className="about-page-para">
                                HiDEF Lifestyle is honored to be recognized for the second year in a row as one of the fastest growing privately held retailers and businesses in the United States. This means we have the stock, buying power and leverage with our vendors to ensure we have the stock and prices to match or beat any authorized dealers offerings.
                                <br/><br/>
                                Buy Authorized! This is imperative when investing in electronics. Rest assured that HiDEF Lifestyle is an authorized dealer for every single product we sell. Every product sold comes not only with our 30-day guarantee but also with the full manufacturer's warranty to ensure you and your investment are protected.
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

export default About

