import React from 'react';
import '../css/blogPostThree.css';
import blog_three_one from '../image/blogpost_image/blog_three_one.jpg';
import blog_three_two from '../image/blogpost_image/blog_three_two.webp';
import blog_three_three from '../image/blogpost_image/blog_three_three.webp';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



function BlogPostThree()
{
    return(
        <div className="blog-three-main">
            <div className="blog-three-heading">Top most comfortable headphones</div>
            <div className="blog-three-date-display">
                <div className="blog-three-author">Michaël Gallego</div>
                <div className="blog-three-author-date">Jan 5, 2017</div>
            </div>
            <img src={blog_three_one} className="blog-three-image" alt='blog_three_one'/>
            <div className="blog-three-one-para">Music somehow has a way of influencing just how we actually think and feel. The right kind of music can make us feel invincible and let us take actions that would normally be difficult, or at least challenging to us, while the wrong kind can make us feel inferior and sometimes even powerless. And unlike most other forms of stimulants that can alter perception, music seems like a better alternative, considering that we just need to listen to it.</div>
            <div className="blog-three-one-para">Anyway, to this effect, people in the modern age have come to rely on headphones and headsets to make their musical experience even more worthwhile. After all, keeping your music to yourself can have two benefits. One, you reduce the chance of being a nuisance to others in case the music you're actually listening to isn't the kind that the people around you might not want to hear. Second, by keeping your favorite music focused on yourself, you get more of its power-up effect to yourself.</div>
            <img src={blog_three_two} className="blog-three-image" alt='blog_three-two'/>
            <div className="blog-three-one-para">So now we're going to discuss the top five most comfortable over-ear headphones that are out there, right now. We have the Sol Republic Master Tracks Over-Ear Headphones, AKG K 240 MK II Stereo Studio Headphones, Bowers & Wilkins P7 Over Ear Headphones, Polk Audio AM5118-A Buckle Over-Ear Headphones and BeoPlay H6 Natural Leather Headphones. We're going to measure each of them according to the standards of comfort (how well they fit around your head and ears), durability (how long they actually last and how much bending and stretching they can take before breaking) and, of course, overall quality (do the sounds they make actually match their reputation etc)..</div>
            <div className="blog-three-heading">Sol Republic Master Tracks Over-Ear Headphones</div>
            <div className="blog-three-one-para">We'll start with the Sol Republic Master Tracks Over-Ear Headphones, a product by Sol Republic and by far one of the more popular brands of headphones out there. Thanks to its clear and crisp system for sound and overall comfort, it's probably one of the more prolific of headsets out there. It's fairly easy to operate and, since it's also quite tough, they are also a number one choice for comfort and traveling.</div>
            <img src={blog_three_three} className="blog-three-image" alt='blog_three_three'/>
            <div className="blog-three-heading">AKG K 240 MK II Stereo Studio Headphones</div>
            <div className="blog-three-one-para">Yet another strong contender for the most comfortable over-ear headphones. The AKG K 240 MK II Stereo Studio Headphones boasts some really great qualities that make it comfortable to wear on those long waits or walks. Its sound quality and durability also make it quite popular for people commuting to work or just taking a walk around town, they are also an excellent pair of DJ headphones.</div>
            <div className="blog-three-social-link">
                <div className="blog-three-social-link-heading">Share Post</div>
                <a href="some"><TwitterIcon style={{fontSize:'18px'}}/></a>
                <a href="some"><InstagramIcon style={{fontSize:'18px'}}/></a>
                <a href="some"><LinkedInIcon style={{fontSize:'18px'}}/></a>
            </div>
            <hr className="blog-three-hr"/>
        </div>
    )
}

export default BlogPostThree