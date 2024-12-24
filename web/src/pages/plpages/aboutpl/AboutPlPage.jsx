import React, { useState } from 'react'; 
import Header from '../../../shared/ui/header/Header'; 
import OrderCall from '../../../shared/ui/ordercall/OrderCall'; 
import Footer from '../../../shared/ui/footer/Footer'; 
import PageInfo from '../../../shared/ui/pageInfo/PageInfo'; 
import flag from '../../../shared/assets/icons/poland.png'; 
import MainMap from '../../../shared/ui/map/MainMap'; 
import { Helmet } from 'react-helmet'; 
import { Link } from 'react-router-dom';

const AboutPlPage = () => {
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
        <div className={`main-about-us-page ${isDarkMode ? 'dark' : ''}`}>
            <Helmet>
                <title>Libert - O nas</title>
                <meta name="description" content="LIBERT Group to zespół profesjonalistów, którzy oferują kompleksowe rozwiązania logistyczne, w tym międzynarodową dostawę kurierską, transport ponadgabarytowy i usługi agencji celnej." />
                <meta name="keywords" content="logistyka, transport ponadgabarytowy, międzynarodowa dostawa, agencja celna, usługi logistyczne" />
                <meta property="og:title" content="Libert - O nas" />
                <meta property="og:description" content="LIBERT Group specjalizuje się w transporcie ponadgabarytowym, dostawie kurierskiej oraz kompleksowych usługach agencji celnej." />
                <meta property="og:image" content={flag} />
                <meta property="og:url" content="https://www.libertgroup.pl/about/pl" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Libert - O nas" />
                <meta name="twitter:description" content="LIBERT Group specjalizuje się w transporcie ponadgabarytowym, dostawie kurierskiej oraz kompleksowych usługach agencji celnej." />
                <meta name="twitter:image" content={flag} />
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
                languagelink_1={"/about/en"}
                languagelink_2={"/about/"}
                languagelink_3={"/about/pl"}
                order_call_sending={"wysyłanie wiadomości..."}
                order_call_problem={"problem z wysyłaniem"}
                photo_link={"/pl"}
            />

            <div className="some-age-info">
                <PageInfo text="O firmie" isDarkMode={isDarkMode} />
            </div>
            
            <div className={`main-content-about ${isDarkMode ? 'dark' : ''}`}>
                <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                    <p>LIBERT Group to zespół profesjonalistów, którzy połączyli swoje wieloletnie doświadczenie, aby stworzyć firmę, <br/> 
                    która oferuje pełen zakres rozwiązań logistycznych. Specjalizujemy się w międzynarodowej dostawie kurierskiej, <br/> 
                    transporcie ponadgabarytowych ładunków oraz świadczeniu kompleksowych usług agencji celnych.</p>
                    <p className="about-us-some">
                    Nasi klienci otrzymują nie tylko niezawodność i dokładność w każdej operacji, ale również indywidualne podejście do każdego zapytania. Zapewniamy ciągłość 
                    i wysoką efektywność we wszystkich aspektach logistyki, aby Twoje towary zawsze docierały na miejsce na czas i bezpiecznie.
                    </p>
                </div>
                <div className="map">
                    <MainMap />
                </div>
            </div>

            <center>
                <OrderCall
                    part1={"Twoje bezpieczeństwo to nasz cel. Zapewniamy dokładność, niezawodność oraz"}
                    part2={"indywidualne podejście, aby logistyka była dla Ciebie jak najprostsza"}
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
};

export default AboutPlPage;
