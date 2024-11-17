import React from "react";
import { Helmet } from "react-helmet";
import telegram_logo from '../../shared/assets/icons/telegramwhite.png';
import phone_logo from '../../shared/assets/icons/phonewhite.png';
import instagram_logo from '../../shared/assets/icons/instagramwhite.png';
import mail_logo from '../../shared/assets/icons/email.png';
import './ContactInfo.css'; 

const ContactInfo = ({ contact, isDarkMode }) => {
    return (
        <div className={`contact-info-desc ${isDarkMode ? 'dark' : ''}`}>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
            </Helmet>

            <div className="contact-text">
                { contact }
            </div>

            <div className="contact-content">
                <ul>
                    <li className="contact-item">
                        <img src={mail_logo} alt="mail" className="contact-icon mail-icon" width={25} height={25} />
                        <a href="mailto:manager@libertgroup.pl" className="contact-link">manager@libertgroup.pl</a>
                    </li>
                    <li className="contact-item">
                        <img src={phone_logo} alt="phone" className="contact-icon phone-icon" width={25} height={25} />
                        <a href="tel:+380634076931" className="contact-link">+380 634 076 931 - Viber</a>
                    </li>
                    <li className="contact-item">
                        <img src={phone_logo} alt="phone" className="contact-icon phone-icon" width={25} height={25} />
                        <a href="tel:+48883104082" className="contact-link">+48 883 104 082 - WhatsApp/Telegram</a> 
                    </li>
                    <li className="contact-item">
                        <img src={telegram_logo} alt="telegram" className="contact-icon telegram-icon" width={25} height={25} />
                        <a href="https://t.me/rybusik07" className="contact-link" target="_blank" rel="noopener noreferrer">Telegram</a>
                    </li>
                    <li className="contact-item">
                        <img src={instagram_logo} alt="instagram" className="contact-icon instagram-icon" width={25} height={25} />
                        <a href="https://www.instagram.com/libert.courier/" className="contact-link" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ContactInfo;