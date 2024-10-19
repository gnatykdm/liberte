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
                    <li><img src={mail_logo} alt="mail" width={25} height={25} /> manager@libertgroup.pl</li>
                    <li><img src={phone_logo} alt="phone" width={25} height={25} /> +380 634 076 931 - Viber</li>
                    <li><img src={phone_logo} alt="phone" width={25} height={25} /> +48 883 104 083 - WhatsApp/Telegram</li>
                    <li><img src={telegram_logo} alt="telegram" width={25} height={25} />
                        <a href="https://t.me/rybusik07" className="contact-link">Telegram</a>
                    </li>
                    <li><img src={instagram_logo} alt="instagram" width={25} height={25} />
                        <a href="https://www.instagram.com/libert.courier/" className="contact-link">Instagram</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ContactInfo;
