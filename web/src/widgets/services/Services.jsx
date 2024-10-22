import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import garage_logo from '../../shared/assets/images/garage_logo.png';
import doors_logo from '../../shared/assets/images/doors_logo.png';
import envelope_log from '../../shared/assets/images/envelope_logo.png';
import carbox_logo from '../../shared/assets/images/carbox_logo.png';
import international_delivery from '../../shared/assets/images/internation_delivery_logo.png';
import './Services.css';

const Services = ({ isDarkMode, service1_name, service2_name, service3_name, service4_name, service1_link, service2_link,
    service3_link, service4_link, service5_name, service5_link
 }) => {
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
                        <img src={doors_logo} alt="door" className="service-image" width={320} height={320}/>
                        <span className="service-text"><Link to={service1_link} className="service-text-link">{service1_name}</Link></span>
                    </div>
                </div>
            </div>
            <div className="service-content">
                <div className={`service-logo ${isDarkMode ? 'dark' : ''}`}>
                    <div className={`logo-background ${isDarkMode ? 'dark' : ''}`}>
                        <img src={carbox_logo} alt="logistic" className="service-image" width={320} height={320}/>
                        <span className="service-text"><Link to={service2_link} className="service-text-link">{ service2_name }</Link></span>
                    </div>
                </div>
            </div>
            <div className="service-content">
                <div className={`service-logo ${isDarkMode ? 'dark' : ''}`}>
                    <div className={`logo-background ${isDarkMode ? 'dark' : ''}`}>
                        <img src={envelope_log} alt="logistic" className="service-image" width={320} height={320}/>
                        <span className="service-text"><Link to={service3_link} className="service-text-link">{ service3_name }</Link></span>
                    </div>
                </div>
            </div>
            <div className="service-content">
                <div className={`service-logo ${isDarkMode ? 'dark' : ''}`}>
                    <div className={`logo-background ${isDarkMode ? 'dark' : ''}`}>
                        <img src={garage_logo} alt="logistic" className="service-image" width={320} height={320}/>
                        <span className="service-text"><Link to={service4_link} className="service-text-link">{ service4_name }</Link></span>
                    </div>
                </div>
            </div>
            <div className="service-content">
                <div className={`service-logo ${isDarkMode ? 'dark' : ''}`}>
                    <div className={`logo-background ${isDarkMode ? 'dark' : ''}`}>
                        <img src={international_delivery} alt="logistic" className="service-image" width={320} height={320}/>
                        <span className="service-text"><Link to={service5_link} className="service-text-link">{ service5_name }</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
