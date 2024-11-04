import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import flag from '../../../../shared/assets/icons/poland.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import carbox_logo from '../../../../shared/assets/images/carbox_logo.png';

const Service3PagePl = () => {
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
                <title>Libert - Transport ponadgabarytowy</title>
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
                languagelink_1={"/service3/en"}
                languagelink_2={"/service3"}
                languagelink_3={"/service3/pl"}
                photo_link={"/pl"}
            />

            <div className="some-age-info">
                <PageInfo text="Transport ponadgabarytowy" isDarkMode={isDarkMode} />
            </div>
            
            <div className={`service-content-about ${isDarkMode ? 'dark' : ''}`}>
                <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                    <p>
                    Oferujemy usługi transportu ładunków ponadgabarytowych oraz dokumentacji towarzyszącej.
                    Przewozimy od kombajnów po obiekty infrastrukturalne. Nasze zrealizowane projekty na stronie Komisji Europejskiej mówią same za siebie.
                    Zapewniamy pełny cykl rozwiązań logistycznych, w tym uzgodnienie zezwoleń, planowanie tras oraz organizację eskorty ładunków specjalistycznymi środkami transportu. 
                    </p>

                    <p>
                        Nasze wieloletnie doświadczenie pozwala nam szybko rozwiązywać wszelkie problemy związane z transportem ładunków ponadgabarytowych, przestrzegając międzynarodowych standardów bezpieczeństwa i jakości.
                        Zaufaj nam z Twoim ładunkiem – gwarantujemy niezawodność, profesjonalizm i terminowe realizowanie zobowiązań.
                    </p>
                    
                </div>
                <div className="service-image-main-container">
                        <img src={carbox_logo} alt="logistic" className="service-image-desc"/>
                </div>
            </div>

            <center>
            <OrderCall
                    part1={"Twoje bezpieczeństwo to nasz cel. Zapewniamy dokładność, niezawodność oraz"}
                    part2={"indywidualne podejście, aby logistyka była dla Ciebie jak najprostsza."}
                    order_call={"Zamówienie rozmowy"}
                    order={"Zamówienie rozmowy"}
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
export default Service3PagePl;
