import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import flag from '../../../../shared/assets/icons/ukraine.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import service_img from '../../../../shared/assets/images/headimg.png';
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
                <title>Libert - FulFillment</title>
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
                languagelink_1={"/service1/en"}
                languagelink_2={"/service1"}
                languagelink_3={"/service1/pl"}
            />

            <div className="some-age-info">
                <PageInfo text="FULFILLMENT" isDarkMode={isDarkMode} />
            </div>

            <div className={`service-content-about ${isDarkMode ? 'dark' : ''}`}>
            <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                <p>В рамках послуги fulfillment ми пропонуємо:</p>
                    <ul>
                        <li>отримання посилок,</li>
                        <li>кількісний та якісний контроль товарів,</li>
                        <li>зберігання продукції на складі,</li>
                        <li>комплектування та пакування замовлень,</li>
                        <li>друк кур'єрських етикеток,</li>
                        <li>відправлення та доставка посилок кінцевим споживачам,</li>
                        <li>обробка повернення.</li>
                    </ul>
                </div>

                <div className="service-img-page">
                    <img src={service_img} alt="послуга"/>
                </div>
            </div>

            <center>
            <OrderCall
                    part1={"Ваше задоволення — наша мета. Ми забезпечуємо точність, надійність і"}
                    part2={"індивідуальний підхід, щоб зробити логістику максимально простою для вас"}
                    order_call={"Замовити дзвінок"}
                    order={"Замовити дзвінок"}
                    name_type={"Ваше ім’я"}
                    tel_type={"Ваш телефон"}
                    isDarkMode={isDarkMode}
                    messageSuccess={"Повідомлення надіслано"}
                    messageError={"Проблема з надсиланням"}
                    />

            <Footer
                    service_drop={"Негабаритні перевезення"}
                    head={"Головне меню"}
                    head2={"Сторінки"}
                    head3={"Наші контакти"}
                    services={"Послуги"}
                    contacts={"Контакти"}
                    main_link={"/ua"}
                    about_link={"/about/ua"}
                    contact_link={"/contact/ua"}
                    about="Про нас"
                    service1_link={"/service/ua"}
                    service2_link={"/fulfillment/ua"}
                    fulfillment={"Кур’єри"}
                />
            </center>
        </div>
    );
}

export default Service1Page;
