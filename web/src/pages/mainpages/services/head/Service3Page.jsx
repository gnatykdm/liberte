import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import flag from '../../../../shared/assets/icons/ukraine.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import carbox_logo from '../../../../shared/assets/images/carbox_logo.png';

const Service3Page = () => {
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
            <div className={`service-page ${isDarkMode ? 'dark' : ''}`}>
            <Helmet>
                <title>Libert - Негабаритні перевезення</title>
            </Helmet>


            <Header 
                image={flag}
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
                languagelink_1={"/service3/en"}
                languagelink_2={"/service3"}
                languagelink_3={"/service3/pl"}
                photo_link={"/"}
            />

            <div className="some-age-info">
                <PageInfo text="Негабаритні Перевезення" isDarkMode={isDarkMode} />
            </div>
            
            <div className={`service-content-about ${isDarkMode ? 'dark' : ''}`}>
                <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                    <p>
                    Надаємо послуги з транспортування негабаритних вантажів та документального супроводу.
                    Перевозимо від комбайнів до інфраструктурних об’єктів. За нас говорять реалізовані проекти на сайті Єврокомісії.
                    Забезпечуємо повний цикл логістичних рішень, включаючи узгодження дозволів, планування маршрутів, а також організацію супроводу вантажів спеціалізованими транспортними засобами. 
                    </p>

                    <p>
                        Наш багаторічний досвід дозволяє оперативно вирішувати будь-які питання, пов'язані з транспортуванням негабариту, дотримуючись міжнародних стандартів безпеки та якості.
                        Довірте нам свій вантаж – ми гарантуємо надійність, професіоналізм та своєчасне виконання зобов'язань.
                    </p>
                    
                </div>
                <div className="service-image-main-container">
                    <div className={`logo-service-background-desc ${isDarkMode ? 'dark' : ''}`}>
                        <img src={carbox_logo} alt="logistic" className="service-image-desc"/>
                    </div>
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
}
export default Service3Page;