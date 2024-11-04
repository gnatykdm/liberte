import React, { useState, useEffect } from 'react'; // Импортируйте useEffect
import './MainAboutUs.css';
import Header from '../../../shared/ui/header/Header';
import OrderCall from '../../../shared/ui/ordercall/OrderCall';
import Footer from '../../../shared/ui/footer/Footer';
import PageInfo from '../../../shared/ui/pageInfo/PageInfo';
import ukraine_flag from '../../../shared/assets/icons/ukraine.png';
import SomeInfo from '../../../widgets/someInfo/SomeInfo';
import MainMap from '../../../shared/ui/map/MainMap';
import { Helmet } from 'react-helmet';

const MainAboutUS = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('isDarkMode');
        return savedTheme === 'true'; 
    });

    const toggleTheme = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode; // Переключаем состояние
            localStorage.setItem('isDarkMode', newMode); // Сохраняем новое состояние в localStorage
            return newMode; // Возвращаем новое состояние
        });
    };

    return (
        <div className={`main-about-us-page ${isDarkMode ? 'dark' : ''}`}>
            <Helmet>
                <title>Libert - Про Нас</title>
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
                languagelink_1={"/about/en"}
                languagelink_2={"/about"}
                languagelink_3={"/about/pl"}
                photo_link={"/"}
                order_call_sending={"відправка повідомлення..."}
                order_call_problem={"проблема з відправкою"}
            />

            <div className="some-age-info">
                <PageInfo text="Про компанію" isDarkMode={isDarkMode} />
            </div>
            
            <div className={`main-content-about ${isDarkMode ? 'dark' : ''}`}>
                <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                    <p>LIBERT Group – це команда професіоналів, які об'єднали свій багаторічний досвід для створення компанії, <br/> 
                    що пропонує повний спектр логістичних рішень. Ми спеціалізуємося на міжнародній кур'єрській доставці, <br/> 
                    транспортуванні негабаритних вантажів і наданні комплексних послуг митних брокерів.</p>
                    <p className="about-us-some">
                    Наші клієнти отримують не лише надійність та точність у кожній операції, але й індивідуальний підхід до кожного запиту. Ми забезпечуємо безперервність 
                    і високу ефективність у всіх аспектах логістики, щоб ваші товари завжди досягали пункту призначення вчасно та безпечно.
                    </p>
                </div>
                <div className="map">
                    <MainMap />
                </div>
            </div>

            <center>
                
                <OrderCall
                    part1={"Ваш спокій — наша мета. Ми забезпечуємо точність, надійність та"}
                    part2={"індивідуальний підхід, щоб зробити логістику максимально простою для вас"}
                    order_call={"Замовити дзвінок"}
                    order={"Замовити дзвінок"}
                    name_type={"Ваше ім'я"}
                    tel_type={"Ваш телефон"}
                    isDarkMode={isDarkMode}
                    messageSuccess={"Повідомлення Відправлено"}
                    messageError={"Проблема із відправкою"}
                    order_call_sending={"відправка повідомлення..."}
                    order_call_problem={"проблема з відправкою"}
                />

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
};

export default MainAboutUS;
