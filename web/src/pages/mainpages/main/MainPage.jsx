import React, { useState } from "react"; 
import { Helmet } from "react-helmet";
import Header from "../../../shared/ui/header/Header";
import { Link } from "react-router-dom";
import ukraine_flag from '../../../shared/assets/icons/ukraine.png';
import OrderCall from "../../../shared/ui/ordercall/OrderCall";
import Services from "../../../widgets/services/Services";
import Footer from "../../../shared/ui/footer/Footer";
import main_photo from '../../../shared/assets/images/headimg.png';
import './MainPage.css';

const MainPage = () => {
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
                toggleTheme={toggleTheme} 
                isDarkMode={isDarkMode}
                service1_link={"/fulfillment"}
                service2_link={"/service"}
                messageStatus={"Повідомлення Відправлено"}
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
                            LIBERT Group надає два основні види послуг: <b>кур'єрську</b> доставку і <br/>
                            перевезення <b>негабаритних</b> вантажів. Ми прагнемо забезпечити <br/> нашим клієнтам сервіс найвищої якості,
                            аби кожне перевезення відповідало вашим очікуванням.
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
                <Services 
                    isDarkMode={isDarkMode}
                    service_name={"Негабаритні Перевезення"}
                    service1_link={"/fulfillment"}
                    service2_link={"/service"} 
                 />
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
                    service1_link={"/service"}
                    service2_link={"/fulfillment"}
                    fulfillment={"Кур'єрська доставка"}
                />
            </center>
        </div>
    );
};

export default MainPage;
