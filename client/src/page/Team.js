import React, { Component } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import '../css/team.css';
import team_main from '../image/team_main.webp';
import DiscountDetails from '../component/DiscountDetails';


class Team extends Component
{

    componentDidMount()
    {
        window.scrollTo(0,0);
    }

    render()
    {

        document.title = "Warehouse | Team"

        return(
            <div className="main-main-div">
                <div className="header-sticky-display">
                    <Header/>
                </div>
                {/* <Header /> */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 p-0">
                            <img className="d-block w-100 carsole-slide1-image" src={team_main} alt="First slide" />
                            <div className="carousel-caption d-none d-md-block" >
                                <p className="team-page-image-heading">Meet the Team</p>
                                <p className="team-page-image-para">We at Warehouse work hard every day to enrich the lives of consumers through inspiration, whether they come to us online, visit our stores or invite us into their homes.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-page-main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 mx-auto">
                                <div className="team-page-heading">Founder</div>
                                <div className="team-page-name-container">
                                    <div className="team-page-name-info">Developer</div>
                                    <div className="team-page-name-info2">CEO</div>
                                </div>
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

export default Team