import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BlogPostOne from '../component/BlogPostOne';
import BlogPostTwo from '../component/BlogPostTwo';
import BlogPostThree from '../component/BlogPostThree';
import Header from '../component/Header';
import Footer from '../component/Footer';
import '../css/blogpostPage.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import BlogPost from '../component/BlogPost';
import DiscountDetails from '../component/DiscountDetails';
import { setBlogpostPage } from '../actions/blogPostPageAction';


class BlogPostPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            currentPageIndex : 0,receivedURL:'',pageName:'',blogName:'',totalBlogCount:0,
            pageNameArray:['Setup your Surround sound speaker','Hook up a receiver for your home theater','Top most comfortable headphones']  
        }
    }
    componentDidMount()
    {
        window.scrollTo(0,0);
        var url = window.location.pathname;
        this.setState({receivedURL : window.location.pathname})
        var strURL = url.toString();
        var page_Name = decodeURIComponent(strURL.split("/")[1])
        var blog_Name = decodeURIComponent(strURL.split("/")[2])
        this.setState({pageName : page_Name, blogName: blog_Name})

        this.props.blogPostPageReducer.blogPostPageName.map((name,index) => {
            this.setState({totalBlogCount : index})
            if(blog_Name === name)
            {
                this.setState({ currentPageIndex : index })
            }
        })

        this.props.setBlogpostPage(this.state.pageNameArray)
    }

    
   
    static getDerivedStateFromProps (props,state)
    {
        window.scrollTo(0,0);
        var url = window.location.pathname;
        var strURL = url.toString();
        var blog_Name = decodeURIComponent(strURL.split("/")[2])
        props.blogPostPageReducer.blogPostPageName.map((name,index) => {
            state.totalBlogCount = index
            if(blog_Name === name)
            {
                state.currentPageIndex = index;
                return{
                    currentPageIndex : index
                }
            }
        })
        state.blogName = blog_Name;
    }
   

    render()
    {
        const { blogPostPageName } = this.props.blogPostPageReducer;

        document.title = "Warehouse | Blog"

        return(
            <div className="main-main-div">
                <div className="header-sticky-display">
                    <Header/>
                </div>
                {/* <Header /> */}
                <div className="blog-page-main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8">
                                {
                                    blogPostPageName[this.state.currentPageIndex] === 'Setup your Surround sound speaker' ?
                                    <BlogPostOne />:null
                                }
                                {
                                    blogPostPageName[this.state.currentPageIndex] === 'Hook up a receiver for your home theater' ?
                                    <BlogPostTwo />:null
                                }
                                {
                                    blogPostPageName[this.state.currentPageIndex] === 'Top most comfortable headphones' ?
                                    <BlogPostThree />:null
                                }
                                <div className="blog-page-btn-display">
                                    {
                                        this.state.currentPageIndex >= this.state.totalBlogCount - 1 ? <button className="blog-page-btn-previous"><Link to={`/blog/${blogPostPageName[this.state.currentPageIndex - 1]}`}><ArrowBackIosIcon style={{fontSize:'12px'}} className="blog-page-arrow-icon" /> Previous Article</Link></button> :null 
                                    }
                                    {
                                        this.state.currentPageIndex <= this.state.totalBlogCount - 1 ? <button className="blog-page-btn-next"><Link to={`/blog/${blogPostPageName[this.state.currentPageIndex + 1]}`}>Next Article <ArrowForwardIosIcon style={{fontSize:'12px'}} className="blog-page-arrow-icon" /></Link></button> :null
                                    }
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog-discount-container">
                                    <div className="blog-discount-heading">
                                        Join Us
                                    </div>
                                    <div className="blog-discount-para">Subscribe to get notified about product launches and special offers.</div>
                                    <input type="email" placeholder="Your email" className="blog-discount-text-field" />
                                    <button className="blog-discount-btn">Subscribe</button>
                                    <div className="blog-discount-para">100% free, Unsubscribe any time!</div>
                                </div>
                                <BlogPost fromPage="BlogPostPage"/>
                                {/* <path stroke="#1e2d7d" d="M23 7l-10 5L1 6M13 12v11"></path> */}
      
                            </div>
                        </div>
                        <DiscountDetails />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        blogPostPageReducer : state.blogPostPageReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setBlogpostPage : data => dispatch(setBlogpostPage(data))
    };
};

export default connect(mapStateToProps,mapDispatchToProps) (BlogPostPage)