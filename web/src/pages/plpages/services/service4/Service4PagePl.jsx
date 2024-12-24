import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import flag from '../../../../shared/assets/icons/poland.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import envelope_logo from '../../../../shared/assets/images/envelope_logo.png';

const Service4PagePl = () => {
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
                <title>Libert - Usługi Agencji Celnej</title>
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
                languagelink_1={"/service4/en"}
                languagelink_2={"/service4/"}
                languagelink_3={"/service4/pl"}
                order_call_sending={"wysyłanie wiadomości..."}
                order_call_problem={"problem z wysyłaniem"}
                photo_link={"/pl"}
            />

            <div className="some-age-info">
                <PageInfo text="Usługi Agencji Celnej" isDarkMode={isDarkMode} />
            </div>
            
            <div className={`service-content-about ${isDarkMode ? 'dark' : ''}`}>
                <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                    <p>Usługi agencji celnej obejmują:</p>
                    <ul>
                        <li>odprawa celna importu, eksportu i tranzytu we wszystkich procedurach celnych,</li>
                        <li>konsultacja i weryfikacja dokumentów,</li>
                        <li>usługa obowiązkowych informacji taryfowych – konsultacje i reprezentacja,</li>
                        <li>oferujemy odprawę dla osób prawnych/fizycznych,</li>
                        <li>odprawa celna dla B2B i B2C,</li>
                        <li>odprawa C2C (klient-klient).</li>
                    </ul>
                    <p>Nasza zespół ekspertów pomoże Ci efektywnie rozwiązać wszystkie kwestie związane z odprawą celną, zapewniając szybkie i profesjonalne usługi.</p>
                </div>
                <div className="service-image-main-container">
                        <img src={envelope_logo} alt="logistic" className="service-image-desc"/>
                </div>
            </div>

            <center>
                <OrderCall
                    part1={"Twoje bezpieczeństwo to nasz cel. Zapewniamy dokładność, niezawodność oraz"}
                    part2={"indywidualne podejście, aby uprościć procedury celne dla Ciebie"}
                    order_call={"Kontakt"}
                    order={"Kontakt"}
                    name_type={"Twoje imię"}
                    tel_type={"Twój telefon"}
                    isDarkMode={isDarkMode}
                    messageSuccess={"Wiadomość wysłana"}
                    messageError={"Problem z wysłaniem"}
                    order_call_sending={"wysyłanie wiadomości..."}
                    order_call_problem={"problem z wysyłaniem"}
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
                service2="Transport ponadgabarytowy"
                service3="Międzynarodowa dostawa kurierska"
                service4="Usługi agencji celnej"
                service5="Logistyka magazynowa"
                service1_link={"/service1/pl"}
                service2_link={"/service3/pl"}
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
export default Service4PagePl;
