import React, { Component,lazy,Suspense } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import ShippingComponent from '../component/ShippingComponent';
// import SummaryComponent from '../component/SummaryComponent';
import PaymentComponent from '../component/PaymentComponent';
// import ShippingPriceSummary from '../component/ShippingPriceSummary';
import '../css/shippingPage.css';

const SummaryComponent = lazy(()=>import('../component/SummaryComponent'))
const ShippingPriceSummary = lazy(()=>import('../component/ShippingPriceSummary'))

class Shipping extends Component
{

    constructor(props)
    {
        const token = sessionStorage.getItem('userToken')
        let loggedIn = false
        if(token !== null){
            loggedIn = true
        }
        super(props);
        this.state={
            page:['Shipping','Summary','Payment'],currenPageIndex:0,
            formName:['email','firstName','mobile','doorNo','street','city','state','pinCode'],
            paymentName:['paymentCardName','paymentCardNumber','paymentCardDate','paymentCardCvv'],
            email:'',firstName:'',lastName:'',mobile:'',doorNo:'',
            street:'',city:'',state:'',pinCode:'' ,
            emailError:false,firstNameError:false,lastNameError:false,mobileError:false,doorNoError:false,
            streetError:false,cityError:false,stateError:false,pinCodeError:false,
            paymentMethodName:'',showPaymentDetails:false,showPaymentButton:false,
            paymentCardName:'',paymentCardNumber:'',paymentCardDate:'',paymentCardCvv:'',
            paymentCardNameError:'',paymentCardNumberError:'',paymentCardDateError:'',paymentCardCvvError:'',
            key:'',loggedIn
        }
    }

    componentDidMount()
    {
        window.scrollTo(0,0);            
    }

    static getDerivedStateFromProps(props,state)
    {
        // if(state.productName != name){
        //     window.scrollTo(0,0)
        // }
    }

    handlePrevious = () =>{
        if(this.state.currenPageIndex >= 0){
            this.setState({currenPageIndex : this.state.currenPageIndex - 1})
        }
        this.setState({paymentMethodName:'',showPaymentDetails:false,showPaymentButton:false,
        paymentCardName:'',paymentCardNumber:'',paymentCardDate:'',paymentCardCvv:'',paymentCardNumberError:'',
        paymentCardCvvError:''})
    }

    handleNext = () =>{
        if(this.state.currenPageIndex === 0){
            var validation = this.validateForm()
            if(validation){
                this.setState({currenPageIndex : this.state.currenPageIndex + 1})
            }
        }
        else{
            this.setState({currenPageIndex : this.state.currenPageIndex + 1})
        }
    }

    handlePaymentInputChange = (e) =>{
        this.setState({paymentMethodName : e.target.id,showPaymentButton:true})
        if(e.target.id === 'Debit'){
            this.setState({showPaymentDetails : true})
        }
        else{
            this.setState({showPaymentDetails : false,paymentCardName:'',paymentCardNumber:'',paymentCardDate:'',paymentCardCvv:'',paymentCardNumberError:'',
            paymentCardCvvError:''})
        }
    }


    handlePaymentCardInputChange = (e) =>{
        
        onkeydown = (e) =>{
            if(e.keyCode === 8 || e.keyCode === 46){
                 this.setState({key : 8})
            }
            else{
                this.setState({key : ''})
            }
        }
      
        if(e.target.name === 'paymentCardName'){
            this.setState({[e.target.name] : e.target.value})
        }
        if(e.target.name === 'paymentCardNumber'){
            var cardNumber = e.target.value.replace(/[^a-zA-Z0-9]/g,'');
            var cardValue;
            var cardNumberLength = cardNumber.length;
            if( this.state.key !== 8 && cardNumberLength !== 0 && cardNumberLength <= 12 && cardNumberLength%4===0){
                cardValue = e.target.value+' ';
            }
            if(cardValue !== undefined){
                this.setState({paymentCardNumber: cardValue})
            }
            else{
                this.setState({[e.target.name] : e.target.value})
            } 
            if(isNaN(e.target.value.replace(/[^a-zA-Z0-9]/g,''))){
                this.setState({paymentCardNumberError : 'Please Enter Valid Card Number'})
            }
            else{
                this.setState({paymentCardNumberError : ''})
            }
        }
        if(e.target.name === 'paymentCardDate'){
            this.setState({paymentCardDateError:''})
            var cardDate = e.target.value;
            var currenDate = new Date()
            var cardMonthCheck = e.target.value.slice(0,2)
            var cardYearCheck = e.target.value.slice(5,9)
            if(cardYearCheck.length > 3 && cardMonthCheck > 1){
                if(currenDate.getMonth()+1 > cardMonthCheck && currenDate.getFullYear() >= cardYearCheck){
                    this.setState({paymentCardDateError : 'Your Card has been Expired'})
                }
            }
            if( ( this.state.key !== 8 && e.target.value.length === 2 ) || ( this.state.key !== 8 &&  e.target.value.length===3) ){
                cardDate = e.target.value+ ' / '
            }
            if(isNaN(e.target.value.replace(/[^a-zA-Z0-9]/g,''))){
                this.setState({paymentCardDateError:'Please Enter Valid Date'})
            }
            if(e.target.value.slice(0,2) < 0 || e.target.value.slice(0,2) > 12){
                this.setState({paymentCardDateError:'Please Enter Valid Month'})
            }
            this.setState({[e.target.name] : cardDate})
        }
        if(e.target.name === 'paymentCardCvv'){
            this.setState({[e.target.name] : e.target.value})
        }
    }

    handleAddressInputChange = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }

    handleAddressInputUpdate = (e) =>{
        this.setState({[e.target.name + 'Error'] : false})
    }

    validateForm = () =>{
        var result = true;
        this.state.formName.map((fieldName)=>{
            if(fieldName === 'mobile'){
                if(this.state[fieldName].length <= 9 || isNaN(this.state[fieldName]) ){
                    var fieldNameError = fieldName +'Error'
                    this.setState({ [fieldNameError] : 'Please Provide Valid Number' })
                    result = false;
                } 
            }
            if(this.state[fieldName] === ''){
                fieldNameError = fieldName +'Error'
                this.setState({ [fieldNameError] : true })
                result = false;
            }
        })
        return result
    }


    render()
    {

        if(this.state.loggedIn === false){
            return <Redirect to='/Login'/>
        }

        var currentIndex;

        this.state.page.map((name,index)=>{
            if(name === this.state.page[this.state.currenPageIndex]){
                currentIndex = index;
            }
        })

        document.title = "Warehouse | Shipping"

        return(
            <div className="main-main-div">
                <div className="header-sticky-display">
                    <Header/>
                </div>
                {/* <Header/> */}
                <div className="shipping-page-main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-4 col-sm-4 col-6 mb-4">
                                        <div className="shipping-page-avatar-display">
                                            {
                                                currentIndex > 0 ? 
                                                <div className="shipping-page-curom-avatar-complete">
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" style={{color:'green'}} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path></svg>
                                                </div> : 
                                                <div className="shipping-page-custom-avatar">1</div>  
                                                
                                            }
                                            <div className={currentIndex > 0 ? 'shipping-page-avatar-name-complete' : 'shipping-page-avatar-name'}>Shipping</div>
                                            <div className={currentIndex > 0 ? "shipping-page-avatar-line-complete" : 'shipping-page-avatar-line'}/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-6 mb-4">
                                        <div className="shipping-page-avatar-display">
                                            {
                                                currentIndex > 1 ?
                                                <div className="shipping-page-curom-avatar-complete">
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" style={{color:'green'}} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path></svg>
                                                </div> : 
                                                 <div className="shipping-page-custom-avatar">2</div> 
                                                
                                            }
                                            <div className={currentIndex > 1 ? "shipping-page-avatar-name-complete" : 'shipping-page-avatar-name'}>Summary</div>
                                            <div className={currentIndex > 1 ? "shipping-page-avatar-line-complete" : 'shipping-page-avatar-line'}/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-6 mb-4">
                                        <div className="shipping-page-avatar-display">
                                            {
                                                currentIndex > 2 ? 
                                                <div className="shipping-page-curom-avatar-complete">
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" style={{color:'green'}} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path></svg>
                                                </div> : 
                                                <div className="shipping-page-custom-avatar">3</div>
                                                
                                            }
                                            <div className={currentIndex >2 ? "shipping-page-avatar-name-complete" : 'shipping-page-avatar-name'}>Payment</div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    this.state.page[this.state.currenPageIndex] === 'Shipping'?
                                    <ShippingComponent
                                        emailAddress={this.state.email} emailError={this.state.emailError}
                                        firstName={this.state.firstName} firstNameError={this.state.firstNameError}
                                        lastName={this.state.lastName}
                                        mobileNo={this.state.mobile} mobileError={this.state.mobileError}
                                        doorNo={this.state.doorNo} doorNoError={this.state.doorNoError}
                                        street={this.state.street} streetError={this.state.streetError}
                                        city={this.state.city} cityError={this.state.cityError}
                                        state={this.state.state} stateError={this.state.stateError}
                                        pinCode={this.state.pinCode} pinCodeError={this.state.pinCodeError}
                                        handleAddressInputChange={this.handleAddressInputChange}
                                        handleAddressInputUpdate={this.handleAddressInputUpdate}
                                    /> : null
                                }
                                {
                                    this.state.page[this.state.currenPageIndex] === 'Summary'?
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <SummaryComponent 
                                            customerName={this.state.firstName}
                                            customerEmail={this.state.email}
                                            customerMobile={this.state.mobile}
                                            customerDoorNo={this.state.doorNo}
                                            customerStreet={this.state.street}
                                            customerCity={this.state.city}
                                            customerState={this.state.state}
                                            customerPincode={this.state.pinCode}
                                        />
                                    </Suspense> : null
                                }
                                {
                                    this.state.page[this.state.currenPageIndex] === 'Payment'?
                                    <PaymentComponent 
                                    paymentCardName={this.state.paymentCardName}
                                    paymentCardNumber={this.state.paymentCardNumber}
                                    paymentCardDate={this.state.paymentCardDate}
                                    paymenCardCvv={this.state.paymenCardCvv}
                                    paymentCardNameError={this.state.paymentCardNameError}
                                    paymentCardNumberError={this.state.paymentCardNumberError}
                                    paymentCardDateError={this.state.paymentCardDateError}
                                    paymentCardCvvError={this.state.paymentCardCvvError}
                                    showPaymentButton={this.state.showPaymentButton}
                                    selectPaymentName={this.state.paymentMethodName}
                                    showPaymentDetails={this.state.showPaymentDetails}
                                    handlePaymentCardInputChange={this.handlePaymentCardInputChange}
                                    handlePaymentInputChange={this.handlePaymentInputChange}
                                    /> : null
                                }
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-6">
                                        {
                                            this.state.currenPageIndex > 0 ? <button className="shipping-page-back-button" onClick={this.handlePrevious}><i className="fa fa-angle-left" style={{marginRight:'2px'}}></i> Return to {this.state.page[this.state.currenPageIndex - 1]}</button> : null
                                        }
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-6">
                                        {
                                            this.state.currenPageIndex < 2 ? <button className="shipping-page-next-button" onClick={this.handleNext}>Continue to {this.state.page[this.state.currenPageIndex + 1]} <i className="fa fa-angle-right" style={{marginLeft:'2px'}}></i></button> : null
                                        }
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div className="col-md-5">
                                <Suspense fallback={<div>Loading...</div>}>
                                    <ShippingPriceSummary />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        productListReducer : state.productListReducer
    }
}


export default connect(mapStateToProps) (Shipping)