import React from 'react';
import '../css/brand.css';
import { Link } from 'react-router-dom';
import BrandImage from '../Json/brandImages.json';

function Brand(props)
{

    return(
        <div className="brand-main">
            {
                props.fromPage !== 'BrandPage' ?
                <div className="row">
                    <div className="col-md-12">
                        <div className="brand-heading-display">
                            <div className="brand-heading-one">Brands we distribute</div>
                            <Link to="/Brand"><div className="brand-heading-two">View All</div></Link>
                        </div>
                    </div>
                </div> : null
            }
            <div className="row">
                {
                    BrandImage.BrandImages.map((individualImage,index)=>{
                        if((props.fromPage === 'Home' && index < 6) || (props.fromPage !== 'Home')){
                            return(
                                <div className="col-6 col-sm-4 col-md-2 brand-image-background" key={index}>
                                    <Link to={`/BrandDetails/${individualImage.BrandName}`}>
                                        <img src={process.env.PUBLIC_URL + individualImage.ImageSrc} className="brand-image" alt='brand_logos'/>
                                    </Link>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Brand