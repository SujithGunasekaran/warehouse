import React, { Component } from 'react';
import Forms from '../component/Forms';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import MaterialLinearProgress from '../component/MaterialLinearProgress';
import { url } from '../config';


class Signup extends Component{


    constructor(props)
    {
        const token = sessionStorage.getItem('userToken')
        let loggedIn = false;
        if(token !== null){
            loggedIn = true;
        }
        super(props);
        this.state={
            userName:'',email:'',password:'',userNameError:'',emailError:'',passwordError:'',
            formName:['userName','email','password'],loggedIn,successResponse:false,responseError:'',
            loadingProgress:false
        }
    }


    handleInputChange = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }

    handleInputUpdate = (e) => {
        var inputFormError;
        this.state.formName.map((inputForm) => {
            if(inputForm === e.target.name){
                inputFormError = inputForm+'Error';
                this.setState({[inputFormError] : ''})
            }
        })
        this.setState({ responseError : '' })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        var validationForm = this.validateForm()
        if(validationForm){
            this.setState({ loadingProgress : true })
            const username = this.state.userName;
            const email = this.state.email;
            const password = this.state.password;
            const newUserDate = {username : username, email : email, password : password}
            axios.post(`${url}/userInfo/signup/addNewuser`,newUserDate)
            .then((responseData) => {
                if(responseData.status === 200){
                    this.setState({ loadingProgress : false })
                    this.setState({successResponse : true})
                    this.resetData()
                }
            })
            .catch(err => {
                this.setState({ loadingProgress : false })
                console.log("Error")
                this.setState({responseError : 'Username Alreadt Exist'})
            })
        }
    }

    resetData = () =>{
        this.setState({userName : '', email : '', password : ''})
    }

    validateForm = () =>{
        var inputFormError;
        var result = true;
        this.state.formName.map((inputForm) =>{
            if(inputForm === 'userName'){
                if(this.state[inputForm] === ''){
                    inputFormError=inputForm+'Error';
                    this.setState({[inputFormError] : 'Please Enter Username'})
                    result = false
                }
            }
            if(inputForm === 'email'){
                if(this.state[inputForm] === ''){
                    inputFormError=inputForm+'Error';
                    this.setState({[inputFormError] : 'Please Enter Email Address'})
                    result = false
                }
            }
            if(inputForm === 'password'){
                if(this.state[inputForm] === ''){
                    inputFormError=inputForm+'Error';
                    this.setState({[inputFormError] : 'Please Enter Password'})
                    result = false
                }
                if( this.state[inputForm] !== '' && this.state[inputForm].length<8){
                    inputFormError=inputForm+'Error';
                    this.setState({[inputFormError] : 'Password Lenght must be atleast 8 Character'})
                    result = false
                }
            }
        })

        return result
    }


    render(){

        if(this.state.loggedIn === true){
            return <Redirect to='/'/>
        }

        document.title = "Warehouse | Signup"

        return(
            <div className="signup-main">
                <div className="container-fluid">
                    {
                        this.state.loadingProgress ? <MaterialLinearProgress /> : null
                    }
                    <div className="row">
                        <div className="col-md-4 mx-auto">
                            <div className="signup-company-name">Warehouse</div>
                            <div className="signup-form-container">
                                <div className="signup-form-heading">Create Account</div>
                                <hr className="signup-form-heading-hr"/>
                                <Forms 
                                    pageName='Signup'
                                    userName={this.state.userName}
                                    email={this.state.email}
                                    password={this.state.password}
                                    userNameError={this.state.userNameError}
                                    emailError={this.state.emailError}
                                    passwordError={this.state.passwordError}
                                    responseError={this.state.responseError}
                                    successResponse={this.state.successResponse}
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
                            <div className="signup-footer">
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

export default Signup