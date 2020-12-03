import React from 'react';
import '../css/newsLetter.css';


function NewsLetter()
{
    return(
        <div className="news-main">
            <div className="news-heading">
                Let's keep in touch!
            </div>
            <div className="news-info">Subscribe to our weekly newsletter and receive exclusive offers on products you love!</div>
            <div className="news-email-field-display">
                <input type="email" className="news-input-field" placeholder="Your email" />
                <button className="news-sub-btn">subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter