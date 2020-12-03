import React, { Component, lazy, Suspense } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
// import ShopList from '../component/ShopList';
import '../css/shopPage.css';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import allCollection from '../Json/allCollection.json';
import { FormGroup, Label, Input } from 'reactstrap';
import { setCartCount, setCartData } from '../actions/CartAction';
import SnackBar from '../component/Snackbar';
import ProgressBarLoading from '../component/MaterialLinearProgress';
import axios from 'axios';
import { setProductList, setProductListKey } from '../actions/productListAction';
import { url } from '../config';

const ShopList = lazy(()=>import('../component/ShopList'))



class Shop extends Component
{
    constructor(props)
    {
        const token = sessionStorage.getItem('userToken')
        let loggedIn = false;
        if(token !== null){
            loggedIn = true
        }
        super(props);
        this.state={
            productType:'',price:'',snackBarOpenClose:false,snackBarMessage:'',snackBarColor:'',
            showProgressBarLoading : false,loggedIn
        }
    }

    componentDidMount()
    {
        window.scrollTo(0,0)
        var url = window.location.pathname.toString();
        var product = decodeURIComponent(url.split('/')[2])
        var productList = require('../Json/productList.json');
        var productKey = Object.keys(productList);
        this.props.setProductList(productList);
        this.props.setProductListKey(productKey);
        this.setState({productType : product})

        var collection = document.getElementsByClassName('shop-page-side-collection-name')
        var i;
        for(i=0;i<collection.length;i++)
        {
            collection[i].addEventListener('click',function(){
                this.classList.toggle('shop-page-side-collection-name-active');
                var dropdown = this.nextElementSibling;
                if(dropdown.style.maxHeight){
                    dropdown.style.maxHeight = null;
                }
                else{
                    dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
                }
            })
        }

    }
    static getDerivedStateFromProps (props,state)
    {
        var url = window.location.pathname.toString();
        var product = decodeURIComponent(url.split("/")[2])
        if(state.productType !== product)
        {
            window.scrollTo(0,0)
        }
        return{
            productType : product
        }
    }

    handleRadioChange = e =>{
        this.setState({price : e.target.value})
    }

    handleAddToCart = (ProductName) =>{

        if(this.state.loggedIn === true)
        {
            var productType
            var productImage
            var productName
            var productType
            var BrandName
            var BrandCode
            var productRating
            var ActualPrice
            var Price
            var Size 
            var colorName
            var productSizeName
            var Rating
            var productQuantity
            var fromPage = "product"
            var username = this.props.AuthenticationReducer.userName;

            this.setState({showProgressBarLoading : true})

            this.props.productListReducer.productListKey.map((keyInfo) => {
                if(keyInfo === this.state.productType)
                {
                    this.props.productListReducer.productList[keyInfo].map((productInfo) => {
                        if(productInfo.ProductName === ProductName)
                        {
                            if(productInfo.DefaultSize === undefined){
                                Size = 'No';
                            }
                            else{
                                Size = productInfo.DefaultSize
                            }
                            if(productInfo.ColorDefaultName === undefined){
                                colorName = 'No'
                            }
                            else{
                                colorName = productInfo.ColorDefaultName
                            }
                            if(productInfo.ProductListName === undefined){
                                productSizeName = 'No'
                            }
                            else{
                                productSizeName = productInfo.ProductListName 
                            }
                            productType = this.state.productType
                            productImage = productInfo.ProductImageURL
                            productName = productInfo.ProductName
                            BrandName = productInfo.BrandName
                            BrandCode = productInfo.BrandCode
                            productRating = productInfo.Rating
                            ActualPrice = productInfo.ActualPrice
                            Price = productInfo.Price
                            Rating = productInfo.Rating
                            productQuantity = 1
                        }
                    })
                }
            })
            const newProductCart = {username : username, productImage : productImage,
                productName : productName,productType : productType, productBrandName : BrandName, productBrandCode : BrandCode,
                productRating : productRating, productActualPrice : ActualPrice,productColor : colorName,
                productSize : Size, productPrice : Price, productQuantity : productQuantity,
                productSizeName : productSizeName, fromPage : fromPage}
            axios.post(`${url}/userCart/cart/addProduct`,newProductCart)
            .then((responseData) => {
                if(responseData.status === 200){
                    this.setState({
                        snackBarOpenClose : true, 
                        snackBarMessage : 'Product Added Successfully',
                        snackBarColor : '#888989'
                    })
                    const username = this.props.AuthenticationReducer.userName
                    const userInfo = {username : username}
                    axios.post(`${url}/userCart/cart/getProduct`,userInfo)
                    .then((responseDataInfo) => {
                        if(responseDataInfo.status === 200){
                            this.setState({showProgressBarLoading : false})
                            this.props.setCartCount(responseDataInfo.data.length)
                            this.props.setCartData(responseDataInfo.data)
                        }
                    })
                    .catch(()=>{
                        this.setState({showProgressBarLoading : false})
                        console.log("Error")
                    })
                }
            })
            .catch((err) => {
                console.log("error")
                this.setState({
                    snackBarOpenClose : true, 
                    snackBarMessage : `${productName} Already Added to your cart`,
                    snackBarColor : '#f44336'
                })
                this.setState({progressBarLoading : false})
            })
        }
    }


    render()
    {

        document.title = "Warehouse | Shop"

        return(
            <div className="main-main-div">
                <div className="header-sticky-display">
                    <Header/>
                    {
                        this.state.showProgressBarLoading === true ?
                        <ProgressBarLoading /> : null
                    }
                </div>
                {/* <Header /> */}
                <div className="shop-page-main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="shop-page-head-bread">
                                    <div className="shop-page-bread-para-display">
                                        <div className="shop-page-bread-para"><Link to="/">Home</Link></div>
                                        <div className="shop-page-bread-split"><i className="fa fa-angle-right"></i></div>
                                        <div className="shop-page-bread-para2">{this.state.productType}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="order-2 order-sm-2 order-md-1 col-md-3">
                                <div className="shop-page-side-container">
                                    <div className="shop-page-side-product-heading">Products</div>
                                    <div className="shop-page-side-collection-display">
                                        {/* <i className="fa fa-angle-down shop-page-side-collection-icon"></i> */}
                                    </div>
                                    <div className="shop-page-side-collection-name">Collections</div>
                                    <div className="shop-page-collection-dropdown">
                                        <ul>
                                            {
                                                allCollection.AllCollection.map((productName,index) => {
                                                    return(
                                                        <Link to={`/Shop/${productName.Name}`} key={index}>
                                                            <li >{productName.Name}</li>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <hr />
                                    <div className="shop-page-side-product-heading">Filters</div>
                                    <div className="shop-page-filter-heading">Price</div>
                                    {
                                        this.state.price !== 'display all' && this.state.price !== '' ?
                                        <div className="shop-page-filter-details">Filtered by {this.state.price}</div> : null
                                    }
                                    <FormGroup check className="shop-page-checkbox-container">
                                        <Label check className="shop-page-checkbox-name">
                                            <Input type="radio" value="display all" className="shop-page-checkbox" name="radio1" onChange={this.handleRadioChange}/>
                                            Display All
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check className="shop-page-checkbox-container">
                                        <Label check className="shop-page-checkbox-name">
                                            <Input type="radio" value="below 1000" className="shop-page-checkbox" name="radio1" onChange={this.handleRadioChange} />
                                            Below &#x20B9; 1,000
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check className="shop-page-checkbox-container">
                                        <Label check className="shop-page-checkbox-name">
                                            <Input type="radio" value="1000 to 5000" className="shop-page-checkbox" name="radio1" onChange={this.handleRadioChange} />
                                            &#x20B9; 1,000 to &#x20B9; 5,000
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check className="shop-page-checkbox-container">
                                        <Label check className="shop-page-checkbox-name">
                                            <Input type="radio" value="5000 to 10000" className="shop-page-checkbox" name="radio1" onChange={this.handleRadioChange} />
                                            &#x20B9; 5,000 to &#x20B9; 10,000
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check className="shop-page-checkbox-container">
                                        <Label check className="shop-page-checkbox-name">
                                            <Input type="radio" value="above 10000" className="shop-page-checkbox" name="radio1" onChange={this.handleRadioChange} />
                                            above &#x20B9; 10,000
                                        </Label>
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="order-1 order-sm-1 order-md-2 col-md-9">
                                <Suspense fallback={<div>Loading..</div>}>
                                    <ShopList 
                                    fromPage = "shopPage"
                                    product={this.state.productType} 
                                    filterPrice={this.state.price}
                                    handleAddToCart={this.handleAddToCart}
                                    />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                    <SnackBar
                        snackbarOpenClose = {this.state.snackBarOpenClose} 
                        snackBarMessage = {this.state.snackBarMessage}
                        snackBarColor = {this.state.snackBarColor}
                        handleSnackbarClose = {this.handleSnackbarClose}
                    />
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        productListReducer : state.productListReducer,
        AuthenticationReducer : state.AuthenticationReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setProductList : data => dispatch(setProductList(data)),
        setProductListKey : key => dispatch(setProductListKey(key)),
        setCartCount : count => dispatch(setCartCount(count)),
        setCartData : data => dispatch(setCartData(data))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Shop)
