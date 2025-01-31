import React, { useState } from 'react';
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import flag from '../../../../shared/assets/icons/poland.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import fulfillmetn_logo from '../../../../shared/assets/images/doors_logo.png';
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
                <title>Libert - Fulfillment</title>
                
                {/* SEO Meta Tags */}
                <meta name="description" content="Usługa fulfillment w firmie Libert: dostawa, odprawa celna, przechowywanie, pakowanie, wysyłka, oraz obsługa zwrotów." />
                <meta name="keywords" content="Fulfillment, Dostawa, Odprawa celna, Przechowywanie, Pakowanie, Logistyka, Wysyłka, Obsługa zwrotów" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Libert - Fulfillment" />
                <meta property="og:description" content="Usługi fulfillment w firmie Libert: sprawna dostawa, odprawa celna, przechowywanie towarów i wsparcie dla klientów." />
                <meta property="og:image" content={fulfillmetn_logo} />
                <meta property="og:url" content="https://www.libertgroup.pl/service1/pl" />
                <meta property="og:type" content="website" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:title" content="Libert - Fulfillment" />
                <meta name="twitter:description" content="Usługi fulfillment w firmie Libert: logistyka, dostawa, odprawa celna, pakowanie, i obsługa zwrotów." />
                <meta name="twitter:image" content={fulfillmetn_logo} />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            <Header 
                image={flag}
                head={"Strona główna"}
                services={"Usługi"} 
                service_drop={"Transport ponadgabarytowy"}
                about={"O nas"}
                contacts={"Kontakt"}
                call={"Kontakt"}
                order={"Kontakt"}
                social_networks={"Libert w mediach społecznościowych"}
                name_type={"Twoje imię"}
                tel_type={"Twój numer telefonu"}
                main_link={"/pl"}
                about_link={"/about/pl"}
                contact_link={"/contact/pl"}
                toggleTheme={toggleTheme} 
                isDarkMode={isDarkMode}
                messageStatus={"Wiadomość wysłana"}
                service1="FulFillment"
                service2="Transport ponadgabarytowy"
                service3="Międzynarodowa dostawa kurierska"
                service4="Usługi agencji celnej"
                service5="Logistyka magazynowa"
                service1_link={"/service1/pl"}
                service2_link={"/service3/pl"}
                service3_link={"/service2/pl"}
                service4_link={"/service4/pl"}
                service5_link={"/service5/pl"}
                languagelink_1={"/service1/en"}
                languagelink_2={"/service1/"}
                languagelink_3={"/service1/pl"}
                order_call_sending={"wysyłanie wiadomości..."}
                order_call_problem={"problem z wysyłaniem"}
                photo_link={"/pl"}
            />

            <div className="some-age-info">
                <PageInfo text="FULFILLMENT" isDarkMode={isDarkMode} />
            </div>

            <div className={`service-content-about ${isDarkMode ? 'dark' : ''}`}>
                <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                    <p>W ramach usługi fulfillment oferujemy:</p>
                    <ul className="fullfilment-list-style">
                        <li>📦 Dostawę do naszego licencjonowanego magazynu celnego w Europie</li>
                        <li>📦 Odprawę celną towaru</li>
                        <li>📦 Przechowywanie towaru</li>
                        <li>📦 Pakowanie i przygotowanie do wysyłki</li>
                        <li>📦 Dostawę zamówienia do klienta końcowego</li>
                        <li>📦 Obsługę zwrotów i wsparcie klienta</li>
                    </ul>
                </div>

                <div className="service-image-main-container">
                    <img src={fulfillmetn_logo} alt="logistyka" className="service-image-desc"/>
                </div>
            </div>

            <center>
                <OrderCall
                    part1={"Twoje zadowolenie to nasz cel. Zapewniamy dokładność, niezawodność oraz"}
                    part2={"indywidualne podejście, aby logistyka była maksymalnie prosta."}
                    order_call={"Kontakt"}
                    order={"Kontakt"}
                    name_type={"Twoje imię"}
                    tel_type={"Twój telefon"}
                    isDarkMode={isDarkMode}
                    messageSuccess={"Wiadomość wysłana"}
                    messageError={"Problem z wysłaniem"}
                />

                <Footer
                    head="Główne menu"
                    head2="Menu"
                    head3="Nasze kontakty"
                    services={"Usługi"}
                    contacts="Kontakt"
                    main_link="/pl"
                    about_link="/about/pl"
                    contact_link="/contact/pl"
                    about="O nas"
                    service1="Transport ponadgabarytowy"
                    service2="Fulfillment"
                    service3="Międzynarodowa dostawa kurierska"
                    service4="Usługi agencji celnej"
                    service5="Logistyka magazynowa"
                    service1_link={"/service3/pl"}
                    service2_link={"/service1/pl"}
                    service3_link={"/service2/pl"}
                    service4_link={"/service4/pl"}
                    service5_link={"/service5/pl"}
                    languagelink_1={"/en"}
                    languagelink_2={"/"}
                    languagelink_3={"/pl"}
                    photo_link={"/pl"}
                />
            </center>
        </div>
    );
}

export default Service1PagePl;
