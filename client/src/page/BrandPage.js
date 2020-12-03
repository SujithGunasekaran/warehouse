import React, { Component } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Brand from '../component/Brand';
import DiscountDetails from '../component/DiscountDetails';
import '../css/brandPage.css';
import { Link } from 'react-router-dom';
import { setBrandDetails } from '../actions/blogPostPageAction';
import BrandDetailsJson from '../Json/brandDetails.json';
import { connect } from 'react-redux';


class BrandPage extends Component
{

    componentDidMount()
    {
        window.scrollTo(0,0)
        this.props.setBrandDetails(BrandDetailsJson);
    }

    render()
    {

        document.title = "Warehouse | Brand"

        return(
            <div className="main-main-div">
                <div className="header-sticky-display">
                    <Header/>
                </div>
                {/* <Header /> */}
                <div className="brand-page-main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="brand-page-head-bread">
                                    <div className="brand-page-bread-para-display">
                                        <div className="brand-page-bread-para"><Link to="/">Home</Link></div>
                                        <div className="brand-page-bread-split"><i className="fa fa-angle-right"></i></div>
                                        <div className="brand-page-bread-para2">Brands</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="brand-page-heading">Brands</div>
                            </div>
                        </div>
                        <Brand fromPage="BrandPage"/>
                        <DiscountDetails />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        blogPostPageName : state.blogPostPageName
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setBrandDetails : data => dispatch(setBrandDetails(data))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(BrandPage)