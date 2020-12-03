import React from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPasswordForm(props){

    const { userName, email, password, userNameError, emailError, passwordError, handleInputChange, handleInputUpdate
        ,handleSubmit, currentPageIndex, handlePrevious, responseError, responseSuccess } = props

    return(
        <div className="row">
            <div className="col-md-12">
                <form>
                    {
                        currentPageIndex === 1 ?
                        <div>
                            <div className="forgot-form-label">Username</div>
                            <input
                                type="text"
                                name="userName"
                                placeholder="Enter UserName"
                                className={userNameError === '' ? 'forgot-form-input-field' : 'fogot-form-input-field forgot-form-input-field-error'}
                                value={userName}
                                onChange={handleInputChange}
                                onInputCapture={handleInputUpdate}
                            />
                            {
                                userNameError !== ''?
                                <div className="forgot-input-error">{userNameError}</div>:null
                            } 
                            <div className="forgot-form-label">Email</div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email Address"
                                className={emailError === '' ? 'forgot-form-input-field' : 'fogot-form-input-field forgot-form-input-field-error'}
                                value={email}
                                onChange={handleInputChange}
                                onInputCapture={handleInputUpdate}
                            />
                            {
                                emailError !== ''?
                                <div className="forgot-input-error">{emailError}</div>:null
                            } 
                        </div>: null
                    }
                    {
                        currentPageIndex === 2 ?
                        <div>
                            <div className="forgot-form-label">Password</div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter New Password"
                                className={passwordError === '' ? 'forgot-form-input-field' : 'fogot-form-input-field forgot-form-input-field-error'}
                                value={password}
                                onChange={handleInputChange}
                                onInputCapture={handleInputUpdate}
                            />
                            {
                                passwordError !== ''?
                                <div className="forgot-input-error">{passwordError}</div>:null
                            }
                        </div> : null
                    }
                    {
                        responseError !== '' ? 
                        <div className="forgot-input-error">{responseError}</div> : null
                    }
                    {
                        currentPageIndex === 1 ?
                        <div className="row">
                            <div className="col-md-6"></div>
                            <div className="col-md-6">
                                <button className="forgot-next-btn" onClick={handleSubmit}>
                                    Next
                                </button>
                            </div>
                        </div> :
                        <div className="row">
                             <div className="col-md-6 col-sm-6">
                                <button className="forgot-next-btn" onClick={handlePrevious}>
                                    Back
                                </button>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <button className="forgot-next-btn" onClick={handleSubmit}>
                                    Reset Password
                                </button>
                            </div>
                        </div> 
                    }
                    {
                        responseSuccess !== '' ? 
                        <div className="forgot-input-success">{responseSuccess} Please <Link to='/Login'>Login</Link></div> : null
                    }
                </form>
            </div>
        </div>
    )
}