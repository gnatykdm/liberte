import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import flag from '../../../../shared/assets/icons/poland.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import garage_logo from '../../../../shared/assets/images/garage_logo.png';

const Service5PagePl = () => {
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
                <title>Libert - Logistyka magazynowa</title>
            </Helmet>

            <Header 
                image={flag}
                head={"Strona główna"}
                services={"Usługi"} 
                service_drop={"Transport ponadgabarytowy"}
                about={"O nas"}
                contacts={"Kontakt"}
                call={"Zamówienie rozmowy"}
                order={"Zamówienie"}
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
                service2="Międzynarodowa dostawa kurierska"
                service3="Transport ponadgabarytowy"
                service4="Usługi agencji celnej"
                service5="Logistyka magazynowa"
                service1_link={"/service1/pl"}
                service2_link={"/service2/pl"}
                service3_link={"/service3/pl"}
                service4_link={"/service4/pl"}
                service5_link={"/service5/pl"}
                languagelink_1={"/service5/en"}
                languagelink_2={"/service5"}
                languagelink_3={"/service5/pl"}
                photo_link={"/pl"}
            />

            <div className="some-age-info">
                <PageInfo text="Logistyka Magazynowa" isDarkMode={isDarkMode} />
            </div>
            
            <div className={`service-content-about ${isDarkMode ? 'dark' : ''}`}>
                <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                    <p>Logistyka magazynowa obejmuje następujące usługi:</p>
                    <ul>
                        <li>magazyny z licencją celną w Polsce,</li>
                        <li>przechowywanie towarów bez konieczności płacenia cła i podatków do momentu ich zwolnienia do swobodnego obrotu,</li>
                        <li>etykietowanie, pakowanie i przepakowywanie towarów zgodnie z wymaganiami kraju przeznaczenia,</li>
                        <li>zarządzanie numerami partii, serii i terminami przydatności towarów, które są przechowywane,</li>
                        <li>ubezpieczenie towarów na czas przechowywania.</li>
                    </ul>
                    <p>Te usługi pozwalają obniżyć koszty, zoptymalizować procesy logistyczne oraz zapewnić bezpieczeństwo towarów podczas przechowywania.</p>
                </div>
                <div className="service-image">
                    <div className={`logo-service-background-desc ${isDarkMode ? 'dark' : ''}`}>
                        <img src={garage_logo} alt="logistic" className="service-image"/>
                    </div>
                </div>
            </div>

            <center>
                <OrderCall
                    part1={"Twoje bezpieczeństwo to nasz cel. Zapewniamy dokładność, niezawodność oraz"}
                    part2={"indywidualne podejście, aby uprościć logistykę dla Ciebie."}
                    order_call={"Zamówienie rozmowy"}
                    order={"Zamówienie rozmowy"}
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
                    service1="FulFillment"
                    service2="Międzynarodowa dostawa kurierska"
                    service3="Transport ponadgabarytowy"
                    service4="Usługi agencji celnej"
                    service5="Logistyka magazynowa"
                    service1_link={"/service1/pl"}
                    service2_link={"/service2/pl"}
                    service3_link={"/service3/pl"}
                    service4_link={"/service4/pl"}
                    service5_link={"/service5/pl"}
                />
            </center>
        </div>
    );
}
export default Service5PagePl;
