import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import ukraine_flag from '../../../../shared/assets/icons/ukraine.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import garage_logo from '../../../../shared/assets/images/garage_logo.png';

const Service5Page = () => {
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
                <title>Libert - Складська логістика</title>
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
                languagelink_1={"/service5/en"}
                languagelink_2={"/service5/"}
                languagelink_3={"/service5/pl"}
                photo_link={"/"}
                order_call_sending={"відправка повідомлення..."}
                order_call_problem={"проблема з відправкою"}
            />

            <div className="some-age-info">
                <PageInfo text="Складська Логістика" isDarkMode={isDarkMode} />
            </div>
            
            <div className={`service-content-about ${isDarkMode ? 'dark' : ''}`}>
                <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                    <p>Складська логістика включає в себе наступні послуги:</p>
                    <ul>
                        <li>митно-ліцензійні склади в Польщі,</li>
                        <li>зберігання товарів без необхідності сплати мит та податків до моменту їх випуску у вільний обіг,</li>
                        <li>маркування, пакування та перепакування товарів відповідно до вимог країни призначення,</li>
                        <li>управління номерами партій, серій і термінами придатності товарів, що зберігаються,</li>
                        <li>страхування товарів на період зберігання.</li>
                    </ul>
                    <p>Ці послуги дозволяють знизити витрати, оптимізувати логістичні процеси та забезпечити безпеку товарів під час зберігання.</p>
                </div>
                <div className="service-image-main-container">
                        <img src={garage_logo} alt="logistic" className="service-image-desc"/>
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
                    messageSuccess={"Повідомлення відправлено"}
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
export default Service5Page;
