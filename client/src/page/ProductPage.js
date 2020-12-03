import React, { Component, lazy, Suspense } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { connect } from 'react-redux';
import '../css/productPage.css';
import Rating from '@material-ui/lab/Rating';
import { MdAdd, MdRemove, MdLocalGroceryStore } from "react-icons/md";
import { BsFillLightningFill } from "react-icons/bs";
import Security from '../image/security.webp';
import { Link } from 'react-router-dom';
import DiscountDetails from '../component/DiscountDetails';
import { setProductCheckoutList } from '../actions/productListAction';
import { setCartCount, setCartData } from '../actions/CartAction';
import axios from 'axios';
import Snackbar from '../component/Snackbar';
import ProgressBarLoading from '../component/MaterialLinearProgress';
import PaymentCartAccept from '../component/PaymentCardAccept';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import ShopIcon from '@material-ui/icons/Shop';
import { setProductList, setProductListKey } from '../actions/productListAction';
import { url } from '../config';

const ShopList = lazy(()=>import('../component/ShopList'))

class ProductPage extends Component
{

    constructor(props)
    {
        const token = sessionStorage.getItem('userToken')
        let loggedIn = false;
        if(token !== null){
            loggedIn = true;
        }
        super(props)
        this.state={
            productType:'',productName:'',quantity:1,ActualPrice:'',Price:'',BrandName:'',
            BrandCode:'',Stock:'',Size:'',productRating:'',
            colorName:'',colorImgUrl:'',productSizeName:'',loggedIn,
            snackBarOpenClose:false,snackBarMessage:'',snackBarColor:'',
            authenticateError:'',redirectURL:'/Shipping',progressBarLoading:false
        }
    }

    handleInputChange = e => {
        if( !isNaN(e.target.value))
        {
            this.setState({[e.target.name] : e.target.value})
        }
    }

    handleProductListChange = e => {
        this.setState({[e.target.name] : e.target.value})
        this.props.productListReducer.productListKey.map((keyInfo) => {
            if(keyInfo === this.state.productType)
            {
                this.props.productListReducer.productList[keyInfo].map((productInfo) => {
                    if(productInfo.ProductName === this.state.productName && productInfo.ColorAvailable !== 'Yes')
                    {
                        productInfo.ProductList.map((listInfo) =>{
                            if(listInfo.Size === e.target.value){
                                this.setState({
                                ActualPrice : listInfo.ActualPrice,
                                Price : listInfo.Price,
                                BrandCode : listInfo.BrandCode,
                                Stock : listInfo.Stock
                                })
                            }   
                        })
                    }
                    if(productInfo.ProductName === this.state.productName && productInfo.ColorAvailable === 'Yes')
                    {
                        productInfo.ColorImage.map((colorListInfo) =>{
                            if(colorListInfo.ColorName === (this.state.colorName === '' ? productInfo.ColorDefaultName : this.state.colorName) ){
                                colorListInfo.ProductList.map((listInfo) => {
                                    if(listInfo.Size === e.target.value)
                                    {
                                        this.setState({
                                        ActualPrice : listInfo.ActualPrice,
                                        Price : listInfo.Price,
                                        BrandCode : listInfo.BrandCode,
                                        Stock : listInfo.Stock
                                        })
                                    }
                                })
                                
                            }   
                        })
                    }
                })
            }
        })
    }

    handleColorChange = e => {
        this.setState({[e.target.name] : e.target.value})
        this.props.productListReducer.productListKey.map((keyInfo) => {
            if(keyInfo === this.state.productType)
            {
                this.props.productListReducer.productList[keyInfo].map((productInfo) => {
                    if(productInfo.ProductName === this.state.productName)
                    {
                        productInfo.ColorImage.map((colorInfo) =>{
                            if(colorInfo.ColorName === e.target.value){
                                this.setState({
                                colorImgUrl : colorInfo.ProductImageURL
                                })
                                colorInfo.ProductList.map((productColorInfo) => {
                                    if(productInfo.ProductListAvailable === 'Yes'){
                                        if(productColorInfo.Size ===  (this.state.Size === '' ? productInfo.DefaultSize : this.state.Size)){
                                            this.setState({
                                                Size : this.state.Size !== '' ? this.state.Size : productInfo.DefaultSize,
                                                ActualPrice : productColorInfo.ActualPrice,
                                                Price : productColorInfo.Price,
                                                BrandCode : productColorInfo.BrandCode,
                                                Stock : productColorInfo.Stock  
                                            })
                                        }
                                    }
                                    if(productInfo.ProductListAvailable === 'No'){
                                        this.setState({
                                            ActualPrice : productColorInfo.ActualPrice,
                                            Price : productColorInfo.Price,
                                            BrandCode : productColorInfo.BrandCode,
                                            Stock : productColorInfo.Stock  
                                        })
                                    }
                                }) 
                            }  
                        })
                    }
                })
            }
        })
    }

    removeQuantity = e => {
        if(this.state.quantity > 1)
        {
            this.setState({quantity : this.state.quantity - 1})
        }
    }
    addQuantity = e => {
        this.setState({quantity : this.state.quantity + 1})
    }

    componentDidMount()
    {
        window.scrollTo(0,0)
        var url = window.location.pathname.toString();
        var type = decodeURIComponent(url.split('/')[2])
        var name = decodeURIComponent(url.split('/')[4])
        var productList = require('../Json/productList.json');
        var productKey = Object.keys(productList);
        this.props.setProductList(productList);
        this.props.setProductListKey(productKey);
        this.setState({productType : type, productName : name})


        var colorBtn = document.getElementsByClassName('product-page-color-btn')
        for(var i=0;i<colorBtn.length;i++)
        {
            colorBtn[i].addEventListener("click",function(){
                var currentColor = document.getElementsByClassName("product-page-color-btn-active")
                currentColor[0].className = currentColor[0].className.replace('product-page-color-btn-active',"");
                this.className += ' product-page-color-btn-active';
            })
        }

        this.props.productListReducer.productListKey.map((keyInfo) => {
            if(keyInfo === this.state.productType)
            {
                this.props.productListReducer.productList[keyInfo].map((productInfo) => {
                    if(productInfo.ProductName === this.state.productName)
                    {
                        if(productInfo.DefaultSize === undefined){
                            this.setState({ Size : 'No' })
                        }
                        else{
                            this.setState({ Size : productInfo.DefaultSize })
                        }
                        if(productInfo.ColorDefaultName === undefined){
                            this.setState({ colorName : 'No' })
                        }
                        else{
                            this.setState({ colorName : productInfo.ColorDefaultName })
                        }
                        if(productInfo.ProductListName === undefined){
                            this.setState({ productSizeName : 'No' })
                        }
                        else{
                            this.setState({ productSizeName : productInfo.ProductListName })
                        }
                        this.setState({
                            productType : type,
                            colorImgUrl : productInfo.ProductImageURL,
                            productName : productInfo.ProductName,
                            BrandName : productInfo.BrandName,
                            BrandCode : productInfo.BrandCode,
                            productRating : productInfo.Rating,
                            ActualPrice : productInfo.ActualPrice,
                            Price : productInfo.Price,
                            // Size : productInfo.DefaultSize, 
                            // colorName : productInfo.ColorDefaultName,
                            // productSizeName : productInfo.ProductListName
                        })
                    }
                })
            }
        }) 
    }

    componentDidUpdate(){

        var sizeBtn1 = document.getElementsByClassName('product-page-list1-btn')
        for(let i=0;i<sizeBtn1.length;i++)
        {
            sizeBtn1[i].addEventListener('click',function(){
                var current = document.getElementsByClassName('product-page-list1-btn-active')
                current[0].className = current[0].className.replace('product-page-list1-btn-active',"");
                this.className += ' product-page-list1-btn-active';
            }) 
        }

        var sizeBtn2 = document.getElementsByClassName('product-page-list2-btn')
        for(let i=0;i<sizeBtn2.length;i++)
        {
            sizeBtn2[i].addEventListener('click',function(){
                var current = document.getElementsByClassName('product-page-list2-btn-active')
                current[0].className = current[0].className.replace('product-page-list2-btn-active',"");
                this.className += ' product-page-list2-btn-active';
            }) 
        }

        var colorBtn = document.getElementsByClassName('product-page-color-btn')
        for(let i=0;i<colorBtn.length;i++)
        {
            colorBtn[i].addEventListener("click",function(){
                var currentColor = document.getElementsByClassName("product-page-color-btn-active")
                currentColor[0].className = currentColor[0].className.replace('product-page-color-btn-active',"");
                this.className += ' product-page-color-btn-active';
            })
        }
    }

    static getDerivedStateFromProps (props,state)
    {
        var url = window.location.pathname.toString();
        var type = decodeURIComponent(url.split('/')[2])
        var name = decodeURIComponent(url.split('/')[4])
        if(state.productName !== name)
        {
            window.scrollTo(0,0)
            state.Size = ''
            state.colorImgUrl = ''
            state.Stock = ''
            state.BrandCode = ''
            state.Price = ''
            state.ActualPrice = ''
            state.colorName = ''
            state.quantity = 1

            props.productListReducer.productListKey.map((keyInfo) => {
                if(keyInfo === type)
                {
                    props.productListReducer.productList[keyInfo].map((productInfo) => {
                        if(productInfo.ProductName === name)
                        {
                            if(productInfo.DefaultSize === undefined){
                                state.Size = 'No'
                            }
                            else{
                                state.Size = productInfo.DefaultSize
                            }
                            if(productInfo.ColorDefaultName === undefined){
                                state.colorName = 'No'
                            }
                            else{
                                state.colorName = productInfo.ColorDefaultName
                            }
                            if(productInfo.ProductListName === undefined){
                                state.productSizeName = 'No'
                            }
                            else{
                                state.productSizeName = productInfo.ProductListName 
                            }
                            state.colorImgUrl = productInfo.ProductImageURL
                            state.productName = productInfo.ProductName
                            state.productType = type
                            state.BrandName = productInfo.BrandName
                            state.BrandCode = productInfo.BrandCode
                            state.productRating = productInfo.Rating
                            state.ActualPrice = productInfo.ActualPrice
                            state.Price = productInfo.Price
                        }
                    })
                }
            })
            
        }

        return{
            productType : type,
            productName : name        
        }


    }

    storeDataToRedux = () =>{
        var productInfo = [
            {
                productImage : this.state.colorImgUrl,
                productName:this.state.productName,
                productType:this.state.productType,
                productBrandName:this.state.BrandName,
                productBrandCode:this.state.BrandCode,
                productRating:this.state.productRating,
                productActualPrice:this.state.ActualPrice,
                productPrice:this.state.Price,
                productColor:this.state.colorName,
                productSize:this.state.Size,
                productQuantity:this.state.quantity,
                productSizeName:this.state.productSizeName
            }
        ]
        var productObj = {
            productInfoList:[]
        }
        productObj.productInfoList.push(
            productInfo.map((list) =>{
                return list
            })
        )
        this.props.setProductCheckoutList(productObj)
    }

    handleCheckout = () =>{
        this.storeDataToRedux()
    }

    addToCartData = () =>{
        if(this.state.loggedIn === true){
            this.setState({progressBarLoading : true})
            const username = this.props.AuthenticationReducer.userName;
            const productImage = this.state.colorImgUrl;
            const productType = this.state.productType;
            const productName = this.state.productName;
            const productBrandName = this.state.BrandName;
            const productBrandCode = this.state.BrandCode;
            const productRating = this.state.productRating;
            const productActualPrice = this.state.ActualPrice;
            const productPrice = this.state.Price;
            const productColor = this.state.colorName;
            const productSize = this.state.Size;
            const productQuantity = this.state.quantity;
            const productSizeName = this.state.productSizeName;
            const fromPage = "product"
            const newProductCart = {username : username, productImage : productImage,
                productName : productName,productType : productType, productBrandName : productBrandName, productBrandCode : productBrandCode,
                productRating : productRating, productActualPrice : productActualPrice,productColor : productColor,
                productSize : productSize, productPrice : productPrice, productQuantity : productQuantity,
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
                            this.setState({progressBarLoading : false})
                            this.props.setCartCount(responseDataInfo.data.length)
                            this.props.setCartData(responseDataInfo.data)
                        }
                    })
                    .catch(()=>{
                        this.setState({progressBarLoading : false})
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
        else{
            this.setState({ authenticateError : '* Please Login' })
        }
    }

    handleSnackbarClose = () =>{
        this.setState({ snackBarOpenClose : false, snackBarMessage : '' })
    }


    render()
    {
        const { productList, productListKey } = this.props.productListReducer;

        var savePrice;

        document.title = "Warehouse | Product"

        return(
            <div className="main-main-div">
                <div className="header-sticky-display">
                    <Header/>
                    {
                        this.state.progressBarLoading === true ?
                        <ProgressBarLoading /> : null
                    }
                </div>
                <div className="product-page-main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="product-page-head-bread">
                                    <div className="product-page-bread-para-display">
                                        <div className="product-page-bread-para"><Link to="/">Home</Link></div>
                                        <div className="product-page-bread-split"><i className="fa fa-angle-right"></i></div>
                                        <div className="product-page-bread-para2">{this.state.productType}</div>
                                        <div className="product-page-bread-split"><i className="fa fa-angle-right"></i></div>
                                        <div className="product-page-bread-para2">{this.state.productName.substring(0, 20)} ...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            productListKey.map((productType,index) => {
                                if(this.state.productType === productType)
                                {
                                    return(
                                        productList[productType].map((productInfo,index)=> {
                                            if(productInfo.ProductName === this.state.productName)
                                            {
                                                this.state.ActualPrice !== '' && this.state.Price !== '' ? savePrice = Number(this.state.ActualPrice) - Number(this.state.Price) : savePrice = Number(productInfo.ActualPrice) - Number(productInfo.Price);
                                                return(
                                                    <div className="row product-page-sticky-container" key={index}>
                                                        <div className="col-md-6">
                                                            <div className="product-page-image-container">
                                                                <img src={process.env.PUBLIC_URL + this.state.colorImgUrl === '' ? productInfo.ProductImageURL : this.state.colorImgUrl} className="product-page-image" alt={productInfo.ProductName}/>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    {
                                                                        productInfo.Description.map((descriptionInfo,index) => {
                                                                            return(
                                                                                <div className="product-page-des-container" key={index}>
                                                                                    <div className="product-page-des-heading">{descriptionInfo.Heading}</div>
                                                                                    <div className="product-page-des-para">{descriptionInfo.MainPara}</div>
                                                                                    <div className="product-page-des-subheading">{descriptionInfo.SubHeading}</div>
                                                                                    {
                                                                                        descriptionInfo.ListAvailable === 'Yes' ?
                                                                                        <div className="product-page-des-list">
                                                                                            <ul>
                                                                                                {
                                                                                                    descriptionInfo.List.map((listInfo,index) => {
                                                                                                        return (
                                                                                                            <li key={index}>{listInfo.list}</li>
                                                                                                        )
                                                                                                    })
                                                                                                }
                                                                                            </ul>
                                                                                        </div> : null
                                                                                    }
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="product-page-shipping-container">
                                                                        <div className="product-page-shipping-heading">Shipping and Returns</div>
                                                                        <div className="product-page-shipping-list">
                                                                            <ul>
                                                                                <li>Delivery is free for all orders over &#x20B9; 5,000 above. Otherwise, delivery is &#x20B9; 150 - &#x20B9; 250 depending on the items you plan to purchase.</li>
                                                                                <li>Once your product has shipped, it usually takes 2 to 3 business days in India, 3 to 8 in Europe. 5 to 15 for the rest of the world</li>
                                                                                <li>You can return your product up to 14 days after receiving your order. Please make sure that the products are not used or damaged.</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="product-page-payment-container">
                                                                        <div className="product-page-payment-heading">Payment & Security</div>
                                                                        <div className="product-page-payment-subheading">Payment Method</div>
                                                                        <div className="product-page-payment-icon-display">
                                                                            <PaymentCartAccept />
                                                                        </div>
                                                                        <div className="product-page-payment-para">Your payment information is processed securely. We do not store credit card details nor have access to your credit card information.</div>
                                                                        <hr />
                                                                        <img src={Security} className="product-page-payment-image" alt="security" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="product-page-column-sticky">
                                                                <div className="product-page-info-container">
                                                                    <div className="product-page-name">{productInfo.ProductName}</div>
                                                                    <div className="product-save-price-display">
                                                                        {
                                                                            productInfo.New === 'Yes' ?
                                                                            <div className="product-page-new">New</div> : null
                                                                        }
                                                                        {
                                                                            productInfo.OurSelection === 'Yes'?
                                                                            <div className="product-page-our-selection">Our Selection</div> : null

                                                                        }
                                                                        {
                                                                            savePrice > 0 ? 
                                                                            <div className="product-page-save-price">Save &#x20B9; {Number(savePrice).toLocaleString('en-IN')}</div> : null
                                                                        }
                                                                    </div>
                                                                    <div className="product-page-brand-display">
                                                                        <div className="product-page-brand-name">{productInfo.BrandName}</div>
                                                                        <div className="product-page-brand-code">{this.state.BrandCode !== '' ? this.state.BrandCode : productInfo.BrandCode}</div>
                                                                    </div>
                                                                    <div className="product-page-rating-display">
                                                                        <Rating defaultValue={Number(productInfo.Rating)} className="product-page-rating" precision={0.5} size='small' readOnly />
                                                                        <div className="product-page-rating-name">{productInfo.Rating}</div>
                                                                        <div className="product-page-social-one-link">
                                                                            <a href="some"><TwitterIcon style={{fontSize:'18px'}}/></a>
                                                                            <a href="some"><InstagramIcon style={{fontSize:'18px'}}/></a>
                                                                            <a href="some"><PinterestIcon style={{fontSize:'18px'}}/></a>
                                                                            <a href="some"><ShopIcon style={{fontSize:'18px'}}/></a>
                                                                        </div>
                                                                    </div>
                                                                    <hr className="product-page-hr"/>
                                                                    {
                                                                        productInfo.ColorAvailable === 'Yes'?
                                                                        <div>
                                                                            <div className="product-page-color-display">
                                                                                <div className="product-page-color-tag">{productInfo.ColorTagName} : </div>
                                                                                <div className="product-page-color-name">{this.state.colorName === '' ? productInfo.ColorDefaultName : this.state.colorName}</div>
                                                                            </div>
                                                                            <div className="product-page-color-btn-display">
                                                                                {
                                                                                    productInfo.ColorImage.map((colorInfo,index) => {
                                                                                        return(
                                                                                            <button key={index} name={colorInfo.StateName} value={colorInfo.ColorName}  className={index === 0 ? 'product-page-color-btn product-page-color-btn-active' : 'product-page-color-btn product-page-color-btn2'} onClick={this.handleColorChange} style={{backgroundColor:`${colorInfo.DisplayColor}`}} />
                                                                                        )
                                                                                    })  
                                                                                }
                                                                            </div>
                                                                        </div> : null
                                                                    }
                                                                    {
                                                                        productInfo.ProductListAvailable === 'Yes' && productInfo.ColorAvailable === 'No' ? 
                                                                        <div>
                                                                            <div className="product-page-list1-name-display">
                                                                                <div className="product-page-list1-tag">{productInfo.ProductListName} : </div>
                                                                                <div className="product-page-list1-name">{this.state.Size !== '' ? this.state.Size : productInfo.DefaultSize}{productInfo.ProductListName === 'TV Size' ? '″' : 'GB'}</div>
                                                                            </div>
                                                                            <div className="product-page-list1-btn-display">
                                                                                {
                                                                                    productInfo.ProductList.map((productListInfo,index) => {
                                                                                        return(
                                                                                            <button key={index} value={productListInfo.Size} name={productListInfo.SizeName} className={index === 0 ? 'product-page-list1-btn product-page-list1-btn-active' : 'product-page-list1-btn product-page-list1-btn2'} onClick={this.handleProductListChange} >{productListInfo.Size}{productInfo.ProductListName === 'TV Size' ? '″' : 'GB'}</button>
                                                                                        )
                                                                                    })  
                                                                                }
                                                                            </div>
                                                                        </div> : null
                                                                    }
                                                                    {
                                                                        productInfo.ProductListAvailable === 'Yes' && productInfo.ColorAvailable === 'Yes' ? 
                                                                        <div>
                                                                            <div className="product-page-list2-name-display">
                                                                                <div className="product-page-list2-tag">{productInfo.ProductListName} : </div>
                                                                                <div className="product-page-list2-name">{this.state.Size !== '' ? this.state.Size : productInfo.DefaultSize}{productInfo.ProductListName === 'TV Size' ? '″' : 'GB'}</div>
                                                                            </div>
                                                                            <div className="product-page-list2-btn-display">
                                                                                {
                                                                                    productInfo.ColorImage.map((colorProductInfo) => {
                                                                                        if(colorProductInfo.ColorName === (this.state.colorName === '' ? productInfo.ColorDefaultName : this.state.colorName))
                                                                                        {
                                                                                            return(
                                                                                                colorProductInfo.ProductList.map((productListInfo,index) => {
                                                                                                    return(
                                                                                                        <button key={index} value={productListInfo.Size} name={productListInfo.SizeName} className={index === 0 ? 'product-page-list2-btn product-page-list2-btn-active' : 'product-page-list2-btn product-page-list2-btn2'} onClick={this.handleProductListChange} >{productListInfo.Size}{productInfo.ProductListName === 'TV Size' ? '″' : 'GB'}</button>
                                                                                                    )
                                                                                                })
                                                                                            )
                                                                                        }
                                                                                        else{
                                                                                            return null
                                                                                        }
                                                                                    })
                                                                                }
                                                                            </div>
                                                                        </div> : null
                                                                    }
                                                                    <div className="product-page-price-display">
                                                                        <div className="product-page-price-tag">Price : </div>
                                                                        <div className="product-page-price-name">&#x20B9; {Number(this.state.Price !== '' ? this.state.Price : productInfo.Price).toLocaleString('en-IN')}</div>
                                                                        {
                                                                            savePrice > 0 ?
                                                                            <div className="product-page-price-strike"><s>&#x20B9; {Number(this.state.ActualPrice !== '' ? this.state.ActualPrice : productInfo.ActualPrice).toLocaleString('en-IN')}</s></div> : null
                                                                        }
                                                                    </div>
                                                                    <div className="product-page-stock-display">
                                                                        <div className="product-page-stock-tag">Stock : </div>
                                                                        <div className={ ( this.state.Stock !== '' ? this.state.Stock < 10 : productInfo.Stock < 10 ) ? 'product-page-less-stock-name' : 'product-page-stock-name'}>In stock ({ this.state.Stock !== '' ? this.state.Stock : productInfo.Stock} units), ready to be shipped</div>
                                                                    </div>
                                                                    <div className="product-page-quantity-display">
                                                                        <div className="product-page-quantity-tag">Quantity : </div>
                                                                        <MdRemove className="product-page-quantity-icon-remove" onClick={this.removeQuantity} />
                                                                        <input type="text" className="product-page-quantity-number" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} />
                                                                        <MdAdd className="product-page-quantity-icon-add" onClick={this.addQuantity}/>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            <button className="product-page-add-button" onClick={this.addToCartData}><MdLocalGroceryStore style={{fontSize:'25px',marginRight:'10px'}}/> Add to cart </button>
                                                                            {
                                                                                this.state.authenticateError !== ''? <div className="product-page-auth-error">{this.state.authenticateError}</div> : null
                                                                            }
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <Link to={`${this.state.redirectURL}`}><button onClick={this.handleCheckout} className="product-page-buy-button"><BsFillLightningFill style={{fontSize:'20px',marginRight:'10px'}}/> Buy Now </button></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            else{
                                                return null
                                            }
                                        })
                                    )
                                }
                                else{
                                    return null
                                }
                            })
                        }
                        <div className="row">
                            <div className="col-md-12">
                                <div className="product-page-shop-container">
                                    <div className="product-page-shop-heading">You may also like</div>
                                </div>
                            </div>
                        </div>
                        <div className="product-page-shop-main">
                            <Suspense fallback={<div>Loading..</div>}>
                                <ShopList fromPage="product" product={this.state.productType}/>
                            </Suspense>
                        </div>
                        <div style={{marginTop:'-70px'}}>
                            <DiscountDetails />
                        </div>
                    </div>
                    <Snackbar
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
        setProductCheckoutList : (productList) => dispatch(setProductCheckoutList(productList)),
        setCartCount : count => dispatch(setCartCount(count)),
        setCartData : data => dispatch(setCartData(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage)