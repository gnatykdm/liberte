import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import ukraine_flag from '../../../../shared/assets/icons/ukraine.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import fulfillmetn_logo from '../../../../shared/assets/images/doors_logo.png';
import '../../../mainpages/services/fulfillment/ServicePage.css';

const Service1Page = () => {

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
                <title>Libert - Fulfillment</title>
                
                {/* Meta Tags for SEO */}
                <meta name="description" content="Послуга Fulfillment від Libert: доставка товарів, зберігання, пакування, обробка повернень та індивідуальний підхід до вашої логістики." />
                <meta name="keywords" content="Fulfillment, доставка товарів, зберігання, пакування, логістика, обробка повернень, митне оформлення" />
                <meta name="robots" content="index, follow" />
                
                {/* Open Graph Meta Tags for social sharing */}
                <meta property="og:title" content="Libert - Fulfillment" />
                <meta property="og:description" content="Послуга Fulfillment від Libert: доставка товарів, зберігання, пакування, обробка повернень, а також надійний і точний сервіс." />
                <meta property="og:image" content={fulfillmetn_logo} />
                <meta property="og:url" content="https://www.libertgroup.pl/service1" />
                <meta property="og:type" content="website" />
                
                {/* Twitter Meta Tags */}
                <meta name="twitter:title" content="Libert - Fulfillment" />
                <meta name="twitter:description" content="Libert пропонує послугу Fulfillment: доставка, пакування, зберігання та обробка повернень для вашого бізнесу." />
                <meta name="twitter:image" content={fulfillmetn_logo} />
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
                service1="Fulfillment"
                service2="Негабаритні перевезення"
                service3="Міжнародна кур'єрська доставка"
                service4="Послуги митного агенства"
                service5="Складська логістика"
                service1_link={"/service1"}
                service2_link={"/service3"}
                service3_link={"/service2"}
                service4_link={"/service4"}
                service5_link={"/service5"}
                languagelink_1={"/service1/en"}
                languagelink_2={"/service1/"}
                languagelink_3={"/service1/pl"}
                photo_link={"/"}
                order_call_sending={"відправка повідомлення..."}
                order_call_problem={"проблема з відправкою"}
            />

            <div className="some-age-info">
                <PageInfo text="FULFILLMENT" isDarkMode={isDarkMode} />
            </div>

            <div className={`service-content-about ${isDarkMode ? 'dark' : ''}`}>
                <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                    <p>В рамках послуги fulfillment ми пропонуємо:</p>
                    <ul className="fullfilment-list-style">
                        <li>📦 Доставку на наш митно-ліцензійний склад в Європі</li>
                        <li>📦 Оформлення товару</li>
                        <li>📦 Зберігання товару</li>
                        <li>📦 Пакування та підготовку до відправки</li>
                        <li>📦 Доставку замовлення кінцевому споживачу</li>
                        <li>📦 Обробку повернень та клієнтську підтримку</li>
                    </ul>
                </div>

                <div className="service-image-main-container">
                    <img src={fulfillmetn_logo} alt="Fulfillment Service by Libert" className="service-image-desc"/>
                </div>
            </div>

            <center>
                <OrderCall
                    part1={"Ваше задоволення — наша мета. Ми забезпечуємо точність, надійність і"}
                    part2={"індивідуальний підхід, щоб зробити логістику максимально простою."}
                    order_call={"Замовити дзвінок"}
                    order={"Замовити дзвінок"}
                    name_type={"Ваше ім’я"}
                    tel_type={"Ваш телефон"}
                    isDarkMode={isDarkMode}
                    messageSuccess={"Повідомлення відправлено"}
                    messageError={"Проблема з надсиланням"}
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
                    service1="Негабаритні перевезення"
                    service2="Fulfillment"
                    service3="Міжнародна кур'єрська доставка"
                    service4="Послуги митного агенства"
                    service5="Складська Логістика"
                    service1_link={"/service3"}
                    service2_link={"/service1"}
                    service3_link={"/service2"}
                    service4_link={"/service4"}
                    service5_link={"/service5"}
                />
            </center>
        </div>
    );
}

export default Service1Page;
