import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/dealAdvertise.css';
import home_deal_one from '../image/home_deal_headphone.webp';
import home_deal_two from '../image/home_deal_two.webp';
import home_deal_three from '../image/home_deal_three.webp';
import home_deal_four from '../image/home_deal_four.webp';
import home_deal_five from '../image/home_deal_five.webp';


class DealAdvertise extends Component
{
    render()
    {
        return(
            <div style={{marginTop:'45px'}}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="home-deal-container-one">
                            <div className="home-deal-container-one-heading">Bluetooth</div>
                            <div className="home-deal-container-one-para">Deal the freedom with our Bluetooth headphones and Speakers</div>
                            <Link to="/Shop/Bluetooth"><button className="home-deal-container-one-btn">Shop Now</button></Link>
                            <img src={home_deal_one} className="home-deal-container-one-image" alt="home_deal_one"/>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="home-deal-container-two">
                                    <div className="home-deal-container-two-heading">Professional Audio</div>
                                    <div className="home-deal-container-two-para">Get the best deals for professional audio equipments.</div>
                                    <Link to="/Shop/Audio"><button className="home-deal-container-two-btn">Shop Now</button></Link>
                                    <img src={home_deal_two} className="home-deal-container-two-image" alt="home_deal_two"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="home-deal-container-three">
                            <div className="home-deal-container-three-heading">Accessories</div>
                            <div className="home-deal-container-three-para">Over various accessories to have the best experience</div>
                            <Link to="/Shop/Accessories"><button className="home-deal-container-three-btn">Shop Now</button></Link>
                            <img src={home_deal_four} className="home-deal-container-three-image" alt="home_deal_four"/>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="home-deal-container-four">
                                    <div className="home-deal-container-four-heading">Projectors</div>
                                    <div className="home-deal-container-four-para">Play or watch your favorites TV shows with these Projectors.</div>
                                    <Link to="/Shop/Projectors"><button className="home-deal-container-four-btn">Shop Now</button></Link>
                                    <img src={home_deal_five} className="home-deal-container-four-image" alt="home_deal_five"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DealAdvertise