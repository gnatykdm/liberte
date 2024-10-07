import React, { useState } from "react";
import { Helmet } from "react-helmet";
import libert_logo from '../../assets/images/libertlogo-removebg-preview.png';
import ukraine_flag from '../../assets/icons/ukraine.png';
import arrow_black from '../../assets/icons/arrow-down-black.png';
import arrow_white from '../../assets/icons/arrow-down-white.png';
import sun from '../../assets/icons/sun.png';
import moon from '../../assets/icons/moon.png'; 
import './Header.css';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false); // State for language dropdown
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false); // State for services dropdown

    const [isModalOpen, setIsModalOpen] = useState(false);  
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');


    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleLanguageDropdown = () => {
        setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    };

    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen(!isServicesDropdownOpen);
    };

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

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
                <div className="logo-section">
                    <img src={libert_logo} alt="Libert Logo" className="logo" />
                    <div className="language-switcher" onClick={toggleLanguageDropdown}>
                        <img src={ukraine_flag} alt="Ukrainian Flag" className="flag-icon" />
                        <img src={isDarkMode ? arrow_white : arrow_black} alt="Arrow Down" className={`arrow-icon ${isDarkMode ? 'dark' : ''}`}/>
                        {isLanguageDropdownOpen && (
                            <div className="dropdown-menu">
                                <div className="dropdown-item">English</div>
                                <div className="dropdown-item">Українська</div>
                                <div className="dropdown-item">Русский</div>
                            </div>
                        )}
                    </div>
                </div>
                
                <nav className="navigation">
                    <a href="#" className={`nav-link ${isDarkMode ? 'dark' : ''}`}>Головна</a>
                    <div className="navlink" onClick={toggleServicesDropdown}>
                        <div className="service-name-header">Послуги</div>
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
                    <a href="#" className={`nav-link ${isDarkMode ? 'dark' : ''}`}>Про нас</a>
                    <a href="#" className={`nav-link ${isDarkMode ? 'dark' : ''}`}>Контакти</a>
                </nav>

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
                </div>
            </div>
        </header>
    );
};

export default Header;