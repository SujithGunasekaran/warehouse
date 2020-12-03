import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/popularProduct.css';
import home_product_earbud from '../image/home_product_earbud.jpg';
import home_product_headphones from '../image/home_product_headphones.jpg';
import home_product_speaker from '../image/home_product_speaker.jpg';
import home_product_turntable from '../image/home_product_turntable.jpg';
import home_product_tv from '../image/home_product_tv.jpg';
import home_product_woofer from '../image/home_product_woofer.jpg';



class PopularProduct extends Component
{
    render()
    {
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="popular-heading-display">
                            <div className="popular-heading">Popular categories</div>
                            <div className="popular-subheading">View all</div>
                        </div>
                        <div className="row">
                            <div className="col-4 col-sm-4 col-md-2 col-lg-2">
                                <div className="popular-main-container">
                                    <Link to="/Shop/Headphones">
                                        <div className="popular-image-display">
                                            <img src={home_product_headphones} alt="home_product_headphones" className="popular-image-list"/>
                                            <div className="popular-image-list-name">Headphones</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-4 col-sm-4 col-md-2 col-lg-2">
                                <div className="popular-main-container">
                                    <Link to="/Shop/Ear Buds">
                                        <div className="popular-image-display">
                                            <img src={home_product_earbud} alt="home_product_earbud" className="popular-image-list"/>
                                            <div className="popular-image-list-name">Earbud</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-4 col-sm-4 col-md-2 col-lg-2">
                                <div className="popular-main-container">
                                    <Link to="/Shop/Sound Bars">
                                        <div className="popular-image-display">
                                            <img src={home_product_speaker} alt="home_product_speaker" className="popular-image-list"/>
                                            <div className="popular-image-list-name">Speaker</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-4 col-sm-4 col-md-2 col-lg-2">
                                <div className="popular-main-container">
                                    <Link to="/Shop/Accessories">
                                        <div className="popular-image-display">
                                            <img src={home_product_turntable} alt="home_product_turntable" className="popular-image-list"/>
                                            <div className="popular-image-list-name">Turntable</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-4 col-sm-4 col-md-2 col-lg-2">
                                <div className="popular-main-container">
                                    <Link to="/Shop/All TVs">
                                        <div className="popular-image-display">
                                            <img src={home_product_tv} alt="home_product_tv" className="popular-image-list"/>
                                            <div className="popular-image-list-name">TV</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-4 col-sm-4 col-md-2 col-lg-2">
                                <div className="popular-main-container">
                                    <Link to="/Shop/Sound Bars">
                                        <div className="popular-image-display">
                                            <img src={home_product_woofer} alt="home_product_woofer" className="popular-image-list"/>
                                            <div className="popular-image-list-name">Woofer</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PopularProduct