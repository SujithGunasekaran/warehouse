import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../component/Header';
import Footer from '../component/Footer';
import AdSlide from '../component/AdSlide';
import '../css/home.css';
import home_tv from '../image/home_tv.webp';
import home_headset from '../image/home_headset.webp';
import home_speaker from '../image/home_speaker.webp';
import home_jbl from '../image/home_JBL.jpg';
import home_shipping from '../image/home_shipping.jpg';
import { Link } from 'react-router-dom';
import PopularProduct from '../component/PopularProducts';
import DealAdvertise from '../component/DealAdvertise';
import BlogPost from '../component/BlogPost';
import DiscountDetails from '../component/DiscountDetails';
import OurStore from '../component/OurStore';
import NewsLetter from '../component/NewsLetter';
import Brand from '../component/Brand';
import ShopList from '../component/ShopList';
import { setProductList, setProductListKey } from '../actions/productListAction';
import { setCartCount, setCartData } from '../actions/CartAction';
import { setBrandDetails } from '../actions/blogPostPageAction';
import BrandDetailsJson from '../Json/brandDetails.json';
import axios from 'axios';
import { url } from '../config';

class Home extends Component
{

    constructor(props){
        const token = sessionStorage.getItem('userToken');
        let loggedIn = false;
        if(token !== null){
            loggedIn = true
        }
        super(props)
        this.state={
            loggedIn
        }
    }

    componentDidMount()
    {
        window.scrollTo(0,0);
        var productList = require('../Json/productList.json');
        var productKey = Object.keys(productList);
        this.props.setProductList(productList);
        this.props.setProductListKey(productKey);
        this.props.setBrandDetails(BrandDetailsJson);

        if(this.state.loggedIn === true){
            
            const username = this.props.AuthenticationReducer.userName
            const userInfo = {username : username}
            axios.post(`${url}/userCart/cart/getProduct`,userInfo)
            .then((responseData) => {
                if(responseData.status === 200){
                    this.props.setCartCount(responseData.data.length)
                    this.props.setCartData(responseData.data)
                }
            })
            .catch(()=>{
                console.log("Error")
            })
        }

    }

    render()
    {
        document.title = "Warehouse | Home";

        
        return(
            <div className="main-main-div">
                <div className="header-sticky-display">
                    <Header/>
                </div>
                <AdSlide />
                <div className="home-main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6 col-md-4">
                                <div className="home-container-one">
                                    <div className="home-container-one-heading">OLED TVs</div>
                                    <div className="home-container-one-para">Exclusive offers on TV upto 20% offer on every Purchase</div>
                                    <Link to="/Shop/All TVs"><button className="home-container-one-btn">Shop OLED TVs</button></Link>
                                    <img src={home_tv} className="home-container-one-image" alt="home_tv"/>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="home-container-two">
                                    <div className="home-container-two-heading">Speakers</div>
                                    <div className="home-container-two-para">Explore Our range of high quality speaker</div>
                                    <Link to="/Shop/Sound Bars"><button className="home-container-two-btn">Shop Speakers</button></Link>
                                    <img src={home_speaker} className="home-container-two-image" alt="home_tv"/>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="home-container-three">
                                    <div className="home-container-three-heading">Headphones</div>
                                    <div className="home-container-three-para">Discover over new headphoned upto 25% offer !</div>
                                    <Link to="/Shop/Headphones"><button className="home-container-three-btn">Shop Headphones</button></Link>
                                    <img src={home_headset} className="home-container-three-image" alt="home_tv"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="home-speaker-container">
                                    <div className="home-speaker-display">
                                        <img src={home_jbl} className="home-speaker-image" alt="home_jbl"/>
                                        <div className="home-speaker-inner-display">
                                            <div className="home-speaker-heading">Exclusive offers on JBL products</div>
                                            <div className="home-speaker-para">We offer you a lot of discounts on all our JLB speakers, including JBL Clip 3, JBL Flip 4 or JBL Link 20 !</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="home-shipping-container">
                                    <div className="home-shipping-display">
                                        <img src={home_shipping} className="home-shipping-image" alt="home_jbl"/>
                                        <div className="home-shipping-inner-display">
                                            <div className="home-shipping-heading">Free shipping for all orders overs &#8377;80</div>
                                            <div className="home-shipping-para">We got you covered ! We deliver your goods using UPS expedited shipping, free of charge</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <PopularProduct />
                        <DealAdvertise/>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="home-about-warehouse-container">
                                    <div className="home-about-warehouse-heading">About Warehouse</div>
                                    <div className="home-about-warehouse-para">Our mission statement is to provide the absolute best customer experience available in the Audio/Video industry without exception. We choose to only sell the best performing products in the world, learning them inside and out to ensure your experience with our organization and the products we supply are second to none. HiDEF Lifestyle is one of the fastest growing Audio and Video retailers in the United States.</div>
                                    <div className="center-warehouse-btn">
                                        <Link to='/About'><button className="home-about-warehouse-btn">Discover our brand</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Brand fromPage="Home" />
                        <div className="home-product-tv-main">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="home-product-tv-heading">New TVs</div>
                                    <div className="home-product-tv-para">Here is our selection of new TVs on the market, picked by our Warehouse experts.</div>
                                    <Link to='/Shop/All TVs'><button className="home-product-tv-button">Shop All TVs</button></Link>
                                    {/* <img src={home_tv} width="100%" className="home-product-tv-img" alt="Home Tv" /> */}
                                </div>
                            </div>
                            <div className="home-product-display">
                                <ShopList 
                                fromPage = "Home"
                                product= "All TVs" 
                                />
                            </div>
                        </div>
                        <BlogPost fromPage="Home" />
                        <OurStore />
                        <NewsLetter />
                        <DiscountDetails />  
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    productListReducer : state.productListReducer,
    AuthenticationReducer : state.AuthenticationReducer
    // CartReducer : state.CartReducer
})

const mapDispatchToProps = (dispatch) => {
    return{
        setProductList : data => dispatch(setProductList(data)),
        setProductListKey : key => dispatch(setProductListKey(key)),
        setCartCount : count => dispatch(setCartCount(count)),
        setCartData : data => dispatch(setCartData(data)),
        setBrandDetails : data => dispatch(setBrandDetails(data))
    };
}

export default connect(mapStateToProps,mapDispatchToProps) (Home);