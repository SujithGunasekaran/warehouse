import React, { Component } from 'react';
import Forms from '../component/Forms';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import ProgressLoading from '../component/MaterialLinearProgress';
import '../css/forgotPassword.css';
import { url } from '../config';

class ForgotPassword extends Component
{

    constructor(props){
        const token = sessionStorage.getItem('userToken')
        let loggedIn = false;
        if(token !== null){
            loggedIn = true
        }
        super(props);
        this.state={
            formField:['userName','email','password'],
            userName:'',email:'',password:'',
            userNameError:'',emailError:'',passwordError:'',
            currentPageIndex:1,showProgressLoading:false,
            responseError : '', responseSuccess : '',loggedIn
        }
    }

    handleInputChange = (e) =>{
        this.setState({ [e.target.name] : e.target.value })
    }

    handleInputUpdate = (e) =>{
        let inputFormError;
        this.setState({ responseError  : '' })
        this.state.formField.map((fieldName) => {
            if(fieldName === e.target.name){
                inputFormError = fieldName+'Error';
                this.setState({ [inputFormError] : '' })
            }
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        var validateForm = this.validateForm()
        if(validateForm){
            this.setState({ showProgressLoading : true })
            if(this.state.currentPageIndex === 1){
                const username = this.state.userName
                const email = this.state.email
                const userInfo = {username : username, email : email}
                axios.post(`${url}/userInfo/fogotPassword/recovery`,userInfo)
                .then((responseData)=>{
                    if(responseData.status === 200){
                        this.setState({ currentPageIndex : this.state.currentPageIndex + 1, showProgressLoading : false })
                    }
                })
                .catch( err => {
                    this.setState({responseError : 'Invalid Username or Password', showProgressLoading : false})
                })
            }
            if(this.state.currentPageIndex === 2){
                const email = this.state.email
                const password = this.state.password
                const newPassword = {email : email, password : password}
                axios.post(`${url}/userInfo/passwordUpdate`,newPassword)
                .then((responseData) => {
                    if(responseData.status === 200){
                        this.setState({ responseSuccess : 'Password Updated Successfully' })
                        this.setState({ showProgressLoading : false })
                        this.resetFormInput()
                    }
                })
                .catch((err)=>{
                    this.setState({ showProgressLoading : false })
                    console.log(err)
                })
            }
        }
    }

    resetFormInput = () =>{
        this.state.formField.map((fieldName)=>{
            this.setState({ [fieldName] : '' })
        })
        this.setState({ currentPageIndex : this.state.currentPageIndex - 1 })
    }

    validateForm = () =>{
        var inputFormError;
        var result = true
        this.state.formField.map((fieldName)=>{
            if(this.state.currentPageIndex === 1 && fieldName !== 'password')
            {
                if(this.state[fieldName] === ''){
                    inputFormError = fieldName+'Error'
                    this.setState({ [inputFormError] : `Please Enter ${fieldName}` })
                    result = false
                }
            }
            if(this.state.currentPageIndex === 2 && fieldName === 'password'){
                if(this.state[fieldName] === ''){
                    inputFormError = fieldName+'Error'
                    this.setState({ [inputFormError] : `Please Enter ${fieldName}` })
                    result = false
                }
                if(this.state[fieldName] !== '' && this.state[fieldName].length < 9){
                    inputFormError = fieldName+'Error'
                    this.setState({ [inputFormError] : `Password Must be Atleast 8 character of length` })
                    result = false
                }
            }
        })
        return result
    }

    handlePrevious = () =>{
        this.setState({ currentPageIndex : this.state.currentPageIndex - 1 })
    }


    render(){

        if(this.state.loggedIn === true){
            return <Redirect to='/'/>
        }

        document.title = "Warehouse | Forgot Password"

        return(
            <div className="forgot-main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 mx-auto">
                            <div className="forgot-company-name">Warehouse</div>
                            <div className="forgot-form-container">
                                {
                                    this.state.showProgressLoading === true ?
                                    <ProgressLoading /> : null
                                }
                                <div className="forgot-form-heading">Forgot Password</div>
                                <hr className="forgot-form-heading-hr"/>
                                <Forms 
                                    pageName='ForgotPassword'
                                    userName={this.state.userName}
                                    password={this.state.password}
                                    userNameError={this.state.userNameError}
                                    email={this.state.email}
                                    emailError={this.state.emailError}
                                    passwordError={this.state.passwordError}
                                    currentPageIndex={this.state.currentPageIndex}
                                    responseError={this.state.responseError}
                                    responseSuccess={this.state.responseSuccess}
                                    handlePrevious={this.handlePrevious}
                                    handleInputChange={this.handleInputChange}
                                    handleInputUpdate={this.handleInputUpdate}
                                    handleSubmit={this.handleSubmit}
                                />
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="login-footer">
                                <Link to='/'>Home</Link>
                                <Link to='/About'>About</Link>
                                <Link to='/Contact'>Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ForgotPassword