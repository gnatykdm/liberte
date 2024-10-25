import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import libert_logo from '../../assets/images/libertlogo-removebg-preview.png';
import arrow_black from '../../assets/icons/arrow-down-black.png';
import arrow_white from '../../assets/icons/arrow-down-white.png';
import instagram_logo from '../../assets/icons/instagramwhite.png';
import telegram_logo from '../../assets/icons/telegramwhite.png';
import ukraine_flag from '../../assets/icons/ukraine.png';
import poland_flag from '../../assets/icons/poland.png';
import britain_flag from '../../assets/icons/united-kingdom.png';
import sun from '../../assets/icons/sun.png';
import moon from '../../assets/icons/moon.png';
import libert_logo_white from '../../assets/images/libert_logo_white.png';
import './Header.css';
import { MobileMessage } from "../../../entity/messagedto/MobileMessage";
import { MobileMessageDto } from "../../../entity/messagedto/MobileMessageDto";
import { Link, useLocation } from "react-router-dom";

const Header = ({ 
    image, head, services, photo_link, about, contacts, call, order, social_networks, name_type, tel_type, 
    main_link, about_link, contact_link, toggleTheme, isDarkMode, service1_link, service2_link, messageStatus,
    service1, service2, service3, service4, service5, service3_link, service4_link, service5_link, languagelink_1, languagelink_2, languagelink_3
}) => {
    const [dropdownStates, setDropdownStates] = useState({
        isLanguageDropdownOpen: false,
        isServicesDropdownOpen: false,
        isMobileMenuOpen: false
    });
    const [formData, setFormData] = useState({ name: '', phone: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMessageSent, setIsMessageSent] = useState(false);

    const location = useLocation();

    const languageDropdownRef = useRef(null);
    const servicesDropdownRef = useRef(null);

    const toggleDropdown = (dropdown) => {
        setDropdownStates((prevState) => ({
            ...prevState,
            [dropdown]: !prevState[dropdown]
        }));
    };

    const handleModalOpen = () => {
        setIsModalOpen(true);
        setIsMessageSent(false); 
    };

    const handleLinkClick = (e) => {
        e.stopPropagation(); 
    };
    

    const handleModalClose = () => setIsModalOpen(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
                setDropdownStates((prevState) => ({ ...prevState, isLanguageDropdownOpen: false }));
            }
            if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
                setDropdownStates((prevState) => ({ ...prevState, isServicesDropdownOpen: false }));
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const isActiveLink = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    const messageService = new MobileMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, phone } = formData;
        const messageDto = new MobileMessageDto(name, phone);
        setFormData({ name: '', phone: '' });
        

        try {
            await messageService.saveMessage(messageDto);
            setIsMessageSent(true); 
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <header className={`header ${isDarkMode ? 'dark' : ''}`}>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
            </Helmet>

            <div className="header-container">
                <div className="logo-section">
                <Link to={photo_link}>
                    <img src={isDarkMode ? libert_logo_white : libert_logo} alt="Libert Logo" className={`logo ${isDarkMode ? 'dark' : ''} ${isActiveLink(main_link)}`} /></Link>

                    <div className="language-switcher" onClick={() => toggleDropdown('isLanguageDropdownOpen')} ref={languageDropdownRef}>
                        <img src={image} alt="Current Flag" className="flag-icon" />
                        <img src={isDarkMode ? arrow_white : arrow_black} alt="Arrow" className={`arrow-icon ${isDarkMode ? 'dark' : ''}`} />
                        {dropdownStates.isLanguageDropdownOpen && (
                <div className="dropdown-menu">
        <div className="dropdown-language">
            {/* Array to hold language options */}
            {[
                { link: languagelink_1, flag: britain_flag, label: "English", alt: "UK Flag" },
                { link: languagelink_2, flag: ukraine_flag, label: "Українська", alt: "Ukraine Flag" },
                { link: languagelink_3, flag: poland_flag, label: "Polski", alt: "Poland Flag" }
            ].map((language, index) => (
                <Link key={index} to={language.link} className="dropdown-item">
                    <img src={language.flag} alt={language.alt} />
                    {language.label}
                </Link>
            ))}
        </div>
    </div>
)}
</div>
</div>


                <nav className="navigation">
                    <Link to={main_link} className={`nav-link ${isDarkMode ? 'dark' : ''} ${isActiveLink(main_link)}`}>{head}</Link>
                    <div className={`nav-link ${isDarkMode ? 'dark' : ''} ${isActiveLink('/services')}`} onClick={() => toggleDropdown('isServicesDropdownOpen')} ref={servicesDropdownRef}>
                        {services}
                        {dropdownStates.isServicesDropdownOpen && (
    <div className="dropdown-menu">
        <div className="dropdown-item-services">
            {/* Array to hold service options */}
            {[
                { link: service2_link, label: service2 },
                { link: service3_link, label: service3 },
                { link: service4_link, label: service4 },
                { link: service5_link, label: service5 },
                { link: service1_link, label: service1 }
            ].map((service, index) => (
                <div className="dropdown-item-services" key={index}>
                    <Link to={service.link} className="service-dropdown-link">
                        {service.label}
                    </Link>
                </div>
            ))}
        </div>
    </div>
)}

                    </div>
                    <Link to={about_link} className={`nav-link ${isDarkMode ? 'dark' : ''} ${isActiveLink(about_link)}`}>{about}</Link>
                    <Link to={contact_link} className={`nav-link ${isDarkMode ? 'dark' : ''} ${isActiveLink(contact_link)}`}>{contacts}</Link>
                </nav>

                <div className="header-actions">
                    <button className="call-order-btn" onClick={handleModalOpen}>{call}</button>
                    {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal modal-content" role="dialog" aria-modal="true">
                        <button 
                            className="modal-close" 
                            onClick={handleModalClose}
                            aria-label="Close modal"
                        >×</button>
                        {/* Условный рендеринг формы или сообщения об успешной отправке */}
                        {isMessageSent ? (
                            <div className="message-sent">
                                <h4>{messageStatus}</h4> {/* Сообщение вместо формы */}
                            </div>
                        ) : (
                            <div className="message-order-sent-form">
                                <h3>{order}</h3>
                                <form onSubmit={handleSubmit}>
                                <input
                                    type="text-name"
                                    name="name"
                                    placeholder={name_type}
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    aria-label="Name"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder={tel_type}
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    aria-label="Phone Number"
                                />
                                <button type="submit" className="order-button">{order}</button>
                            </form>
                            </div>
                        )}
                    </div>
                </div>
            )}
                    <div className="theme-switcher" onClick={toggleTheme}>
                        <img src={isDarkMode ? moon : sun} alt="Theme Icon" className="theme-icon" />
                        <div className={`toggle-switch ${isDarkMode ? 'active' : ''}`}></div>
                    </div>
                    <div className={`mobile-menu-button ${isDarkMode ? 'dark' : ''}`} onClick={() => toggleDropdown('isMobileMenuOpen')}>
                        <div className={`bar ${isDarkMode ? 'dark' : ''}`}></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </div>

            {dropdownStates.isMobileMenuOpen && (
                <div className="mobile-menu-overlay">
                    <div className="mobile-menu">
                        <button className="burger-menu" onClick={() => toggleDropdown('isMobileMenuOpen')}>
                            <span className="burger-line"></span>
                            <span className="burger-line"></span>
                            <span className="burger-line"></span>
                        </button>
                        <nav className="mobile-navigation">
                            <Link to={main_link} className={`mobile-nav-link ${isActiveLink(main_link)}`}>{head}</Link>
                            <div className="mobile-nav-link dropdown-toggle" onClick={(e) => { e.stopPropagation(); toggleDropdown('isServicesDropdownOpen'); }}>
                                    {services}
                                    {dropdownStates.isServicesDropdownOpen && (
                                        <div className="dropdown-menu-mobile show" ref={servicesDropdownRef}>
                                            <div className="dropdown-item-services-mobile">
                                                <Link to={service1_link} className="service-dropdown-link" onClick={handleLinkClick}>{service1}</Link>
                                            </div>
                                            <div className="dropdown-item-services-mobile">
                                                <Link to={service2_link} className="service-dropdown-link" onClick={handleLinkClick}>{service2}</Link>
                                            </div>
                                            <div className="dropdown-item-services-mobile">
                                                <Link to={service3_link} className="service-dropdown-link" onClick={handleLinkClick}>{service3}</Link>
                                            </div>
                                            <div className="dropdown-item-services-mobile">
                                                <Link to={service4_link} className="service-dropdown-link" onClick={handleLinkClick}>{service4}</Link>
                                            </div>
                                            <div className="dropdown-item-services-mobile">
                                                <Link to={service5_link} className="service-dropdown-link" onClick={handleLinkClick}>{service5}</Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            <Link to={about_link} className={`mobile-nav-link ${isActiveLink(about_link)}`}>{about}</Link>
                            <Link to={contact_link} className={`mobile-nav-link ${isActiveLink(contact_link)}`}>{contacts}</Link>
                        </nav>
                        <div className="mobile-modal-footer">
                            <div className="mobile-modal-footer-description">{social_networks}</div>
                            <div className="social-media-mobile">
                                <a href="https://www.instagram.com/libert.courier/" target="_blank" rel="noopener noreferrer">
                                <img src={instagram_logo} alt="Instagram" />
                                </a>
                                <a href="https://t.me/rybusik07" target="_blank" rel="noopener noreferrer">
                                    <img src={telegram_logo} alt="Telegram" />
                                </a>
                            </div>

                            <div className="mobile-modal-footer-bottom">
                                <p>2024 © Libert Group | All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header; 