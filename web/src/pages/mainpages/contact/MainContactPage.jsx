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
                <title>Libert - Контакти</title>
            </Helmet>

            <Header 
                image={ukraine_flag}
                head={"Головна"}
                services={"Послуги"} 
                service_drop={"Негабаритні перевезення"}
                about={"Про нас"}
                contacts={"Контакти"}
                call={"Замовити дзвінок"}
                order={"Замовити"}
                social_networks={"Libert у соціальних мережах"}
                name_type={"Ваше ім'я"}
                tel_type={"Ваш номер телефону"}
                main_link={"/"}
                about_link={"/about"}
                contact_link={"/contact"}
                toggleTheme={toggleTheme} // Передаем функцию для переключения темы
                isDarkMode={isDarkMode} // Передаем состояние темы
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
                        message_content={"Тема Повідомлення"}
                        message_type={"Повідомлення..."}
                        send={"Надіслати"}
                        isDarkMode={isDarkMode}
                    />
                </div>
                <div className="map-contact">
                    <MainMap />
                </div>
            </div>            

            <center>
                <div className="contact-info">
                    <ContactInfo contact={"Переважаєте в інший спосіб?"} isDarkMode={isDarkMode} />
                </div>
                
                <Footer
                    service_drop={"Негабаритні Перевезення"}
                    head={"Головне меню"}
                    head2={"Наші контакти"}
                    services={"Послуги"}
                    contacts={"Контакти"}
                    main_link={"/"}
                    about_link={"/about"}
                    contact_link={"/contact"}
                />
            </center>
        </div>
    );
}

export default MainContactPage;
