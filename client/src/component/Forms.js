import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ForgotPasswordForm from './ForgotPasswordForm';


export default function Forms(props){
    if(props.pageName === 'Login'){
        return (
            <LoginForm
                userName={props.userName}
                password={props.password}
                userNameError={props.userNameError}
                passwordError={props.passwordError}
                responseError={props.responseError}
                handleInputChange={props.handleInputChange}
                handleInputUpdate={props.handleInputUpdate}
                handleSubmit={props.handleSubmit}
            />
        )
    }
    if(props.pageName === 'Signup'){
        return (
            <SignupForm 
                userName={props.userName}
                email={props.email}
                password={props.password}
                userNameError={props.userNameError}
                emailError={props.emailError}
                passwordError={props.passwordError}
                responseError={props.responseError}
                successResponse={props.successResponse}
                handleInputChange={props.handleInputChange}
                handleInputUpdate={props.handleInputUpdate}
                handleSubmit={props.handleSubmit}
            />
        )
    }
    if(props.pageName === 'ForgotPassword'){
        return(
            <ForgotPasswordForm
                userName={props.userName}
                password={props.password}
                userNameError={props.userNameError}
                email={props.email}
                emailError={props.emailError}
                passwordError={props.passwordError}
                currentPageIndex={props.currentPageIndex}
                responseError={props.responseError}
                responseSuccess={props.responseSuccess}
                handlePrevious={props.handlePrevious}
                handleInputChange={props.handleInputChange}
                handleInputUpdate={props.handleInputUpdate}
                handleSubmit={props.handleSubmit}
            />
        )
    }
}
