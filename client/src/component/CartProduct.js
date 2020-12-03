import React from 'react';
import { connect } from 'react-redux';
import { MdAdd, MdRemove } from "react-icons/md";



function CartProduct(props){

    var colorDisplay;
    var sizeDisplayName;
    var productPrice;

    return(
        <div>
            <div className="cart-component-main-container">
                <div className="cart-component-second-container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="cart-component-para-head">Product</div>
                        </div>
                        <div className="col-md-3" style={{textAlign:'center'}}>
                            <div className="cart-component-para-head">Quantity</div>
                        </div>
                        <div className="col-md-2">
                            <div className="cart-component-para-head">Price</div>
                        </div>
                    </div>
                </div>
                <div className="cart-main-product-container">
                    {/* <div className="col-md-7"> */}
                        {
                            props.CartReducer.cartData.map((productInfo,index) => {
                                if(productInfo.productSizeName === 'Capacity'){
                                    sizeDisplayName = 'GB';
                                }
                                else{
                                    sizeDisplayName = '"'
                                }
                                if(productInfo.productColor !== 'No' || productInfo.productSize !== 'No'){
                                    colorDisplay = 'Partial'
                                }
                                if(productInfo.productColor !== 'No' && productInfo.productSize !== 'No'){
                                    colorDisplay = 'Yes'
                                }
                                if(productInfo.productColor === 'No' && productInfo.productSize === 'No'){
                                    colorDisplay = 'No'
                                }

                                productPrice = productInfo.productPrice * productInfo.productQuantity

                                return(
                                    <div key={index}>
                                        <div className="row"> 
                                            <div className="col-md-7">
                                                <div className="cart-component-product-display">
                                                    <img src={process.env.PUBLIC_URL + productInfo.productImage} className="cart-component-product-image" alt={productInfo.productName}/>
                                                    <div className="cart-component-product-infp-display">
                                                        <div className="cart-component-product-brand">{productInfo.productBrandName}</div>
                                                        <div className="cart-component-product-name">{productInfo.productName}
                                                            { colorDisplay === 'Yes' ? productInfo.productColor !== 'No' && productInfo.productSize !== 'No' ? ` - ${productInfo.productColor} / ${productInfo.productSize}${sizeDisplayName}` : '' : ''}
                                                            { colorDisplay === 'Partial' ? productInfo.productColor !== 'No' ? ` - ${productInfo.productColor} ` : '' : '' }
                                                            { colorDisplay === 'Partial' ? productInfo.productSize !== 'No' ? ` - ${productInfo.productSize}${sizeDisplayName}` : '' : '' }
                                                        </div>
                                                        <div className="cart-component-product-mobile-price-display">
                                                            <div className="cart-component-product-mobile-price-tag">Product Price : </div>
                                                            <div className="cart-component-product-mobile-price-value">&#x20B9; {Number(productInfo.productPrice).toLocaleString('en-IN')}</div>
                                                        </div>
                                                        <div className="cart-component-product-info-price">&#x20B9; {Number(productInfo.productPrice).toLocaleString('en-IN')}</div>
                                                        <div className="cart-component-product-mobile-quantity">
                                                            <MdRemove className="cart-component-product-mobile-quantity-color" style={{marginRight:'auto'}} onClick={ ()=>props.handleProductQuantity('Reduce',productInfo.username,productInfo.productName)}/> <span className="cart-component-product-mobile-quantity-value">{productInfo.productQuantity}</span>  <MdAdd className="cart-component-product-mobile-quantity-color" onClick={()=>props.handleProductQuantity('Increment',productInfo.username,productInfo.productName)} style={{marginLeft:'auto'}}/>
                                                        </div>
                                                        <div className="cart-component-mobile-price-display">
                                                            <div className="cart-component-mobile-price-tag">Total Price : </div>
                                                            <div className="cart-component-mobile-price-value">&#x20B9; {Number(productPrice).toLocaleString('en-IN')}</div>
                                                        </div>
                                                        <div className="cart-component-product-mobile-remove" onClick={()=>props.handleRemoveProduct(productInfo.productName)}>Remove</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="cart-component-product-quantity">
                                                    <MdRemove className="cart-component-product-quantity-color" style={{marginRight:'auto'}} onClick={ ()=>props.handleProductQuantity('Reduce',productInfo.username,productInfo.productName)}/> <span className="cart-component-product-quantity-value">{productInfo.productQuantity}</span>  <MdAdd className="cart-component-product-quantity-color" onClick={()=>props.handleProductQuantity('Increment',productInfo.username,productInfo.productName)} style={{marginLeft:'auto'}}/>
                                                </div>
                                                <div className="cart-component-product-remove" onClick={()=>props.handleRemoveProduct(productInfo.productName)}>Remove</div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="cart-component-product-price">&#x20B9; {Number(productPrice).toLocaleString('en-IN')}</div>
                                            </div>
                                        </div>
                                        {
                                            props.CartReducer.cartData.length - 1 > index ?  <hr/> : null
                                        }
                                    </div>
                                )
                            })
                        }
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        CartReducer : state.CartReducer
    }
}

export default connect(mapStateToProps)(CartProduct)