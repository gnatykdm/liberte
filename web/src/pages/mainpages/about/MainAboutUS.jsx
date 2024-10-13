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
                toggleTheme={toggleTheme} // Передаем функцию для переключения темы
                isDarkMode={isDarkMode} // Передаем состояние темы
            />

            <div className="some-age-info">
                <PageInfo text="Про компанію" isDarkMode={isDarkMode} />
            </div>
            
            <div className={`main-content-about ${isDarkMode ? 'dark' : ''}`}>
                <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                    <p>Ми, компанія LIBERT Group, пропонуємо комплексні логістичні рішення для вашого бізнесу з конкурентними цінами. 
                        Організовуємо міжнародну кур’єрську доставку та FULFILLMENT – ввезення товару з можливістю 
                        зберігання на складі в Польщі та Китаї з подальшою кур'єрською розсилкою. Завдяки гнучким умовам розмитнення 
                        та обслуговування ви зможете оптимізувати свої витрати на логістику</p>
                    <p className="about-us-some">
                        Наші послуги чудово підходять для вашого бренду. Ми готові забезпечити своєчасну доставку вашого товару до клієнтів, 
                        надаючи повну логістичну підтримку, яка дозволить вам зосередитися на подальшому розвитку бренду та створенні нових колекцій.
                    </p>
                </div>
                <div className="map">
                    <MainMap />
                </div>
            </div>

            <center>
                <SomeInfo 
                    question={"Що таке FULFILLMENT?"} 
                    answer={"FULFILLMENT включає такі етапи як:"}
                    a1={"Організація ввезення товару a1"}
                    a2={"Прийом товару на склад"}
                    a3={"Кур'єрська доставка до отримувача"}
                    a4={"Зберігання товару"}
                    a5={"Пакування товару на склад"}
                    a6={"Оформлення супровідних документів"}
                    isDarkMode={isDarkMode}
                />

                <OrderCall
                    part1={"Гарантуємо доставку до вашого місця, щоб ви"}
                    part2={"могли зосередитися на важливих справах "}
                    order_call={"Замовити дзвінок"}
                    order={"Замовити"}
                    name_type={"Ваше ім'я"}
                    tel_type={"Ваш телефон"}
                    toggleTheme={toggleTheme}
                    isDarkMode={isDarkMode}
                />

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
};

export default MainAboutUS;
