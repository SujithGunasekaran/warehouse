import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Avatar from '@material-ui/core/Avatar';
import '../css/Profile.css';


function Profile(props){

    const token = sessionStorage.getItem('userToken')
    let loggedIn = false;
    if(token !== null){
        loggedIn = true;
    }

    document.title = "Warehouse | Profile"

    return(
        loggedIn === true ?
        <div>
            <Header />
            <div className="profile-page-main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 mx-auto">
                            <div className="profile-page-container">
                                <div className="profile-page-user-container">
                                    <Avatar style={{backgroundColor:'white',margin:'auto',top:'60px',color:'rgb(21, 11, 59)',fontSize:'25px'}}>{props.AuthenticationReducer.userName.charAt(0)}</Avatar>
                                    <div className="profile-page-user-letter">Welcome, {props.AuthenticationReducer.userName}</div>
                                </div>
                                <div className="profile-page-info-tag">Username :</div>
                                <div className="profile-page-info-name">{props.AuthenticationReducer.userName}</div>
                                <div className="profile-page-info-tag">Email Address :</div>
                                <div className="profile-page-info-name">{props.AuthenticationReducer.emailAddress}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        : <Redirect to='/' />
    )
}

const mapStateToProps = (state) =>{
    return{
        AuthenticationReducer : state.AuthenticationReducer
    }
}

export default connect(mapStateToProps)(Profile)