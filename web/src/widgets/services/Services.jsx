import React from "react";
import { Link } from "react-router-dom";
import door_logo from '../../shared/assets/images/doors-removebg-preview.png';
import logistic_logo from '../../shared/assets/images/logistic-removebg-preview.png';
import { Helmet } from "react-helmet";
import './Services.css';

const Services = ({ isDarkMode, service_name, service1_link, service2_link }) => {
    return (
        <div className="services-container">
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
            </Helmet>
            <div className="service-content">
                <div className={`service-logo ${isDarkMode ? 'dark' : ''}`}>
                    <div className={`logo-background ${isDarkMode ? 'dark' : ''}`}>
                        <img src={door_logo} alt="door" className="service-image" />
                        <span className="service-text"><Link to={service1_link} className="service-text-link">FULFILLMENT</Link></span>
                    </div>
                </div>
            </div>
            <div className="service-content">
                <div className={`service-logo ${isDarkMode ? 'dark' : ''}`}>
                    <div className={`logo-background ${isDarkMode ? 'dark' : ''}`}>
                        <img src={logistic_logo} alt="logistic" className="service-image" />
                        <span className="service-text"><Link to={service2_link} className="service-text-link">{ service_name }</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
