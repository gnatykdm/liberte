import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import instagram_logo from '../../assets/icons/instagramwhite.png';
import adress_logo from '../../assets/icons/location.png';
import phone_logo from '../../assets/icons/phonewhite.png';
import telegram_logo from '../../assets/icons/telegramwhite.png';
import mail_logo from '../../assets/icons/email.png';
import arrow_logo from '../../assets/icons/right-arrow.png';
import './Footer.css';

// Reusable Footer Column Component
const FooterColumn = ({ title, links, arrow }) => {

  const handleLinkClick = () => {
    window.scrollTo(0, 0); 
  };

  return (
    <div className="footer-column">
      <div className="footer-column-name">
        <h3>{title}</h3>
        {arrow && <img src={arrow_logo} alt="arrow" width={15} height={15} className="footer-img" />}
      </div>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link 
              to={link.path} 
              className="li-link" 
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Automatically scroll to top on location change
const ScrollToTopOnLocationChange = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const SocialMediaIcons = () => (
  <div className="social-media">
    <a href="https://www.instagram.com/libert.group?igsh=MW5uN296NzBhYzB3bQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <img src={instagram_logo} alt="Instagram" />
    </a>
    <a href="https://t.me/rybusik07" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
      <img src={telegram_logo} alt="Telegram" />
    </a>
  </div>
);

// Main Footer Component
const Footer = ({ head, head2, services, about, contacts, main_link, about_link, contact_link, head3, service1_link, service2_link, service1, service2, service3, service4, service3_link, service4_link, service5_link, service5 }) => {
  const menuLinks = [
    { label: head, path: main_link },
    { label: contacts, path: contact_link },
    { label: about, path: about_link },
  ];

  const serviceLinks = [
    { label: service1, path: service1_link },
    { label: service2, path: service2_link },
    { label: service3, path: service3_link },
    { label: service4, path: service4_link },
    { label: service5, path: service5_link },
  ];

  return (
    <div className="footer">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>

      {/* This component handles automatic scroll on path change */}
      <ScrollToTopOnLocationChange />

      <div className="footer-container">
        <FooterColumn title={head2} links={menuLinks} arrow />
        <FooterColumn title={services} links={serviceLinks} arrow />

        <div className="footer-column contacts">
          <div className="footer-column-name">
            <h3>{head3}</h3>
            <img src={arrow_logo} alt="arrow" width={15} height={15} className="footer-img" />
          </div>
          <ul>
            <li>
              <img src={mail_logo} alt="mail" />
              <a href="mailto:manager@libertgroup.pl" className="footer-link">manager@libertgroup.pl</a>
            </li>
            <li>
              <img src={phone_logo} alt="phone" />
              <a href="tel:+380634076931" className="footer-link">+380 634 076 931 - Viber</a>
            </li>
            <li>
              <img src={phone_logo} alt="phone" />
              <a href="tel:+48883104082" className="footer-link">+48 883 104 082 - WhatsApp/Telegram</a>
            </li>
            <li>
              <img src={adress_logo} alt="address" />
              Rzeszow, Przemysłowa 6 - Poland
            </li>
          </ul>
          <SocialMediaIcons />
        </div>
      </div>

      <div className="footer-bottom">
        <p>2024 © Libert Group | All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
