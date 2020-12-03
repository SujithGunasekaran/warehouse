import React from 'react';
import '../css/ourStore.css';
import store_pic from '../image/store_pic.webp';


function OurStore()
{
    return(
        <div className="store-main">
            <div className="row">
                <div className="col-md-12">
                    <div className="store-main-heading">Our Store</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <div className="store-container">
                        <div className="store-main-heading">Warehouse Showroom</div>
                        <div className="store-address">Allentown Blvd, Pennsylvania, USA</div>
                        <div className="store-address">Monday - Friday: 10AM - 9PM<br/>
                            Saturday: 11AM - 9PM<br/>
                            Sunday: Closed<br/>
                        </div>
                        <button className="store-direction-btn">Get Direction</button>
                    </div>
                </div>
                <div className="col-md-7">
                    <img src={store_pic} className="store-image" alt='store' />
                </div>
            </div>
        </div>
    )
}

export default OurStore