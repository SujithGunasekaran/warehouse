import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';
import '../css/shopList.css';
import Rating from '@material-ui/lab/Rating';
import allCollection from '../Json/allCollection.json';



function ShopList(props)
{   
    const [viewList, setViewList] = useState('Three Grid')

    const { productList, productListKey } = props.productListReducer;
    var productCount;
    var productListInfo = [];
    var displayColumn;
    var displayrow;

    if(props.fromPage === 'shopPage' && viewList === 'Three Grid'){
        displayColumn = 'col-md-3 p-md-0 p-sm-0 mb-2 mb-sm-2 mb-md-0 col-sm-6';
        displayrow = 'row';
    }
    else if(props.fromPage === 'shopPage' && viewList === 'One Grid'){
        displayColumn = 'col-md-12 p-md-0 p-sm-0 mb-2 mb-sm-2 mb-md-0 col-sm-12';
        displayrow = 'row';
    }
    else if(props.fromPage !== 'Home'){
        displayColumn = 'col-md-2 p-md-0 p-sm-1 mb-2 mb-sm-2 mb-md-0  col-sm-6';
        displayrow = 'row';
    }
    else if(props.fromPage === 'Home'){
        displayColumn = 'col-md-3 p-md-2 p-sm-1 mb-3 mb-sm-2 mb-md-0  col-sm-6';
        displayrow = 'row';
    }

    productListKey.map((item)=>{
        if(item === props.product)
        {
            switch(props.filterPrice)
            {
                case 'below 1000':
                    productListInfo = productList[item].filter((price) => price.Price < 1000).map(listInfo =>{
                        return listInfo;
                    })
                    productCount = productListInfo.length;
                    break;
                case '1000 to 5000':
                    productListInfo = productList[item].filter((price) => price.Price > 1000 && price.Price < 5000).map(listInfo =>{
                        return listInfo;
                    })
                    productCount = productListInfo.length;
                    break;
                case '5000 to 10000':
                    productListInfo = productList[item].filter((price) => price.Price > 5000 && price.Price < 10000).map(listInfo =>{
                        return listInfo;
                    })
                    productCount = productListInfo.length;
                    break;
                case 'above 10000':
                    productListInfo = productList[item].filter((price) => price.Price > 10000).map(listInfo =>{
                        return listInfo;
                    })
                    productCount = productListInfo.length;
                    break;
                case 'display all':
                    productListInfo = productList[item];
                    productCount = productListInfo.length;
                    break;
                default : 
                    productListInfo = productList[item];
                    productCount = productListInfo.length;
            }
        }
    })

    function handleViewChange(viewName){
        setViewList(viewName)
    }


    return(
        <div>
            {
                props.fromPage === 'shopPage' ? 
                <div className="row">
                    <div className="col-md-12 p-md-0 p-sm-0">
                        <div className="shop-list-head-container">
                            {
                                allCollection.AllCollection.map((imageList,index)=>{
                                    if(props.product === imageList.Name)
                                    {
                                        return(
                                            <img key={index} src={process.env.PUBLIC_URL + imageList.imageUrl} className="shop-list-head-image" alt={props.productType} /> 
                                        )
                                    }
                                })
                            }
                            <div className="shop-list-head-product-heading">{props.product}</div>
                            <div className="shop-list-head-option-display">
                                <div className="shop-list-head-option1">Showing {productCount >=1 ? '1' : '0'} - {productCount} of {productCount} Products</div>
                                <div className="shop-list-head-option2">View
                                    <svg focusable="false" onClick={()=>handleViewChange('Three Grid')} className="icon icon--grid shop-list-head-option2-icon1" viewBox="0 0 18 18" role="presentation">
                                        <path d="M1 .030067h2c.55228475 0 1 .44771525 1 1v2c0 .55228475-.44771525 1-1 1H1c-.55228475 0-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .44771525 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .4477153 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1zm7-14h2c.5522847 0 1 .44771525 1 1v2c0 .55228475-.4477153 1-1 1H8c-.55228475 0-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.5522847 0 1 .44771525 1 1v2c0 .5522847-.4477153 1-1 1H8c-.55228475 0-1-.4477153-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.5522847 0 1 .4477153 1 1v2c0 .5522847-.4477153 1-1 1H8c-.55228475 0-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1zm7-14h2c.5522847 0 1 .44771525 1 1v2c0 .55228475-.4477153 1-1 1h-2c-.5522847 0-1-.44771525-1-1v-2c0-.55228475.4477153-1 1-1zm0 7h2c.5522847 0 1 .44771525 1 1v2c0 .5522847-.4477153 1-1 1h-2c-.5522847 0-1-.4477153-1-1v-2c0-.55228475.4477153-1 1-1zm0 7h2c.5522847 0 1 .4477153 1 1v2c0 .5522847-.4477153 1-1 1h-2c-.5522847 0-1-.4477153-1-1v-2c0-.5522847.4477153-1 1-1z" fill="currentColor" fillRule="evenodd"></path>
                                    </svg>
                                    <svg focusable="false" onClick={()=>handleViewChange('One Grid')} className="icon icon--list shop-list-head-option2-icon2" viewBox="0 0 18 18" role="presentation">
                                        <path d="M8 1.030067h9c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1H8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 7h9c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1H8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 7h9c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1H8c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1zm-7-15h2c.55228475 0 1 .44771525 1 1v2c0 .55228475-.44771525 1-1 1H1c-.55228475 0-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .44771525 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .4477153 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1z" fill="currentColor" fillRule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : null
            }
            {
                <div className={displayrow}>
                    {
                        productListInfo.length > 0 ?
                        productListInfo.map((productInfo,index) => {
                            if( ( props.fromPage === 'Home' && index < 4 ) || ( props.fromPage !== 'Home' && viewList === 'Three Grid' ) )
                            {
                                return(
                                    <div className={displayColumn} key={index}>
                                        <Card className="shop-list-card-container">
                                            <Link to={`/Shop/${props.product}/Product/${productInfo.ProductName}`}>
                                                <div className="shop-list-image-container">
                                                    {
                                                        productInfo.New === 'Yes'?
                                                        <div className="shop-list-new-tag">New</div> : null
                                                    }
                                                    {
                                                        productInfo.ActualPrice !== productInfo.Price ?
                                                        <div className="shop-list-discount-tag">Save &#x20B9;{Number(productInfo.ActualPrice-productInfo.Price).toLocaleString('en-IN')}</div> : null
                                                    }
                                                    
                                                    <CardImg src={process.env.PUBLIC_URL + productInfo.imageURL} className="shop-list-card-image" alt={productInfo.ProductName} />
                                                </div>
                                            </Link>
                                            <CardBody className="shop-list-card-info">
                                                <CardTitle className="shop-list-brand-name">{productInfo.BrandName}</CardTitle>
                                                <Link to={`/Shop/${props.product}/Product/${productInfo.ProductName}`}>
                                                    <CardSubtitle className="shop-list-product-name">{productInfo.ProductName}</CardSubtitle>
                                                </Link>
                                                <div className="shop-list-price-display">
                                                    <CardText className="shop-list-price">&#x20B9; {Number(productInfo.Price).toLocaleString('en-IN')}</CardText>
                                                    <CardText className={productInfo.Price !== productInfo.ActualPrice ? 'shop-list-actual-price' : 'shop-list-actual-price-hide'}><s>&#x20B9; {Number(productInfo.ActualPrice).toLocaleString('en-IN')}</s></CardText>
                                                </div>
                                                <Rating defaultValue={Number(productInfo.Rating)} precision={0.5} size='small' readOnly />
                                                <CardText className={productInfo.Stock > 10 ? 'shop-list-stock' : 'shop-list-low-stock'}>&#8226; In stock, {productInfo.Stock} units</CardText>
                                                {
                                                    props.fromPage === 'shopPage' ? 
                                                    <Button className="shop-list-addto-button" onClick={()=>props.handleAddToCart(productInfo.ProductName)}>Add to cart</Button> : null
                                                }
                                            </CardBody>
                                        </Card>
                                    </div>
                                )
                            }
                        }) : 
                        <div className="col-md-12 p-md-0 p-sm-0">
                            <div className="shop-list-data-container">
                                <div className="shop-list-data-info">Your criteria did not match any products.</div>
                            </div>
                        </div>
                    }
                </div>
            }
            {
                productListInfo.length > 0 ?
                productListInfo.map((productInfo,index) =>{
                    if( (props.fromPage !== 'Home' && viewList === 'One Grid') ){
                        return(
                            <div className={displayrow} key={index}>
                                <div className={displayColumn}>
                                    <div className="shop-list-card-one-grid-container">
                                        <div className="shop-list-card-one-grid-image-display">
                                            <Link to={`/Shop/${props.product}/Product/${productInfo.ProductName}`}>
                                                <div className="shop-list-image-container">
                                                    <CardImg src={process.env.PUBLIC_URL + productInfo.imageURL} className="shop-list-card-one-grid-image" alt={productInfo.ProductName} />
                                                </div>
                                            </Link>
                                            <CardBody className="shop-list-card-one-grid-info-display">
                                                <CardTitle className="shop-list-card-one-grid-brand-name">{productInfo.BrandName}</CardTitle>
                                                <Link to={`/Shop/${props.product}/Product/${productInfo.ProductName}`}>
                                                    <CardSubtitle className="shop-list-card-one-grid-product-name">{productInfo.ProductName}</CardSubtitle>
                                                </Link>
                                                <div className="shop-list-card-grid-one-price-display">
                                                    <CardText className="shop-list-card-grid-one-price">&#x20B9; {Number(productInfo.Price).toLocaleString('en-IN')}</CardText>
                                                    <CardText className={productInfo.Price !== productInfo.ActualPrice ? 'shop-list-card-grid-one-actual-price' : 'shop-list-card-grid-one-actual-price-hide'}><s>&#x20B9; {Number(productInfo.ActualPrice).toLocaleString('en-IN')}</s></CardText>
                                                </div>
                                                <div className="shop-list-card-grid-one-new-display">
                                                    {
                                                        productInfo.New === 'Yes' ?
                                                        <div className="shop-list-card-grid-one-new-tag">New</div> : null
                                                    }
                                                    {
                                                        productInfo.ActualPrice !== productInfo.Price ?
                                                        <div className="shop-list-card-grid-one-discount-tag">Save &#x20B9;{Number(productInfo.ActualPrice-productInfo.Price).toLocaleString('en-IN')}</div> : null
                                                    }
                                                </div>
                                                <div className="shop-list-card-grid-one-rating-display">
                                                    <Rating defaultValue={Number(productInfo.Rating)} precision={0.5} size='small' readOnly />
                                                    <div className="shop-list-card-grid-one-rating-name">{Number(productInfo.Rating)}</div>
                                                </div>
                                                <CardText className={productInfo.Stock > 10 ? 'shop-list-card-grid-one-stock' : 'shop-list-card-grid-one-low-stock'}>&#8226; In stock, {productInfo.Stock} units</CardText>
                                                {
                                                    props.fromPage === 'shopPage' ? 
                                                    <Button className="shop-list-card-grid-one-addto-button" onClick={()=>props.handleAddToCart(productInfo.ProductName)}>Add to cart</Button> : null
                                                }
                                            </CardBody>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
                : null
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        productListReducer : state.productListReducer
    }
}

export default connect(mapStateToProps)(ShopList)
