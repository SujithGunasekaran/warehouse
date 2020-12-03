import React from 'react';
import '../css/blogPostTwo.css'
import blog_two_one from '../image/blogpost_image/blog_two_one.jpg';
import blog_two_two from '../image/blogpost_image/blog_two_two.webp';
import blog_two_three from '../image/blogpost_image/blog_two_three.webp';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function BlogPostTwo()
{
    return(
        <div className="blog-two-main">
            <div className="blog-two-heading">Hook up a receiver for your home theater</div>
            <div className="blog-two-date-display">
                <div className="blog-two-author">Michaël Gallego</div>
                <div className="blog-two-author-date">Oct 15, 2017</div>
            </div>
            <img src={blog_two_one} alt='blog_two_one' className="blog-two-image" />
            <div className="blog-two-one-para">A receiver is that big, heavy thing that you plug your speakers and other components into (like a DVD player, TV, CD player, Xbox, PlayStation, iPod, and etc.). It's the "brain" of the show, really. The idea of connecting all your components to a receiver is the concept of audio/video switching, allowing you to switch to different video sources (like TV, DVD, camcorder) on your TV and thus changing the audio source accordingly - all without touching anything but the receiver.</div>
            <div className="blog-two-highlight">It's the "brain" of the show, really.</div>
            <div className="blog-two-one-para">Of course, the main purpose behind audio/video switching with a receiver is to drive audio to external speakers, like surround sound or stereo speakers.</div>
            <img src={blog_two_two} className="blog-two-image" alt='blog_two_two'/>
            <div className="blog-two-one-para">Most receivers have a plethora of inputs; up to 8 speakers and a subwoofer (more commonly, 5.1, or five speakers and a subwoofer), several video inputs, and even HDMI inputs. You could plug your Xbox, Plasma, and DVD player into the receiver and use one remote to switch between all the different video sources (games, TV, DVD video) and have your speakers pump out surround-sound. Let's start with inputs and outputs. If you don't understand something, read through the entire How-To as most of it will be explained in detail.
            Keep in mind that a receiver is the hub of your entire home theatre, so this How-To will actually guide you through the basics of connecting your complete home theater.</div>
            <div className="blog-two-heading">The heck on the back of your receiver?</div>
            <div className="blog-two-one-para">I'm going to go over just about anything that you would find on the back of your receiver. The one I'm basing this guide off of is a Harman Kardon AVR-247 I'm going to start from the top left of the unit and work my way to the right, then I'll start at the left of the next row and so on.</div>
            <img src={blog_two_three} className="blog-two-image" alt='blog_two_three'/>
            <div className="blog-two-one-para">The first three inputs are for antennas. An FM antenna cable would slide on to the first jack while two speaker wires would plug into the remaining slots for AM. Of course, you don't have to plug your antennas in, but if you'd like AM/FM reception through your speakers, you'll want to go ahead and do that. These are standard connections, so if you lose one of your antennas, just go buy another for a few bucks.<br/>
            You've probably heard of composite video. It's a very basic video connection used by most any component (TV, DVD, VCR especially). It's common and its cheap. As such, its very low quality.<br/>
            Composite uses an RCA cable for video (yellow) and two more RCA cables for audio (red and white, stereo). The problem is that a composite video cable combines luminance and chrominance in the same cable, reducing the quality of the picture. You lose a lot of sharpness, and the color begins to degrade from the original source. It's useful when you need the extra input or the device you're connecting only has composite video. Otherwise, use something else, like component video. Sounds similar; very different.<br/></div>
            <div className="blog-one-social-link">
                <div className="blog-one-social-link-heading">Share Post</div>
                <a href="some"><TwitterIcon style={{fontSize:'18px'}}/></a>
                <a href="some"><InstagramIcon style={{fontSize:'18px'}}/></a>
                <a href="some"><LinkedInIcon style={{fontSize:'18px'}}/></a>
            </div> 
            <hr className="blog-two-hr" />
        </div>
    )
}

export default BlogPostTwo