import React, { useState, useEffect } from "react"; // Імпортуйте useEffect
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
    // Ініціалізація стану темної теми з localStorage
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('isDarkMode');
        return savedTheme === 'true'; // Перетворюємо значення на булевий тип
    });

    const toggleTheme = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode; // Перемикаємо стан
            localStorage.setItem('isDarkMode', newMode); // Зберігаємо новий стан у localStorage
            return newMode; // Повертаємо новий стан
        });
    };

    return (
        <div className={`main-contact-page ${isDarkMode ? 'dark' : ''}`}>
        <Helmet>
            <title>Libert - Контакти</title>
        </Helmet>
    
        <Header 
            image={ukraine_flag}
            head={"Головна"}
            services={"Послуги"} 
            service_drop={"Транспортування негабаритів"}
            about={"Про нас"}
            contacts={"Контакти"}
            call={"Замовити дзвінок"}
            order={"Замовити"}
            social_networks={"Libert у соцмережах"}
            name_type={"Ваше ім'я"}
            tel_type={"Ваш номер телефону"}
            main_link={"/"}
            about_link={"/about"}
            contact_link={"/contact"}
            toggleTheme={toggleTheme} 
            isDarkMode={isDarkMode} 
        />
    
        <div className="some-age-info">
            <PageInfo text="Контакти" isDarkMode={isDarkMode} />
        </div>
        <div className="main-contact">
            <div className="contact-form">
                <MessageForm
                    header={"Надішліть нам повідомлення"}
                    name_type={"Ваше ім'я"}
                    email_type={"Електронна пошта"}
                    message_content={"Тема повідомлення"}
                    message_type={"Повідомлення..."}
                    send={"Надіслати"}
                    isDarkMode={isDarkMode}
                    messageSending={"Відправка.."}
                    messageOk={"Повідомлення Відправлено"}
                    messageError={"Проблема із відправкою"}
                />
            </div>
            <div className="map-contact">
                <MainMap />
            </div>
        </div>            
    
        <center>
            <div className="contact-info">
                <ContactInfo contact={"Віддаєте перевагу іншому способу?"} isDarkMode={isDarkMode} />
            </div>
    
            <Footer
                service_drop={"Транспортування негабаритів"}
                head={"Головне меню"}
                head2={"Сторінки"}
                head3={"Наші контакти"}
                services={"Послуги"}
                contacts={"Контакти"}
                main_link={"/"}
                about_link={"/about"}
                contact_link={"/contact"}
                about="Про нас"
                service1_link={"/service"}
                service2_link={"/fulfillment"}
            />
        </center>
    </div>    
    );
}

export default MainContactPage;
