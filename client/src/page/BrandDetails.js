import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../component/Header';
import Footer from '../component/Footer';
import DiscountDetails from '../component/DiscountDetails';
import { Link } from 'react-router-dom';
import '../css/brandDetails.css';

function BrandDetails(props)
{
    const [brandName, setBrandName] = useState('');

    useEffect(()=>{
        window.scrollTo(0,0)
        var receivedURL = window.location.pathname.toString();
        var brand = decodeURIComponent(receivedURL.split('/')[2])
        setBrandName(brand)
    },[])

    const { brandDetails } = props.blogPostPageReducer;
    
    document.title = "Warehouse | Brand Details"

    return(
        <div>
            <Header />
                <div className="brand-detail-page-main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="brand-page-head-bread">
                                    <div className="brand-page-bread-para-display">
                                        <div className="brand-page-bread-para"><Link to="/">Home</Link></div>
                                        <div className="brand-page-bread-split"><i className="fa fa-angle-right"></i></div>
                                        <div className="brand-detail-link"><Link to='/Brand'>Brand</Link></div>
                                        <div className="brand-page-bread-split"><i className="fa fa-angle-right"></i></div>
                                        <div className="brand-page-bread-para2">{brandName&&brandName}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="brand-detail-main-container">
                                    {
                                        brandName &&
                                        brandDetails[brandName].map((brandInformation)=>{
                                            return(
                                                <div className="row">
                                                    <div className="col-md-2 col-sm-3">
                                                        <img src={process.env.PUBLIC_URL + brandInformation.imageURL} className="brand-detail-image" alt={brandInformation.BrandName} />
                                                    </div>
                                                    <div className="col-md-10 col-sm-9">
                                                        <div className="brand-detail-brand-name">{brandInformation.BrandName}</div>
                                                        <div className="brand-detail-brand-info">{brandInformation.BrandInformation}</div>
                                                    </div>
                                                </div>
                                                    
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <DiscountDetails/>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        blogPostPageReducer : state.blogPostPageReducer
    }
}


export default connect(mapStateToProps)(BrandDetails)