import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import '../css/summaryComponent.css';


function SummaryComponent(props){

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const { customerName, customerEmail, customerMobile, customerDoorNo, customerStreet, customerCity, customerState, 
        customerPincode } = props;

    const { productCheckoutList } = props.productListReducer;

    var savedPrice = 0;
    var gst=28;
    var colorDisplay;
    var sizeDisplayName;


    return(
        <div>
            <div className="summary-component-heading">Address and Contact Details</div>
            <div className="summary-component-main">
                <div className="summary-component-tag-display">
                    <div className="summary-component-tag-name">Name</div>
                    <div className="summary-component-tag-colon">:</div>
                    <div className="summary-component-tag-name-value">{customerName}</div>
                </div>
                <div className="summary-component-tag-display">
                    <div className="summary-component-tag-name">Email</div>
                    <div className="summary-component-tag-colon">:</div>
                    <div className="summary-component-tag-name-value">{customerEmail}</div>
                </div>
                <div className="summary-component-tag-display">
                    <div className="summary-component-tag-name">MobileNo</div>
                    <div className="summary-component-tag-colon">:</div>
                    <div className="summary-component-tag-name-value">{customerMobile}</div>
                </div>
                <div className="summary-component-tag-display">
                    <div className="summary-component-tag-name">Address</div>
                    <div className="summary-component-tag-colon">:</div>
                    <div className="summary-component-tag-name-value">D/No {customerDoorNo}, {customerStreet}, <br/>{customerCity}<br/>{customerState} - {customerPincode}</div>
                </div>
            </div>
            <div className="summary-component-heading">Order Summary</div>
                    {
                        productCheckoutList.productInfoList.map((listInfo) => {
                            return(
                                listInfo.map((list,index) => {
                                    if(list.productType === 'All TVs' || list.productType === 'Bluetooth'){
                                        gst = 18;
                                    }
                                    else{
                                        gst = 28;
                                    }
                                    if(list.productSizeName === 'Capacity'){
                                        sizeDisplayName = 'GB';
                                    }
                                    else{
                                        sizeDisplayName = '"'
                                    }
                                    if(list.productColor !== 'No' || list.productSize !== 'No'){
                                        colorDisplay = 'Partial'
                                    }
                                    if(list.productColor !== 'No' && list.productSize !== 'No'){
                                        colorDisplay = 'Yes'
                                    }
                                    if(list.productColor === 'No' && list.productSize === 'No'){
                                        colorDisplay = 'No'
                                    }

                                    savedPrice = list.productActualPrice - list.productPrice;
                                    return(
                                        <div className="summary-component-order-container" key={index}>
                                            <div className="summary-component-main-display">
                                                <img src={ process.env.PUBLIC_URL + list.productImage } className="summary-component-order-image" alt="Sample" />
                                                <div className="summary-component-info-display">
                                                    <div className="summary-component-info-name">{list.productName}
                                                        { colorDisplay === 'Yes' ? list.productColor !== 'No' && list.productSize !== 'No' ? ` - ${list.productColor} / ${list.productSize}${sizeDisplayName}` : '' : ''}
                                                        { colorDisplay === 'Partial' ? list.productColor !== 'No' ? ` - ${list.productColor} ` : '' : '' }
                                                        { colorDisplay === 'Partial' ? list.productSize !== 'No' ? ` - ${list.productSize}${sizeDisplayName}` : '' : '' }
                                                    </div>
                                                    <div className="summary-component-brand-display">
                                                        <div className="summary-component-brand-name">
                                                            {list.productBrandName}
                                                        </div>
                                                        <div className="summary-component-brand-code">{list.productBrandCode}</div>
                                                    </div>
                                                    <div className="summary-component-rating-display">
                                                        <Rating defaultValue={Number(list.productRating)} className="summary-component-rating" precision={0.5} size='small' readOnly />
                                                        <div className="summary-component-rating-name">{list.productRating}</div>
                                                    </div>
                                                    <div className="summary-component-price-display">
                                                        <div className="summary-component-price-tag">Price : </div>
                                                        <div className="summary-component-price-name-display">
                                                            <div className="summary-component-price-name">&#x20B9; {Number(list.productPrice).toLocaleString('en-IN')}</div>
                                                            {
                                                                savedPrice > 0 ? <div className="summary-component-price-strike"><s>&#x20B9; {Number(list.productActualPrice).toLocaleString('en-IN')}</s></div> : null
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="summary-component-gst-display">
                                                        <div className="summary-component-gst-name">GST : </div>
                                                        <div className="summary-component-gst-value">{gst} %</div>
                                                    </div>
                                                </div>
                                            </div>               
                                        </div>
                                    )
                                })
                            )
                        })

                    }
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        productListReducer : state.productListReducer
    }
}

export default connect(mapStateToProps)(SummaryComponent)