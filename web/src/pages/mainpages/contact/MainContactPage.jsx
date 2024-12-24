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
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('isDarkMode');
        return savedTheme === 'true'; 
    });

    const toggleTheme = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode; 
            localStorage.setItem('isDarkMode', newMode); 
            return newMode; 
        });
    };

    return (
        <div className={`main-contact-page ${isDarkMode ? 'dark' : ''}`}>
            <Helmet>
                <title>Libert - Контакти</title>
                <meta name="description" content="Контактуйте з компанією Libert для отримання послуг з негабаритних перевезень, міжнародної кур'єрської доставки, митних послуг та складської логістики." />
                <meta name="keywords" content="Контакти, негабаритні перевезення, міжнародна доставка, митні послуги, складська логістика, Україна, Libert" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Libert - Контакти" />
                <meta property="og:description" content="Зв'язатись з компанією Libert для отримання послуг у галузі транспортування, логістики та митних послуг." />
                <meta property="og:image" content={ukraine_flag} />
                <meta property="og:url" content="https://www.libertgroup.pl/contact" />
                <meta name="twitter:title" content="Libert - Контакти" />
                <meta name="twitter:description" content="Зв'язатись з компанією Libert для транспортування, логістики та митних послуг." />
                <meta name="twitter:image" content={ukraine_flag} />
                <meta name="twitter:card" content="summary_large_image" />
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
                messageStatus={"Повідомлення відправлено"}
                service1="FulFillment"
                service2="Негабаритні перевезення"
                service3="Міжнародна кур'єрська доставка"
                service4="Послуги митного агенства"
                service5="Складська логістика"
                service1_link={"/service1"}
                service2_link={"/service3"}
                service3_link={"/service2"}
                service4_link={"/service4"}
                service5_link={"/service5"}
                languagelink_1={"/contact/en"}
                languagelink_2={"/contact/"}
                languagelink_3={"/contact/pl"}
                photo_link={"/"}
                order_call_sending={"відправка повідомлення..."}
                order_call_problem={"проблема з відправкою"}
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
                        messageOk={"Повідомлення відправлено"}
                        messageError={"Проблема із відправкою"}
                    />
                </div>
                <div className="map-contact">
                    <MainMap />
                </div>
            </div>            
    
            <div className="contact-info">
                <ContactInfo contact={"Надаєте перевагу іншим методам зв'язку?"} isDarkMode={isDarkMode} />
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
                    service2="Негабаритні перевезення"
                    service3="Міжнародна кур'єрська доставка"
                    service4="Послуги митного агенства"
                    service5="Складська Логістика"
                    service1_link={"/service1"}
                    service2_link={"/service3"}
                    service3_link={"/service2"}
                    service4_link={"/service4"}
                    service5_link={"/service5"}
                />
            </center>
        </div>    
    );
}

export default MainContactPage;
