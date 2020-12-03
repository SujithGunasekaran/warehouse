import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Forms from '../component/Forms';
import '../css/login.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserName, setUserEmail } from '../actions/AuthenticationAction';
import { url } from '../config';
import MaterialLinearProgress from '../component/MaterialLinearProgress';


class Login extends Component{

    constructor(props)
    {
        let loggedIn = false;
        const userToken = sessionStorage.getItem('userToken');
        if(userToken !== null){
            loggedIn = true
        }
        super(props);
        this.state={
            userName:'',password:'',userNameError:'',passwordError:'',
            formName:['userName','password'],loggedIn,responseError:false,loadingProgress:false
        }
    }
   

    handleInputChange = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }

    handleInputUpdate = (e) =>{
        var inputFormError;
        this.setState({responseError : false})
        this.state.formName.map((inputName) => {
            if(e.target.name === inputName){
                inputFormError = inputName+'Error';
                this.setState({[inputFormError] : ''})
            }
        })
    }

    handleSubmit = (e) =>
    {
        e.preventDefault();
        var formValidation = this.validateForm()
        if(formValidation){
            this.setState({ loadingProgress : true })
            const username = this.state.userName;
            const password = this.state.password;
            const userInfoLogin = {username : username, password : password}
            axios.post(`${url}/userInfo/login`,userInfoLogin)
            .then((responseData) => {
                if(responseData.status === 200){
                    this.setState({ loadingProgress : false })
                    this.props.setUserName(responseData.data.username)
                    this.props.setUserEmail(responseData.data.email)
                    sessionStorage.setItem('userToken','ashdfiuhsdihfsi!@#@!#adHUDHUHUIAAI')
                    this.setState({loggedIn : true})
                }
            })
            .catch( err => {
                this.setState({ loadingProgress : false })
                this.setState({responseError : 'Invalid Username or Password'})
            })
        }
    }

    validateForm = () =>
    {
        var inputNameError;
        var result = true;
        this.state.formName.map((inputName) => {
            if(inputName === 'userName'){
                if(this.state[inputName] === ''){
                    inputNameError = inputName+'Error';
                    this.setState({[inputNameError] : 'Please Enter Username'})
                    result = false;
                }
            }
            if(inputName === 'password'){
                if(this.state[inputName] === ''){
                    inputNameError = inputName+'Error';
                    this.setState({[inputNameError] : 'Please Enter Password'})
                    result = false;
                }
            }
        })

        return result
    }

    render(){

        if(this.state.loggedIn === true){
            return <Redirect to='/'/>
        }

        document.title = "Warehouse | Login"

        return(
            <div className="login-main">
                <div className="container-fluid">
                    {
                        this.state.loadingProgress ? <MaterialLinearProgress /> : null
                    }
                    <div className="row">
                        <div className="col-md-4 mx-auto">
                            <div className="login-company-name">Warehouse</div>
                            {/* <div className="login-company-welcome">Welcome Back !</div> */}
                            <div className="login-form-container">
                                <div className="login-form-heading">Customer Login</div>
                                <hr className="login-form-heading-hr"/>
                                <Forms 
                                    pageName='Login'
                                    userName={this.state.userName}
                                    password={this.state.password}
                                    userNameError={this.state.userNameError}
                                    passwordError={this.state.passwordError}
                                    responseError={this.state.responseError}
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

const mapStateToProps = (state) =>{
    return{
        AuthenticationReducer : state.AuthenticationReducer
    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
        setUserName : (username) => dispatch(setUserName(username)),
        setUserEmail : (email) => dispatch(setUserEmail(email))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Login)