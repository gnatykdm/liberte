import React, { useState } from "react"; // Importuj useEffect
import { Helmet } from "react-helmet";
import MainMap from "../../../shared/ui/map/MainMap";
import Header from "../../../shared/ui/header/Header";
import flag from '../../../shared/assets/icons/poland.png';
import MessageForm from "../../../widgets/messageform/MessageForm";
import ContactInfo from "../../../widgets/contactInfo/ContactInfo";
import PageInfo from "../../../shared/ui/pageInfo/PageInfo";
import Footer from "../../../shared/ui/footer/Footer";

const ContactPlPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('isDarkMode');
        return savedTheme === 'true'; // Przekształcamy wartość na typ boolean
    });

    const toggleTheme = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode; // Przełączamy stan
            localStorage.setItem('isDarkMode', newMode); // Zapisujemy nowy stan w localStorage
            return newMode; // Zwracamy nowy stan
        });
    };

    return (
        <div className={`main-contact-page ${isDarkMode ? 'dark' : ''}`}>
            <Helmet>
                <title>Libert - Kontakty</title>
                <meta name="description" content="Skontaktuj się z nami i dowiedz się więcej o usługach transportowych, logistyce oraz rozwiązaniach magazynowych w Polsce." />
                <meta name="keywords" content="kontakty, transport, logistyka, magazynowanie, fulfillment, usługi kurierskie, agencja celna" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Libert - Kontakty" />
                <meta property="og:description" content="Skontaktuj się z nami, aby uzyskać więcej informacji na temat naszych usług transportowych i logistycznych." />
                <meta property="og:image" content={flag} />
                <meta property="og:url" content="https://www.libertgroup.pl/contact/pl" />
                <meta name="twitter:title" content="Libert - Kontakty" />
                <meta name="twitter:description" content="Skontaktuj się z nami i dowiedz się więcej o usługach transportowych, logistyce oraz rozwiązaniach magazynowych." />
                <meta name="twitter:image" content={flag} />
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
                languagelink_1={"/contact/en"}
                languagelink_2={"/contact/"}
                languagelink_3={"/contact/pl"}
                order_call_sending={"wysyłanie wiadomości..."}
                order_call_problem={"problem z wysyłaniem"}
                photo_link={"/pl"}
            />
        
            <div className="some-age-info">
                <PageInfo text="Kontakty" isDarkMode={isDarkMode} />
            </div>
            <div className="main-contact">
                <div className="contact-form">
                    <MessageForm
                        header={"Wyślij nam wiadomość"}
                        name_type={"Twoje imię"}
                        email_type={"E-mail"}
                        message_content={"Temat wiadomości"}
                        message_type={"Wiadomość..."}
                        send={"Wyślij"}
                        isDarkMode={isDarkMode}
                        messageSending={"Wysyłanie..."}
                        messageOk={"Wiadomość wysłana"}
                        messageError={"Problem z wysłaniem"}
                    />
                </div>
                <div className="map-contact">
                    <MainMap />
                </div>
            </div>            
        
            <center>
                <div className="contact-info">
                    <ContactInfo contact={"Preferujesz inne metody kontaktu?"} isDarkMode={isDarkMode} />
                </div>
        
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

export default ContactPlPage;
