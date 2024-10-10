import React from "react";
import door_logo from '../../shared/assets/images/doors-removebg-preview.png';
import logistic_logo from '../../shared/assets/images/logistic-removebg-preview.png';
import arrow from '../../shared/assets/icons/right-arrow_purple.png';
import { Helmet } from "react-helmet";
import './Services.css';

const Services = ({ more }) => {
    return (
        <div className="services-container">
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
            </Helmet>
            <div className="service-content">
                <div className="service-logo">
                    <div className="logo-background">
                        <img src={door_logo} alt="door" />
                    </div>
                </div>
                <div className="service-name">FULFILLMENT</div>
                <div className="service-description">
                    <a href="#" className="description-link">{ more }</a>
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
            <div className="service-content">
                <div className="service-logo">
                    <div className="logo-background">
                        <img src={logistic_logo} alt="logistic" />
                    </div>
                </div>
                <div className="service-name">LOGISTICS</div>
                <div className="service-description">
                    <a href="#" className="description-link">{ more }</a>
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
        </div>
    );
}

export default Services;
