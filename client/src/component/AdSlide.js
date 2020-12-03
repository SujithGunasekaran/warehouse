import React from 'react';
import slide1 from '../image/home_slide1.jpg';
import slide2 from '../image/home_slide2.jpg';
import slide3 from '../image/home_slide3.jpg';
import '../css/adslide.css';
import { Link } from 'react-router-dom';

function AdSlide()
{
    return(
        <div>
            <div id="carouselExampleIndicators"className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" style={{width:'100%'}} >
                    <div className="carousel-item active">
                        <img className="d-block w-100 carsole-slide1-image" src={slide1} alt="First slide" />
                        <div className="carousel-caption d-none d-md-block" >
                            <p className="carsole-slide1-heading">New headphones Collections</p>
                            <p className="carsole-slide1-para">Discover Our Selection of the best headphones of the year</p>
                            <Link to="/Shop/Headphones"><button className="carsole-slide1-btn">Shop All HeadPhones</button> </Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carsole-slide2-image" src={slide2} alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block" >
                            <p className="carsole-slide2-heading">New JBL Portable Speakers</p>
                            <p className="carsole-slide2-para">Discover the brand new speakers from JBL</p>
                            <Link to="/Shop/Portable"><button className="carsole-slide2-btn">Shop JBL Products</button> </Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carsole-slide3-image" src={slide3} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block" >
                            <p className="carsole-slide3-heading">Brand New OLED TVs</p>
                            <p className="carsole-slide3-para">Discover the brand new OLED TVs</p>
                            <Link to="/Shop/All TVs"><button className="carsole-slide3-btn">Shop OLED TVs</button> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AdSlide;