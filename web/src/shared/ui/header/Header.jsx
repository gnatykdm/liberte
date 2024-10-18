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
import './Header.css';
import { MobileMessage } from "../../../entity/messagedto/MobileMessage";
import { MobileMessageDto } from "../../../entity/messagedto/MobileMessageDto";
import { Link, useLocation } from "react-router-dom";

const Header = ({ 
    image, head, services, service_drop, about, contacts, call, order, social_networks, name_type, tel_type, 
    main_link, about_link, contact_link, toggleTheme, isDarkMode, service1_link, service2_link, messageStatus,
    service1, service2, service3, service4, service5, service3_link, service4_link, service5_link
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
                    <img src={libert_logo} alt="Libert Logo" className="logo" />
                    <div className="language-switcher" onClick={() => toggleDropdown('isLanguageDropdownOpen')} ref={languageDropdownRef}>
                        <img src={image} alt="Current Flag" className="flag-icon" />
                        <img src={isDarkMode ? arrow_white : arrow_black} alt="Arrow" className={`arrow-icon ${isDarkMode ? 'dark' : ''}`} />
                        {dropdownStates.isLanguageDropdownOpen && (
                            <div className="dropdown-menu">
                                <div className="dropdown-item">
                                    <img src={britain_flag} alt="kingdom" />
                                    <Link to="/en" className="dropdown-language">English</Link>
                                </div>
                                <div className="dropdown-item">
                                    <img src={ukraine_flag} alt="ukraine" />
                                    <Link to="/" className="dropdown-language">Українська</Link>
                                </div>
                                <div className="dropdown-item">
                                    <img src={poland_flag} alt="poland" />
                                    <Link to="/pl" className="dropdown-language">Polski</Link>
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
                                    <Link to={service1_link} className="service-dropdown-link">{ service1 }</Link>
                                </div>
                                <div className="dropdown-item-services">
                                    <Link to={service2_link} className="service-dropdown-link">{service2}</Link>
                                </div>
                                <div className="dropdown-item-services">
                                    <Link to={service3_link} className="service-dropdown-link">{service3}</Link>
                                </div>
                                <div className="dropdown-item-services">
                                    <Link to={service4_link} className="service-dropdown-link">{service4}</Link>
                                </div>
                                <div className="dropdown-item-services">
                                    <Link to={service5_link} className="service-dropdown-link">{service5}</Link>
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
                            <div className="modal modal-content">
                                <button className="modal-close" onClick={handleModalClose} aria-label="Close Modal">×</button>
                                <h3>{call}</h3>
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
                                        aria-label="Phone"
                                    />
                                    <button type="submit" className="order-button">{order}</button>
                                </form>
                                {isMessageSent && <p className={`sent-message-text-modal ${isDarkMode ? 'dark' : ''}`}>{ messageStatus }</p>}
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
                            <Link to={about_link} className={`mobile-nav-link ${isActiveLink(about_link)}`}>{about}</Link>
                            <Link to={contact_link} className={`mobile-nav-link ${isActiveLink(contact_link)}`}>{contacts}</Link>
                            <div className="mobile-nav-link dropdown-toggle" onClick={() => toggleDropdown('isServicesDropdownOpen')}>
                                {services}
                                {dropdownStates.isServicesDropdownOpen && (
                                    <div className="dropdown-menu-mobile show">
                                        <div className="dropdown-item-services-mobile">FULFILLMENT</div>
                                        <div className="dropdown-item-services-mobile">{service_drop}</div>
                                    </div>
                                )}
                            </div>
                        </nav>
                        <div className="mobile-modal-footer">
                            <div className="mobile-modal-footer-description">{social_networks}</div>
                            <div className="social-media-mobile">
                                <img src={instagram_logo} alt="Instagram" />
                                <img src={telegram_logo} alt="Telegram" />
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
