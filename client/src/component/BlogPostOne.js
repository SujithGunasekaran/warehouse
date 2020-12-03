import React from 'react';
import '../css/blogpostOne.css';
import blog_one_one from '../image/blogpost_image/blog_one_one.webp';
import blog_one_two from '../image/blogpost_image/blog_one_two.webp';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function BlogPostOne()
{
   return(
       <div className="blog-one-main">
            <div className="blog-one-heading">Setup your Surround sound speaker</div>
            <div className="blog-one-date-display">
                <div className="blog-one-author">Michaël Gallego</div>
                <div className="blog-one-author-date">Apr 15, 2019</div>
            </div>
            <img src={blog_one_one} alt='blog_one_one' className="blog-one-image" />
            <div className="blog-one-para">
                I will make the assumption that you have a surround sound or home theater receiver and start from there. There are 3 main home theater speaker setups which you will see termed 5.1, 6.1, and 7.1 channel surround. You will also see mentioned the terms Dolby Digital, DTS, and Dolby Pro Logic. Let's dispense with the latter first: if your receiver is only Pro Logic (only older receivers at this point) you do not need to worry about 6.1 or 7.1 surround. There are some other formats such as Dolby Digital EX, Dolby Pro-logic IIx, Dolby TrueHD, DTS neo:6.1, DTS-ES, True-Surround XT, and undoubtedly more.
            </div>
            <div className="blog-one-heading">A world of compromise</div>
            <div className="blog-one-one-para">
                The two factors to consider are:<br/>
                1. How many channels does your system permit<br/>
                2. Do you want to buy that many speakers?<br/>
                All the receivers that support more than 5.1 channels will also work fine with a 5.1 channel setup. Obviously, 7.1 will provide better surround sound than 5.1, but at the expense of two extra speakers. If you have a limited budget you will have to decide whether to buy 5.1 higher quality speakers, or go for cheaper speakers to allow for 7.1 channels. By the way, the .1 channel is the home theater sub-woofer. The sub-woofer is, in my opinion, really needed for home theater. A system will work without it, but I don't recommend going without for home theater. The center channel is also very important for home theater, serving to anchor the sound to the video screen. If you go to our site by the link at the bottom of this article you can see images for the descriptions following. These are the recommended placements according to Dolby Labs.
            </div>
            <div className="blog-one-heading">Sub-woofer Setup</div>
            <div className="blog-one-one-para">Your sub-woofer may have a switch for Dolby Digital / Pro Logic. If you have a Dolby Digital capable receiver set it to that even if you are using Pro Logic. The same goes if you have multiple inputs on your sub. If your input is labeled LFE it is the equivalent of a Dolby Digital input. You want to use the input to the RCA style plug (or plugs) if you are using the sub-woofer in a surround system.</div>
            <img src={blog_one_two} className="blog-one-image" alt='blog-one-two'/>
            <div className="blog-one-para">If you have speaker level binding post inputs, these are almost always for using the sub-woofer in a non surround sound speaker setup. Preset the sub-woofer level control to about halfway before running the white noise test tone to calibrate your receiver speaker levels. You absolutely must run the test and balance your speaker levels to have the surround system perform properly.
            Don't worry about the crossover frequency control on the sub for Dolby Digital or better systems. For Pro Logic set it to the point where bass in your main speakers drops off, which will require looking at the documentation for your speakers.</div>
            <div className="blog-one-social-link">
                <div className="blog-one-social-link-heading">Share Post</div>
                <a href="some"><TwitterIcon style={{fontSize:'18px'}}/></a>
                <a href="some"><InstagramIcon style={{fontSize:'18px'}}/></a>
                <a href="some"><LinkedInIcon style={{fontSize:'18px'}}/></a>
            </div> 
            <hr className="blog-one-hr"/>
       </div>
    )
}

export default BlogPostOne

