import React, { useState } from "react";
import { Helmet } from "react-helmet";
import MainMap from "../../../shared/ui/map/MainMap";
import Header from "../../../shared/ui/header/Header";
import flag from '../../../shared/assets/icons/united-kingdom.png';
import MessageForm from "../../../widgets/messageform/MessageForm";
import ContactInfo from "../../../widgets/contactInfo/ContactInfo";
import PageInfo from "../../../shared/ui/pageInfo/PageInfo";
import Footer from "../../../shared/ui/footer/Footer";

const ContactPlPage = () => {

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
        <div className={`main-contact-page ${isDarkMode ? 'dark' : ''}`}>
    <Helmet>
        <title>Libert - Kontakt</title>
    </Helmet>

    <Header 
        image={flag}
        head={"Strona główna"}
        services={"Usługi"} 
        service_drop={"Transport ponadgabarytowy"}
        about={"O nas"}
        contacts={"Kontakt"}
        call={"Zamów rozmowę"}
        order={"Zamów"}
        social_networks={"Libert w mediach społecznościowych"}
        name_type={"Twoje imię"}
        tel_type={"Twój numer telefonu"}
        main_link={"/pl"}
        about_link={"/about/pl"}
        contact_link={"/contact/pl"}
        service1_link={"/fulfillment/pl"}
        service2_link={"/service/pl"}
        toggleTheme={toggleTheme} // Przekazywanie funkcji przełączania motywu
        isDarkMode={isDarkMode} // Przekazywanie stanu motywu
    />

    <div className="some-age-info">
        <PageInfo text="Kontakt" isDarkMode={isDarkMode} />
    </div>
    <div className="main-contact">
        <div className="contact-form">
            <MessageForm
                header={"Wyślij nam wiadomość"}
                name_type={"Twoje imię"}
                email_type={"Email"}
                message_content={"Temat wiadomości"}
                message_type={"Wiadomość..."}
                send={"Wyślij"}
                isDarkMode={isDarkMode}
            />
        </div>
        <div className="map-contact">
            <MainMap />
        </div>
    </div>            

    <center>
        <div className="contact-info">
            <ContactInfo contact={"Preferujesz inny sposób?"} isDarkMode={isDarkMode} />
        </div>

        <Footer
            service_drop={"Transport ponadgabarytowy"}
            head={"Menu główne"}
            head2={"Strony"}
            head3={"Nasze kontakty"}
            services={"Usługi"}
            contacts={"Kontakt"}
            main_link={"/pl"}
            about_link={"/about/pl"}
            contact_link={"/contact/pl"}
            about="O nas"
            service1_link={"/service/pl"}
            service2_link={"/fulfillment/pl"}
        />
    </center>
</div>
    );
}

export default ContactPlPage;
