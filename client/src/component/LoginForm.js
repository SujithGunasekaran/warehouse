import React from 'react';
import { Link } from 'react-router-dom'

export default function LoginForm(props){

    const { userName, password, userNameError, passwordError, handleInputChange, handleInputUpdate, handleSubmit, responseError } = props; 

    return(
        <div className="row">
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
                    <div className="login-forgot-password"><Link to='/ForgotPassword'>Forgor Password?</Link></div>
                    <button className="login-btn" onClick={handleSubmit}>Login</button>
                    {
                        responseError !== '' ? 
                        <div className="login-input-error">{responseError}</div> : null
                    }
                    <div className="login-new-account">Don't have an Account? <Link to='/Signup'>SignUp</Link></div>
                </form>
            </div>
        </div>
    )
}