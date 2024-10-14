import React, { useState, useEffect } from "react"; // Импортируйте useEffect
import { Helmet } from "react-helmet";
import MainMap from "../../../shared/ui/map/MainMap";
import Header from "../../../shared/ui/header/Header";
import ukraine_flag from '../../../shared/assets/icons/ukraine.png';
import MessageForm from "../../../widgets/messageform/MessageForm";
import ContactInfo from "../../../widgets/contactInfo/ContactInfo";
import PageInfo from "../../../shared/ui/pageInfo/PageInfo";
import Footer from "../../../shared/ui/footer/Footer";
import './MainContactPage.css';

const MainContactPage = () => {
    // Инициализация состояния темной темы из localStorage
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('isDarkMode');
        return savedTheme === 'true'; // Преобразуем значение к булевому типу
    });

    const toggleTheme = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode; // Переключаем состояние
            localStorage.setItem('isDarkMode', newMode); // Сохраняем новое состояние в localStorage
            return newMode; // Возвращаем новое состояние
        });
    };

    return (
        <div className={`main-contact-page ${isDarkMode ? 'dark' : ''}`}>
        <Helmet>
            <title>Libert - Contacts</title>
        </Helmet>
    
        <Header 
            image={ukraine_flag}
            head={"Home"}
            services={"Services"} 
            service_drop={"Oversized Transportation"}
            about={"About Us"}
            contacts={"Contacts"}
            call={"Request a Call"}
            order={"Order"}
            social_networks={"Libert on Social Media"}
            name_type={"Your Name"}
            tel_type={"Your Phone Number"}
            main_link={"/"}
            about_link={"/about"}
            contact_link={"/contact"}
            toggleTheme={toggleTheme} // Passing function for theme toggling
            isDarkMode={isDarkMode} // Passing theme state
        />
    
        <div className="some-age-info">
            <PageInfo text="Contacts" isDarkMode={isDarkMode} />
        </div>
        <div className="main-contact">
            <div className="contact-form">
                <MessageForm
                    header={"Send us a Message"}
                    name_type={"Your Name"}
                    email_type={"Email"}
                    message_content={"Message Subject"}
                    message_type={"Message..."}
                    send={"Send"}
                    isDarkMode={isDarkMode}
                />
            </div>
            <div className="map-contact">
                <MainMap />
            </div>
        </div>            
    
        <center>
            <div className="contact-info">
                <ContactInfo contact={"Prefer a different way?"} isDarkMode={isDarkMode} />
            </div>
    
            <Footer
                service_drop={"Oversized Transportation"}
                head={"Main Menu"}
                head2={"Pages"}
                head3={"Our Contacts"}
                services={"Services"}
                contacts={"Contacts"}
                main_link={"/"}
                about_link={"/about"}
                contact_link={"/contact"}
                about="About Us"
                service1_link={"/service"}
                service2_link={"/fulfillment"}
            />
        </center>
    </div>    
    );
}

export default MainContactPage;
