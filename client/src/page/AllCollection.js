import React, { Component } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import '../css/allCollection.css';
import { Link } from 'react-router-dom';
import allCollection from '../Json/allCollection.json';
import DiscountDetails from '../component/DiscountDetails';
import Brand from '../component/Brand';

// const Brand = lazy(()=>import('../component/Brand'));

class AllCollection extends Component
{

    constructor(props)
    {
        super(props);
        this.state={
            pageName:''
        }
    }

    componentDidMount()
    {
        window.scrollTo(0,0)
        var url = window.location.pathname;
        var strURL = url.toString();
        var Pagename = decodeURIComponent(strURL.split('/')[1])
        this.setState({pageName : Pagename})
    }

    render()
    {

        document.title = "Warehouse | All Collection"

        return(
            <div className="main-main-div">
                <div className="header-sticky-display">
                    <Header/>
                </div>
                {/* <Header /> */}
                    <div className="collection-main">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="collection-head-bread">
                                        <div className="collection-bread-para-display">
                                            <div className="collection-bread-para"><Link to="/">Home</Link></div>
                                            <div className="collection-bread-split"><i className="fa fa-angle-right"></i></div>
                                            <div className="collection-bread-para2">All Collections</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="collection-list-heading">All Collections</div>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    allCollection.AllCollection.map((productList,index)=>{
                                        return(
                                            <div className="col-md-4 col-sm-6" key={index}>
                                                <div className="collection-list-image">
                                                    <Link to={`/Shop/${productList.Name}`}>
                                                        <img src={process.env.PUBLIC_URL + productList.imageUrl} className="collection-image" alt={productList.Name} />
                                                        <div className="collection-image-name">{productList.Name}</div>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <Brand fromPage="All Collection"/>
                            <DiscountDetails />
                        </div>
                    </div>
                <Footer />
            </div>
        )
    }
}


export default AllCollection