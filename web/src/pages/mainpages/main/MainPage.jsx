import React, { useState, useEffect } from "react"; // Импортируйте useEffect
import { Helmet } from "react-helmet";
import Header from "../../../shared/ui/header/Header";
import { Link } from "react-router-dom";
import ukraine_flag from '../../../shared/assets/icons/ukraine.png';
import OrderCall from "../../../shared/ui/ordercall/OrderCall";
import Services from "../../../widgets/services/Services";
import Footer from "../../../shared/ui/footer/Footer";
import main_photo from '../../../shared/assets/images/DeWatermark.ai_1727849070458-removebg-preview.png';
import './MainPage.css';

const MainPage = () => {
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
        <div className={`main-page-desc ${isDarkMode ? 'dark' : ''}`}>
            <Helmet>
                <title>Libert - Головна</title>
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

            <div className="main-content">
                <div className="text-content-main">
                    <div className={`company-main-name-desc ${isDarkMode ? 'dark' : ''}`}>
                        логістичні <br />
                        <div className="highlites">рішення</div> для <br />
                        вашого бізнесу
                    </div>
                    <div className={`text-container-main ${isDarkMode ? 'dark' : ''}`}>
                        <p>
                            Ми компанія LIBERT Group, пропонуємо послуги з транспортування<br />
                            негабаритних вантажів та документального супроводу. Перевозимо <br />
                            від комбайнів закінчуючи інфраструктурними проектами.
                        </p>
                    </div>
                    <button className="btn-main-desc">
                        <Link to="/contact" style={{ textDecoration: 'none', color: '#ffffff' }}>
                            почати співпрацю
                        </Link>
                    </button>
                </div>
                <img src={main_photo} alt="photo" className="main-photo-desc" />
            </div>

            <center>
                <Services isDarkMode={isDarkMode} />
                <OrderCall
                    part1={"Гарантуємо доставку до вашого місця, щоб ви"}
                    part2={"могли зосередитися на важливих справах "}
                    order_call={"Замовити дзвінок"}
                    order={"Замовити"}
                    name_type={"Ваше ім'я"}
                    tel_type={"Ваш телефон"}
                    isDarkMode={isDarkMode}
                />
                <Footer
                    service_drop={"Негабаритні Перевезення"}
                    head={"Головне меню"}
                    head2={"Cторінки"}
                    head3={"Наші контакти"}
                    services={"Послуги"}
                    contacts={"Контакти"}
                    main_link={"/"}
                    about_link={"/about"}
                    contact_link={"/contact"}
                    about="Про Нас"
                />
            </center>
        </div>
    );
};

export default MainPage;
