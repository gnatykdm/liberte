import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import flag from '../../../../shared/assets/icons/poland.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import service_img from '../../../../shared/assets/images/headimg.png';
import '../../../mainpages/services/fulfillment/ServicePage.css';

const Service1PagePl = () => {

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
                <p>W ramach usługi fulfillment oferujemy:</p>
                <ul>
                    <li>odbiór paczek,</li>
                    <li>kontrolę ilościową i jakościową towarów,</li>
                    <li>przechowywanie produktów w magazynie,</li>
                    <li>kompletowanie i pakowanie zamówień,</li>
                    <li>drukowanie etykiet kurierskich,</li>
                    <li>wysyłkę i dostawę paczek do klientów końcowych,</li>
                    <li>obsługę zwrotów.</li>
                </ul>
            </div>

                <div className="service-img-page">
                    <img src={service_img} alt="usługa"/>
                </div>
            </div>

            <center>
            <OrderCall
                    part1={"Twoje zadowolenie to nasz cel. Zapewniamy dokładność, niezawodność oraz"}
                    part2={"indywidualne podejście, aby logistyka była maksymalnie prosta dla Ciebie"}
                    order_call={"Zamów rozmowę"}
                    order={"Zamów rozmowę"}
                    name_type={"Twoje imię"}
                    tel_type={"Twój telefon"}
                    isDarkMode={isDarkMode}
                    messageSuccess={"Wiadomość wysłana"}
                    messageError={"Problem z wysłaniem"}
                    />

            <Footer
                    service_drop={"Transport Nienormatywny"}
                    head={"Menu Główne"}
                    head2={"Strony"}
                    head3={"Nasze Kontakty"}
                    services={"Usługi"}
                    contacts={"Kontakty"}
                    main_link={"/pl"}
                    about_link={"/about/pl"}
                    contact_link={"/contact/pl"}
                    about="O Nas"
                    service1_link={"/service/pl"}
                    service2_link={"/fulfillment/pl"}
                    fulfillment={"Kurierzy"}
                />
            </center>
        </div>
    );
}

export default Service1PagePl;