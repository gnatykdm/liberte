import React from "react";
import instagram_logo from '../../assets/icons/instagramwhite.png';
import adress_logo from '../../assets/icons/location.png';
import phone_logo from '../../assets/icons/phonewhite.png';
import telegram_logo from '../../assets/icons/telegramwhite.png';
import mail_logo from '../../assets/icons/email.png';
import arrow_logo from '../../assets/icons/right-arrow.png';
import viber_logo from '../../assets/icons/viber.png';
import { Helmet } from "react-helmet";
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = ({ service_drop, head, head2, services, about, contacts,
    main_link, about_link, contact_link, head3, service1_link, service2_link, fulfillment
 }) => {
    return (
        <div className="footer">
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
            </Helmet>

            <div className="footer-container">
                <div className="footer-column contacts">
                <div className="footer-column-name">
                        <h3>{ head2 }</h3>
                        <img src={arrow_logo} alt="arrow" width={15} height={15} className="footer-img"/>
                    </div>
                    <ul>
                        <li><Link to={main_link} style={{ textDecoration: 'none', color: '#ffffff' }}>{ head }</Link></li>
                        <li><Link to={contact_link} style={{ textDecoration: 'none', color: '#ffffff' }}>{ contacts }</Link></li>
                        <li><Link to={about_link} style={{ textDecoration: 'none', color: '#ffffff' }}>{ about }</Link></li>
                    </ul>
                </div>
                <div className="footer-column contacts">
                <div className="footer-column-name">
                        <h3>{ services }</h3>
                        <img src={arrow_logo} alt="arrow" width={15} height={15} className="footer-img"/>
                    </div>
                    <ul>
                        <li><Link to={service1_link} className="li-link">{ service_drop }</Link></li>
                        <li><Link to={service2_link} className="li-link">{ fulfillment }</Link> </li>
                    </ul>
                </div>
                <div className="footer-column contacts">
                    <div className="footer-column-name">
                        <h3>{ head3 }</h3>
                        <img src={arrow_logo} alt="arrow" width={15} height={15} className="footer-img"/>
                    </div>
                    <ul>
                        <li><img src={phone_logo} alt="phone" /> +380 634 076 931 - viber </li>
                        <li><img src={phone_logo} alt="phone" /> +48 883 104 083 - whatsapp/telegram </li>
                        <li><img src={adress_logo} alt="address" />Rzeszow, Przemysłowa 6 - Poland</li>
                        <li><img src={mail_logo} alt="mail" /> manager@libertgroup.pl </li>
                        
                    </ul>
                    <div className="social-media">
                        <a href="https://www.instagram.com/libert.fulfillment/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <img src={instagram_logo} alt="Instagram"/>
                        </a>
                        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                            <img src={telegram_logo} alt="Telegram" />
                        </a>
                        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                            <img src={viber_logo} alt="Viber" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>2024 © Libert Group | All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;