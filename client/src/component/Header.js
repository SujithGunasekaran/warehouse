import React, { Component } from 'react';
import headerLogo from '../image/headerlogo.png';
import '../css/header.css';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import Badge from '@material-ui/core/Badge';
import {connect} from 'react-redux';
import { clearData } from '../actions/AuthenticationAction';
import SearchDropdown from '../component/SearchDropDown';
import SearchIndex from '../Json/searchName.json';
class Header extends Component
{

    constructor(props)
    {   
        const token = sessionStorage.getItem('userToken')
        let loggedIn = false
        super(props);
        if(token !== null){
            loggedIn = true
        }
        this.state={
            loggedIn,cartCount:0,
            searchName : ''
        }
    }

    componentDidMount()
    {

        this.setState({userName : this.props.AuthenticationReducer.userName})

        let userLogin = document.getElementsByClassName('header-account-user-login-name')
        for(var i=0;i<userLogin.length;i++){
            userLogin[i].addEventListener('click',function(){
                this.classList.toggle('header-account-user-login-name-active');
                var dropdown = this.nextElementSibling;
                if(dropdown.style.maxHeight){
                    dropdown.style.maxHeight = null;
                }
                else{
                    dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
                }
            })
        }

        let mobileUser = document.getElementsByClassName('mobile-login-icon')
        for(i=0;i<mobileUser.length;i++){
            mobileUser[i].addEventListener('click',function(){
                this.classList.toggle('header-account-mobile-user-login-name-active');
                var mobileDropdown = this.nextElementSibling;
                if(mobileDropdown.style.maxHeight){
                    mobileDropdown.style.maxHeight = null;
                }
                else{
                    mobileDropdown.style.maxHeight = mobileDropdown.scrollHeight + 'px';
                }
            })
        }  
        if(this.state.loggedIn === true){
            this.setState({cartCount : this.props.CartReducer.cartCount})
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.CartReducer.cartCount !== this.props.CartReducer.cartCount){
            this.setState({cartCount : this.props.CartReducer.cartCount})
        }
    }


    handleClearReduxStore = () =>{
        this.props.clearData()
    }

    handleSearch = (e) =>{
        let value = e.target.value
        this.setState(()=>{
            let searchName = value;
            return { searchName : searchName }
        })
        // this.searchFilter()
    }

    searchFilter(){
        
        return SearchIndex.ProductName.filter((names)=> names.toLocaleLowerCase().includes(this.state.searchName.toLocaleLowerCase()))
    }

    handleCloseSearch = () =>{
        this.setState({ searchName : '' })
    }

    render()
    {

        const { userName } = this.props.AuthenticationReducer;


        return(
            <div>
                <div className="header-main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8 col-sm-5 col-md-2 order-md-1 order-sm-1 order-1">
                                <div className="header-logo-display">
                                    <Link to='/'><img src={headerLogo} className="header-logo-image" alt='headerlogo'/></Link>
                                </div>
                            </div>
                            <div className="col-12 col-sm-5 col-md-6 order-md-2 order-sm-2 order-5">
                                
                                <div className="header-search-display">
                                    <input type="text" className="header-search-input" value={this.state.searchName} onChange={this.handleSearch} placeholder="Search.." />
                                    
                                    <div className="header-search-icon">
                                        <SearchRoundedIcon style={{color:'white',fontSize:'28px'}}/>
                                    </div>
                                    
                                    <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon" ></span>
                                    </button>
                                </div>
                                {
                                    this.state.searchName !== '' ?
                                    <SearchDropdown 
                                        searchItems={this.searchFilter()}
                                        handleCloseSearch={this.handleCloseSearch}
                                    /> : null
                                }
                            </div>
                            <div className="col-2 col-sm-0 col-md-1 order-md-3 order-sm-3 order-2 header-side-border1">
                                <div className="header-currancy-name-display">
                                    <div className="header-currancy-name">Currancy</div>
                                    <div className="header-india-name">&#8377; IND</div>
                                </div>
                            </div>
                            <div className="col-2 col-sm-1 col-md-2 order-md-4 order-sm-4 order-3 header-side-border2">
                                {
                                    this.state.loggedIn === true ?
                                    <div className="header-login-icon">
                                        <PersonRoundedIcon className="mobile-login-icon" style={{fontSize:'28px',color : 'white'}}/>
                                        <div className="header-account-mobile-user-login-dropdown">
                                            <div className="dropdown-menu-mobile-user-display">
                                                <PersonRoundedIcon className="mobile-login-icon" style={{fontSize:'20px',marginTop:'15px',marginBottom:'5px',color : '#1e2d7d'}}/>
                                                <Badge badgeContent={this.state.cartCount === 0 ? '0' : this.state.cartCount} color="primary">
                                                    <Link to='/Cart'><ShoppingCartIcon className="mobile-login-icon" style={{fontSize:'20px',marginTop:'15px',marginBottom:'5px',color : '#1e2d7d'}}/></Link>
                                                </Badge>
                                                <ExitToAppRoundedIcon className="mobile-login-icon" style={{fontSize:'20px',marginTop:'15px',marginBottom:'5px',color : '#1e2d7d'}}/>
                                            </div>
                                        </div>
                                    </div> : 
                                    <div className="header-login-icon">
                                        <Link to='/Login'><ExitToAppRoundedIcon style={{fontSize:'28px',color : 'white'}}/></Link>
                                    </div>
                                }
                                {
                                    this.state.loggedIn === true ?
                                    <div>
                                        <div className="header-account-user-login-name">{userName}</div>
                                        <div className="header-account-user-login-dropdown">
                                            <div className="dropdown-menu-welcome">Welcome, {userName}</div>
                                            <hr className="dropdown-menu-welcome-hr"/>
                                            <div className="dropdown-menu-user-display">
                                                <PersonRoundedIcon className="mobile-login-icon" style={{fontSize:'20px',color : '#1e2d7d'}}/>
                                                <div className="dropdown-menu-user-cart"><Link to='/Profile'>Profile</Link></div>
                                            </div>
                                            <div className="dropdown-menu-user-display">
                                                <ShoppingCartIcon className="mobile-login-icon" style={{fontSize:'20px',color : '#1e2d7d'}}/>
                                                <div className="dropdown-menu-user-cart"><Link to='/Cart'>Cart</Link></div>
                                            </div>
                                            <div className="dropdown-menu-user-display">
                                                <ExitToAppRoundedIcon className="mobile-login-icon" style={{fontSize:'20px',color : '#1e2d7d'}}/>
                                                <div className="dropdown-menu-user-cart" onClick={this.handleClearReduxStore}><Link to='/Logout'>Log out</Link></div>
                                            </div>
                                        </div>
                                    </div> :
                                    <div className="header-login-name-display">
                                        <div className="header-login-name"><Link to="/Login">Login</Link> / <Link to="/Signup">Signup</Link></div>
                                        <div className="header-account-name">My account</div>
                                    </div>
                                }      
                            </div>
                            <div className="col-2 col-sm-1 col-md-1 order-md-5 order-sm-5 order-4 header-side-border3">
                                <div className="header-cart-display">
                                    <Badge badgeContent={this.state.cartCount === 0 ? '0' : this.state.cartCount} color='secondary'>
                                        <Link to='/Cart'><ShoppingCartIcon style={{color : 'white',fontSize:'28px'}} /></Link>
                                    </Badge>
                                    <div className="header-cart-name"><Link to='/Cart'>Cart</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'white',borderBottom:'1px solid #e1e3e4',overFlow:'visible'}}>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0" style={{paddingLeft:'5px'}}>
                            <li className="nav-item dropdown list-dropdown">
                                <div className="nav-link-display">
                                    <a className="nav-link" href="javascript void(0)" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        All Product <ExpandMoreRoundedIcon style={{fontSize:'20px',marginTop:'-1px'}} />
                                    </a>
                                    {/* <ExpandMoreRoundedIcon className="nav-link-down-icon" style={{fontSize:'25px'}} /> */}
                                </div>
                                <div className="dropdown-menu dropdown-menu-triangle" aria-labelledby="navbarDropdownMenuLink">
                                    <div className="dropdown-menu-flex">
                                        <div className="dropdown-menu-flex-inside1">
                                            <div className="dropdown-content-head">Audio</div>
                                            <Link className="dropdown-content-list1" to="/Shop/Headphones">HeadPhones</Link>
                                            <Link className="dropdown-content-list2" to="/Shop/Ear Buds">Earbuds</Link>
                                            <Link className="dropdown-content-list2" to="/Shop/Portable">Portable Speakers</Link>
                                            <Link className="dropdown-content-list2" to="/Shop/Portable">Turntables</Link>
                                            <Link className="dropdown-content-list2" to="/Shop/Portable">Walkmans</Link>
                                            <Link className="dropdown-content-list2" to="/Shop/Audio">Audio Accessories</Link>
                                            <Link className="dropdown-content-list2" to="/Shop/Headphones">Shop All</Link>
                                        </div>
                                        <div className="dropdown-menu-flex-inside2">
                                            <div className="dropdown-content-head">Wi-fi</div>
                                            <Link className="dropdown-content-list1" to="/Shop/Bluetooth">Speakers</Link>
                                            <Link className="dropdown-content-list2" to="/Shop/Bluetooth">SubWoofers</Link>
                                            <Link className="dropdown-content-list2" to="/Shop/Bluetooth">Sound Bars</Link>
                                            <Link className="dropdown-content-list2" to="/Shop/Amplifier">Amplifiers</Link>
                                            <Link className="dropdown-content-list2" to="/Shop/Audio">Home Cinema</Link>
                                            <Link className="dropdown-content-list2" to="/Shop/AV Receivers">A/V Receivers</Link>
                                            <Link className="dropdown-content-list2" to="/Shop/Bluetooth">Shop All</Link>
                                        </div>
                                        <div className="dropdown-menu-flex-inside2">
                                            <div className="dropdown-content-head">Tv & Entertainment</div>
                                            <Link className="dropdown-content-list1" to="/Shop/All TVs">LED TVs</Link>
                                            <Link className="dropdown-content-list2" to="/Shop/All TVs">OLED TVs</Link>
                                            <Link className="dropdown-content-list2" to="/Shop/Projectors">Projectors</Link>
                                            <Link className="dropdown-content-list2" to="/Shop/Projectors">Blu-Ray & DVD Players</Link>
                                            <Link className="dropdown-content-list2" to="/Shop/All TVs">TV Accessories</Link>
                                            <Link className="dropdown-content-list2" to="/Shop/All TVs">Shop All</Link>
                                        </div>
                                        <div className="dropdown-menu-flex-inside2">
                                            <div className="dropdown-content-head">Our Selections</div>
                                            <Link className="dropdown-content-list1" to="/Shop/Bluetooth">Waterproof</Link>
                                            <Link className="dropdown-content-list2" to="/Shop/Portable">Portable</Link>
                                            <Link className="dropdown-content-list2" to="/Shop/Bluetooth">Bluetooth</Link>
                                            <Link className="dropdown-content-list2" to="/Shop/Accessories">Accessories</Link>
                                            <Link className="dropdown-content-list2" to="/Shop/Accessories">Shop All</Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown list-dropdown">
                                <Link to="/Shop/New Arrivals" className="nav-link">New Arraivals</Link>
                            </li>
                            <li className="nav-item dropdown list-dropdown">
                                <Link to="/Shop/Sales" className="nav-link">Sales</Link>
                            </li>
                            <li className="nav-item dropdown list-dropdown">
                                <Link to="/Collection" className="nav-link">All Collections</Link>
                            </li>
                            <li className="nav-item dropdown list-dropdown">
                                <Link to="/Brand" className="nav-link">Brands</Link>
                            </li>
                            <li className="nav-item dropdown list-dropdown">
                                <div className="nav-link-display">
                                    <a className="nav-link" href="javascript vaoid(0)" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Information  <ExpandMoreRoundedIcon style={{fontSize:'20px',marginTop:'-1px'}} />
                                    </a>
                                    {/* <ExpandMoreRoundedIcon className="nav-link-down-icon" style={{fontSize:'25px'}} /> */}
                                </div>
                                <div className="dropdown-menu dropdown-menu-triangle" aria-labelledby="navbarDropdownMenuLink">
                                    <div className="dropdown-menu-flex-information">
                                        <div className="dropdown-menu-flex-inside-information">
                                            <Link className="dropdown-content-list-information" to="/Team">Meet Our Team</Link>
                                            <Link className="dropdown-content-list-information" to="/About">About</Link>
                                            <Link className="dropdown-content-list-information" to="/Faq">FAQ</Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown list-dropdown">
                                <Link to="/Contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateTopProps = (state) =>{
    return{
        AuthenticationReducer : state.AuthenticationReducer,
        CartReducer : state.CartReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        clearData : () => dispatch(clearData())
    }
}

export default connect(mapStateTopProps,mapDispatchToProps) (Header)