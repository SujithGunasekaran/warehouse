import React from 'react';
import '../css/signup.css';
import { Link } from 'react-router-dom';


export default function SignupForm(props){

    const {userName, email, password, userNameError, emailError, passwordError, handleInputChange, handleInputUpdate,
        handleSubmit,successResponse, responseError } = props;

    return(
        <div>
            <div className="col-md-12">
                <form>
                    <div className="login-form-label">Username</div>
                    <input 
                        type="text"
                        name="userName"
                        placeholder="Enter Username"
                        className={userNameError === '' ? 'login-form-input-field' : 'login-form-input-field login-form-input-field-error'}
                        value={userName}
                        onChange={handleInputChange}
                        onInputCapture={handleInputUpdate}
                    />
                    {
                        userNameError !== ''?
                        <div className="login-input-error">{userNameError}</div>:null
                    }
                    {
                        responseError !== '' ?
                        <div className="login-input-error">{responseError}</div>:null
                    }
                    <div className="login-form-label">Email</div>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Enter Email Address"
                        className={emailError === '' ? 'login-form-input-field' : 'login-form-input-field login-form-input-field-error'}
                        value={email}
                        onChange={handleInputChange}
                        onInputCapture={handleInputUpdate}
                    />
                    {
                        emailError !== '' ?
                        <div className="login-input-error">{emailError}</div> : null
                    }
                    <div className="login-form-label">Password</div>
                    <input 
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        className={passwordError === '' ? 'login-form-input-field' : 'login-form-input-field login-form-input-field-error'}
                        value={password}
                        onChange={handleInputChange}
                        onInputCapture={handleInputUpdate}
                    />
                    {
                        passwordError !== '' ?
                        <div className="login-input-error">{passwordError}</div> : null
                    }
                    <button className="login-btn" onClick={handleSubmit}>Create Account</button>
                    {
                        successResponse ?
                        <div className="signup-success-message">Account Created Successfully <Link to='/Login'>Click Here</Link> to Login</div> : null
                    }
                </form>
            </div>
        </div>
    )
}