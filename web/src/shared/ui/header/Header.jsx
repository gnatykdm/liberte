import React, { useState } from "react";
import { Helmet } from "react-helmet";
import libert_logo from '../../assets/images/libertlogo-removebg-preview.png';
import ukraine_flag from '../../assets/icons/ukraine.png';
import arrow_black from '../../assets/icons/arrow-down-black.png';
import arrow_white from '../../assets/icons/arrow-down-white.png';
import instagram_logo from '../../assets/icons/instagramwhite.png';
import telegram_logo from '../../assets//icons/telegramwhite.png';
import sun from '../../assets/icons/sun.png';
import moon from '../../assets/icons/moon.png';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    // State variables
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    // Event handlers
    const toggleTheme = () => setIsDarkMode(!isDarkMode);
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
                    <div className="language-switcher" onClick={toggleLanguageDropdown}>
                        <img src={ukraine_flag} alt="Ukrainian Flag" className="flag-icon" />
                        <img src={isDarkMode ? arrow_white : arrow_black} alt="Arrow Down" className={`arrow-icon ${isDarkMode ? 'dark' : ''}`} />
                        {isLanguageDropdownOpen && (
                            <div className="dropdown-menu">
                                <div className="dropdown-item">English</div>
                                <div className="dropdown-item">Українська</div>
                                <div className="dropdown-item">Polska</div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <nav className="navigation">
                    <Link to={"/"} className={`nav-link ${isDarkMode ? 'dark' : ''}`}>Головне</Link>
                    <div className={`nav-link ${isDarkMode ? 'dark' : ''}`} onClick={toggleServicesDropdown}>
                        Послуги
                        {isServicesDropdownOpen && (
                            <div className="dropdown-menu">
                                <div className="dropdown-item-services">
                                    <div className="service-dropdown">FULFILMENT</div>
                                </div>
                                <div className="dropdown-item-services">
                                    <div className="service-dropdown">Негабаритні перевезення</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <Link to={"/about"} className={`nav-link ${isDarkMode ? 'dark' : ''}`}>Про нас</Link>
                    <Link to={"/contact"} className={`nav-link ${isDarkMode ? 'dark' : ''}`}>Контакти</Link>
                </nav>

                {/* Header Actions */}
                <div className="header-actions">
                    <button className="call-order-btn" onClick={handleModalOpen}>ЗАМОВИТИ ДЗВІНОК</button>
                    {isModalOpen && (
                        <div className="modal-overlay">
                            <div className="modal modal-content">
                                <button className="modal-close" onClick={handleModalClose}>×</button>
                                <h3>Замовити дзвінок</h3>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text-name"
                                        placeholder="Ваше ім'я"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Ваш телефон"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                    <button type="submit" className="order-button">Замовити</button>
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
                   <a href="#" className="mobile-nav-link">Головна</a>
                   <a href="#" className="mobile-nav-link">Про нас</a>
                   <a href="#" className="mobile-nav-link">Контакти</a>
                   <div className="mobile-nav-link dropdown-toggle" onClick={toggleServicesDropdown}>
                     Послуги
                     {isServicesDropdownOpen && (
                       <div className="dropdown-menu-mobile show">
                         <div className="dropdown-item-services-mobile">
                           <div className="service-dropdown-mobile">FULFILMENT</div>
                         </div>
                         <div className="dropdown-item-services-mobile">
                           <div className="service-dropdown-mobile">Негабаритні перевезення</div>
                         </div>
                       </div>
                     )}
                   </div>
                   <div className="mobile-modal-footer">
                     <div className="mobile-modal-footer-description">Libert у соціальних мережах</div>
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