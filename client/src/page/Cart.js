import React, { Component, lazy, Suspense } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
// import CartProduct from '../component/CartProduct';
// import CartPriceDetails from '../component/CartPriceDetails';
import OurGarantee from '../component/OurGarantee';
import { connect } from 'react-redux';
import { setProductCheckoutList } from '../actions/productListAction';
import { setCartCount, setCartData } from '../actions/CartAction';
import EmptyCart from '../component/EmptyCart';
import SnackBar from '../component/Snackbar';
import { Link } from 'react-router-dom';
import MaterialLinearProgress from '../component/MaterialLinearProgress';
import '../css/cartPage.css';
import axios from 'axios';
import { url } from '../config';

const CartProduct = lazy(()=> import('../component/CartProduct'))
const CartPriceDetails = lazy(()=>import('../component/CartPriceDetails'))

class Cart extends Component{

    
    constructor(props){
        const token = sessionStorage.getItem('userToken')
        let loggedIn = false;
        if(token !== null){
            loggedIn = true
        }
        super(props);
        this.state={
            pageName:'',loggedIn,snackBarOpenClose:false,snackBarMessage:'',showProgressLoading:false
        }
    }

    componentDidMount()
    {
        window.scrollTo(0,0)
        var url = window.location.pathname.toString();
        var name = decodeURIComponent(url.split('/')[1])
        this.setState({pageName : name})
    }

    handleCheckOut = () =>{
        var productObj = {
            productInfoList:[]
        }
        productObj.productInfoList.push(this.props.CartReducer.cartData)
        this.props.setProductCheckoutList(productObj)
    }

    handleRemoveProduct = (productID) =>{
        var username;
        var productName;
        var productColor;
        var productSize;
        this.setState({showProgressLoading : true})
        this.props.CartReducer.cartData.map((info) =>{
            if(info.productName === productID){
                username = info.username;
                productName = info.productName;
                productColor = info.productColor;
                productSize = info.productSize;
            }
            
        })
        const productInfo = {username : username, productName : productName, productColor : productColor, productSize : productSize}
        axios.post(`${url}/userCart/cart/removeProduct`,productInfo)
        .then((responseData)=>{
            if(responseData.status === 200){
                const username = this.props.AuthenticationReducer.userName
                const userInfo = {username : username}
                axios.post(`${url}/userCart/cart/getProduct`,userInfo)
                .then((responseData) => {
                    if(responseData.status === 200){
                        this.setState({showProgressLoading : false})
                        this.props.setCartCount(responseData.data.length)
                        this.props.setCartData(responseData.data)
                    }
                })
                .catch(()=>{
                    console.log("Error")
                })
            }
        })
        .catch(()=>{
            console.log("Network Error")
        })
    }

    handleProductQuantity = (action,username,name) =>{
        var username;
        var productName;
        var productColor;
        var productSize;
        var productQuantity;
        this.setState({showProgressLoading : true})
        this.setState(()=>{
            let showProgressLoading = true
            return { showProgressLoading }
        })
        if(action === 'Reduce'){
            this.props.CartReducer.cartData.map((info) =>{
                if(info.productName === name){
                    if(info.productQuantity !== '1')
                    {
                        username = info.username;
                        productName = info.productName;
                        productColor = info.productColor;
                        productSize = info.productSize;
                        productQuantity = info.productQuantity - 1;
                    }
                    else{
                        this.setState({snackBarOpenClose : true, snackBarMessage : "product with '1' Quantity cannot be reduced, If you don't want Please Remove the product"})
                    }
                }
                
            })
            const productInfo = {username : username, productName : productName, productColor : productColor, productSize : productSize, productQuantity : productQuantity, fromPage : 'Cart'}
            axios.post(`${url}/userCart/cart/addProduct`,productInfo)
            .then((responseData)=>{
                if(responseData.status === 200){
                    const username = this.props.AuthenticationReducer.userName
                    const userInfo = {username : username}
                    axios.post(`${url}/userCart/cart/getProduct`,userInfo)
                    .then((responseData) => {
                        if(responseData.status === 200){
                            this.props.setCartCount(responseData.data.length)
                            this.props.setCartData(responseData.data)
                            this.setState({showProgressLoading : false})
                        }
                    })
                    .catch(()=>{
                        console.log("Error")
                        this.setState({showProgressLoading : false})
                    })
                }
            })
            .catch(()=>{
                console.log("Error")
                this.setState({showProgressLoading : false})
            })
        }
        if(action === 'Increment'){
            this.props.CartReducer.cartData.map((info) =>{
                if(info.productName === name){
                    username = info.username;
                    productName = info.productName;
                    productColor = info.productColor;
                    productSize = info.productSize;
                    productQuantity = Number(info.productQuantity) + 1;
                }
                
            })
            const productInfo = {username : username, productName : productName, productColor : productColor, productSize : productSize, productQuantity : productQuantity, fromPage : 'Cart'}
            axios.post(`${url}/userCart/cart/addProduct`,productInfo)
            .then((responseData)=>{
                if(responseData.status === 200){
                    const username = this.props.AuthenticationReducer.userName
                    const userInfo = {username : username}
                    axios.post(`${url}/userCart/cart/getProduct`,userInfo)
                    .then((responseData) => {
                        if(responseData.status === 200){
                            this.props.setCartCount(responseData.data.length)
                            this.props.setCartData(responseData.data)
                            this.setState({showProgressLoading : false})
                        }
                    })
                    .catch(()=>{
                        console.log("Error")
                        this.setState({showProgressLoading : false})
                    })
                }
            })
            .catch(()=>{
                console.log("Error")
                this.setState({showProgressLoading : false})
            })
        }
    }

    handleSnackbarClose = () =>{
        this.setState({ snackBarOpenClose : false, snackBarMessage : '' })
    }

    render(){

        document.title = "Warehouse | Cart"

        return(
            <div className="main-main-div">
                <div className="header-sticky-display">
                    <Header/>
                    {
                        this.state.showProgressLoading === true ?
                        <MaterialLinearProgress /> : null
                    }
                </div>
                <div className="cart-page-main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="cart-page-head-bread">
                                    <div className="cart-page-bread-para-display">
                                        <div className="cart-page-bread-para"><Link to="/">Home</Link></div>
                                        <div className="cart-page-bread-split"><i className="fa fa-angle-right"></i></div>
                                        <div className="cart-page-bread-para2">{this.state.pageName}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            this.state.loggedIn === true ?
                            <div>
                                {
                                    this.props.CartReducer.cartCount === 0 ? 
                                    <div className="row">
                                        <div className="col-md-12">
                                            <EmptyCart/>
                                        </div>
                                    </div>
                                     :
                                    <div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="cart-page-heading">My Cart</div>
                                            </div>
                                        </div>
                                        <div className="row cart-page-sticky-container">
                                            <div className="col-md-8">
                                                <Suspense fallback={<div>Loading...</div>}>
                                                    <CartProduct 
                                                        handleRemoveProduct={this.handleRemoveProduct}
                                                        handleProductQuantity={this.handleProductQuantity}
                                                    />
                                                    <OurGarantee/>
                                                </Suspense>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="cart-page-column-sticky">
                                                    <Suspense fallback={<div>Loading...</div>}>
                                                        <CartPriceDetails 
                                                            handleCheckOut = {this.handleCheckOut}
                                                        />
                                                    </Suspense>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                }
                            </div> : 
                            <div className="cart-component-para-loggedout">Please Login to use your cart</div>
                        }
                    </div>
                </div>
                <SnackBar 
                    snackbarOpenClose = {this.state.snackBarOpenClose} 
                    snackBarMessage = {this.state.snackBarMessage}
                    handleSnackbarClose = {this.handleSnackbarClose}
                />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        CartReducer : state.CartReducer,
        AuthenticationReducer : state.AuthenticationReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setProductCheckoutList : (data) => dispatch(setProductCheckoutList(data)),
        setCartCount : count => dispatch(setCartCount(count)),
        setCartData : data => dispatch(setCartData(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)