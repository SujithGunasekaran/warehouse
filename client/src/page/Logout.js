import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import ProgressBarLoading from '../component/MaterialLinearProgress';

class Logout extends Component
{
    constructor(props)
    {
        sessionStorage.removeItem('userToken')
        sessionStorage.clear()
        window.localStorage.clear('state')
        super(props);
        this.state={
            redirect : false
        }
    }

    componentDidMount()
    {
        this.id = setTimeout( ()=> this.setState({redirect : true}),2000)
    }
    componentWillUnmount()
    {
        clearTimeout(this.id)
    }

    render()
    {

        document.title = "Warehouse | Logout"

        return(
            <div className="main-main-div">
                <div className="header-sticky-display">
                    <Header/>
                    {
                        this.state.redirect === false ?
                        <ProgressBarLoading /> : null
                    }
                </div>
                {
                    this.state.redirect ?
                    <Redirect to='/'/> : <div style={styles.divStyle}>Yor session getting logged out please wait...</div>
                }
                <Footer/>
            </div>
        )
    }
}

const styles={
    divStyle:{
        marginTop:'55px',
        marginBottom:'55px',
        fontWeight:'bold',
        color:'#1e2d7d',
        fontSize:'24px',
        textAlign:'center'
    }
}


export default Logout