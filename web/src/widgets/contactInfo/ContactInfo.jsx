import React from "react";
import { Helmet } from "react-helmet";
import telegram_logo from '../../shared/assets/icons/telegramwhite.png';
import phone_logo from '../../shared/assets/icons/phonewhite.png';
import instagram_logo from '../../shared/assets/icons/instagramwhite.png';
import './ContactInfo.css'; // Подключаем CSS файл

const ContactInfo = () => {
    return (
        <div className="contact-info">
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
            </Helmet>

            <div className="contact-text">
                Переважаєте в інший спосіб?
            </div>
            <div className="contact-content">
                <div className="contact-item">
                    <img src={phone_logo} alt="phone" />
                    <div className="phone_number"> +380982359020 </div>
                </div>
                <div className="contact-item">
                    <img src={telegram_logo} alt="telegram" />
                    <a href="https://t.me/yourusername" className="contact-link">Telegram</a>
                </div>
                <div className="contact-item">
                    <img src={instagram_logo} alt="instagram" />
                    <a href="https://instagram.com/yourusername" className="contact-link">Instagram</a>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
