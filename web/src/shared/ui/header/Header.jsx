import React, { useRef, useEffect } from "react";
import { useState } from "react";
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
import { Link, useLocation } from "react-router-dom";  // Import useLocation

const Header = ({ image, head, services, service_drop, about, contacts, call, order, social_networks, name_type, tel_type,
    main_link, about_link, contact_link, toggleTheme, isDarkMode }) => {
    
    // State variables
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    // Use useLocation to track the current path
    const location = useLocation();  // Get the current route

    // Refs for dropdowns
    const languageDropdownRef = useRef(null);
    const servicesDropdownRef = useRef(null);

    // Event handlers
    const toggleLanguageDropdown = () => setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    const toggleServicesDropdown = () => setIsServicesDropdownOpen(!isServicesDropdownOpen);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Имя:', name, 'Телефон:', phone);
        setIsModalOpen(false);
    };

    // Effect to handle clicks outside of dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
                setIsLanguageDropdownOpen(false); // Close if click was outside language dropdown
            }
            if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
                setIsServicesDropdownOpen(false); // Close if click was outside services dropdown
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Function to check active link
    const isActiveLink = (path) => {
        return location.pathname === path ? 'active' : ''; // Return 'active' class if path matches
    };

    return (
        <header className={`header ${isDarkMode ? 'dark' : ''}`}>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
            </Helmet>

            <div className="header-container">
                {/* Logo and Language Switcher */}
                <div className="logo-section">
                    <img src={libert_logo} alt="Libert Logo" className="logo" />
                    <div className="language-switcher" onClick={toggleLanguageDropdown} ref={languageDropdownRef}>
                        <img src={image} alt="Ukrainian Flag" className="flag-icon" />
                        <img src={isDarkMode ? arrow_white : arrow_black} alt="Arrow Down" className={`arrow-icon ${isDarkMode ? 'dark' : ''}`} />
                        {isLanguageDropdownOpen && (
                            <div className="dropdown-menu">
                                <div className="dropdown-item">
                                    <img src={britain_flag} alt="kingdom" />
                                    <Link to="/en" className={"dropdown-language"}>English</Link>
                                </div>
                                <div className="dropdown-item">
                                    <img src={ukraine_flag} alt="ukraine" />
                                    <Link to="/" className={"dropdown-language"}>Українська</Link>
                                </div>
                                <div className="dropdown-item">
                                    <img src={poland_flag} alt="poland" />
                                    <Link to="/pl" className={"dropdown-language"}>Polski</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <nav className="navigation">
                    <Link to={main_link} className={`nav-link ${isDarkMode ? 'dark' : ''} ${isActiveLink(main_link)}`}>{ head }</Link>
                    <div className={`nav-link ${isDarkMode ? 'dark' : ''} ${isActiveLink('/services')}`} onClick={toggleServicesDropdown} ref={servicesDropdownRef}>
                        { services }
                        {isServicesDropdownOpen && (
                            <div className="dropdown-menu">
                                <div className="dropdown-item-services">
                                    <div className="service-dropdown">FULFILLMENT</div>
                                </div>
                                <div className="dropdown-item-services">
                                    <div className="service-dropdown">{ service_drop }</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <Link to={about_link} className={`nav-link ${isDarkMode ? 'dark' : ''} ${isActiveLink(about_link)}`}>{ about }</Link>
                    <Link to={contact_link} className={`nav-link ${isDarkMode ? 'dark' : ''} ${isActiveLink(contact_link)}`}>{ contacts }</Link>
                </nav>

                {/* Header Actions */}
                <div className="header-actions">
                    <button className="call-order-btn" onClick={handleModalOpen}>{ call }</button>
                    {isModalOpen && (
                        <div className="modal-overlay">
                            <div className="modal modal-content">
                                <button className="modal-close" onClick={handleModalClose}>×</button>
                                <h3>{ call }</h3>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text-type"
                                        placeholder={name_type}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="tel-type"
                                        placeholder={tel_type}
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                    <button type="submit" className="order-button">{ order }</button>
                                </form>
                            </div>
                        </div>
                    )}
                    <div className="theme-switcher" onClick={toggleTheme}>
                        <img src={isDarkMode ? moon : sun} alt="Theme Icon" className="theme-icon" />
                        <div className={`toggle-switch ${isDarkMode ? 'active' : ''}`}></div>
                    </div>
                    <div className={`mobile-menu-button ${isDarkMode ? 'dark' : ''}`} onClick={toggleMobileMenu}>
                        <div className={`bar ${isDarkMode ? 'dark' : ''}`}></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="mobile-menu-overlay">
                    <div className="mobile-menu">
                        <button className="burger-menu" onClick={toggleMobileMenu}>
                            <span className="burger-line"></span>
                            <span className="burger-line"></span>
                            <span className="burger-line"></span>
                        </button>
                        <div className="modal-overlay-header">libert</div>
                        <nav className="mobile-navigation">
                            <Link to={main_link} className={`mobile-nav-link ${isActiveLink(main_link)}`}>{ head }</Link>
                            <Link to={about_link} className={`mobile-nav-link ${isActiveLink(about_link)}`}>{ about }</Link>
                            <Link to={contact_link} className={`mobile-nav-link ${isActiveLink(contact_link)}`}>{ contacts }</Link>
                            <div className="mobile-nav-link dropdown-toggle" onClick={toggleServicesDropdown}>
                                { services }
                                {isServicesDropdownOpen && (
                                    <div className="dropdown-menu-mobile show">
                                        <div className="dropdown-item-services-mobile">
                                            <div className="service-dropdown-mobile">FULFILLMENT</div>
                                        </div>
                                        <div className="dropdown-item-services-mobile">
                                            <div className="service-dropdown-mobile">{ service_drop }</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="mobile-modal-footer">
                                <div className="mobile-modal-footer-description"> {social_networks} </div>
                                <div className="social-media-mobile">
                                    <img src={instagram_logo} alt="instagram" />
                                    <img src={telegram_logo} alt="telegram" />
                                </div>
                                <div className="mobile-modal-footer-bottom">
                                    <p>2024 © Libert Group | All rights reserved.</p>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;