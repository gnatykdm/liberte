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
                toggleTheme={toggleTheme} 
                isDarkMode={isDarkMode}
                messageStatus={"Повідомлення Відправлено"}
                service1="FulFillment"
                service2="Міжнародна кур'єрська доставка"
                service3="Негабаритні перевезення"
                service4="Послуги митного агенства"
                service5="Складська Логістика"
                service1_link={"/service1"}
                service2_link={"/service2"}
                service3_link={"/service3"}
                service4_link={"/service4"}
                service5_link={"/service5"}
                languagelink_1={"/contact/en"}
                languagelink_2={"/contact"}
                languagelink_3={"/contact/pl"}
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
    
        <div className="contact-info">
                <ContactInfo contact={"Надаєте перевагу іншим методам зв'яку?"} isDarkMode={isDarkMode} />
        </div>
        <center>
            <Footer
                head="Головне меню"
                head2="Меню"
                head3="Наші контакти"
                services={"Послуги"}
                contacts="Контакти"
                main_link="/"
                about_link="/about"
                contact_link="/contact"
                about="Про Нас"
                service1="FulFillment"
                service2="Міжнародна кур'єрська доставка"
                service3="Негабаритні перевезення"
                service4="Послуги митного агенства"
                service5="Складська Логістика"
                service1_link={"/service1"}
                service2_link={"/service2"}
                service3_link={"/service3"}
                service4_link={"/service4"}
                service5_link={"/service5"}
                />
        </center>
    </div>    
    );
}

export default MainContactPage;
