import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import blogPostInfo from '../Json/blogPost.json';
import '../css/blogPost.css';
import { connect } from 'react-redux';
import { setBlogpostPage } from '../actions/blogPostPageAction';


class BlogPost extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            pageName:['Setup your Surround sound speaker','Hook up a receiver for your home theater','Top most comfortable headphones']  
        }
    }
    componentDidMount()
    {
        this.props.setBlogpostPage(this.state.pageName)
    }

    render()
    {
        var colSize;
        if(this.props.fromPage === 'Home')
        {
            colSize = 'col-md-4';
        }
        else
        {
            colSize = 'col-md-12';
        }
        return(
            <div className="blogpost-main">
                <div className="blogpost-main-heading">Blog Post</div>
                <div className="row">
                    {
                        blogPostInfo.BlogPost.map((blogPostObject,index) => {
                            return(
                                <div className={`${colSize} blogpost-container-link`} key={index}>
                                    {
                                        blogPostObject.BlogPostInfo.map((blogPostObjectInfo,index) => {
                                            if(this.props.fromPage === 'Home')
                                            {
                                                return(
                                                        <div className="blogpost-container" key={index}>
                                                            <Link to={`/blog/${blogPostObjectInfo.Title}`}>
                                                                <img src={process.env.PUBLIC_URL + blogPostObjectInfo.ImageUrl} className="blogpost-image" alt="one"/>
                                                                <div className="blogpost-image-name">{blogPostObjectInfo.Title}</div>
                                                                <div className="blogpost-info-display">
                                                                    <div className="blogpost-info-author">{blogPostObjectInfo.Author}</div>
                                                                    <div className="blogpost-info-date">{blogPostObjectInfo.PublishedDate}</div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    )
                                            }
                                            else
                                            {
                                                return(
                                                    <div className="blogpost-small-container" key={index}>
                                                        <Link to={`/blog/${blogPostObjectInfo.Title}`}>
                                                            <div className="blogpost-small-container-display">
                                                                <img src={process.env.PUBLIC_URL + blogPostObjectInfo.ImageUrl} className="blogpost-small-image" alt="one"/>
                                                                <div className="blogpost-small-info-display">
                                                                    <div className="blogpost-small-heading">{blogPostObjectInfo.Title}</div>
                                                                    <div className="blogpost-small-date">{blogPostObjectInfo.PublishedDate}</div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                )
                                            }

                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    blogPostPageReducer : state.blogPostPageReducer
});

const mapDispatchToProps = (dispatch) => {
    return {
        setBlogpostPage : data => dispatch(setBlogpostPage(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (BlogPost);