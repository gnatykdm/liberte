import React from "react";
import { Helmet } from "react-helmet";
import MainMap from "../../../shared/ui/map/MainMap";
import Header from "../../../shared/ui/header/Header";
import flag from '../../../shared/assets/icons/poland.png';
import MessageForm from "../../../widgets/messageform/MessageForm";
import ContactInfo from "../../../widgets/contactInfo/ContactInfo";
import PageInfo from "../../../shared/ui/pageInfo/PageInfo";
import Footer from "../../../shared/ui/footer/Footer";
import './ContactPlPage.css';

const ContactPlPage = () => {
    return (
        <div className="main-contact-page">
    <Helmet>
        <title>Libert - Kontakty</title>
    </Helmet>

    <Header image={flag}
            head={"Strona Główna"}
            services={"Usługi"} 
            service_drop={"Transport nienormatywny"}
            about={"O nas"}
            contacts={"Kontakty"}
            call={"Zamów rozmowę"}
            order={"Zamów"}
            social_networks={"Libert w mediach społecznościowych"}
            name_type={"Imie"}
            tel_type={"Numer telefonu"}/>

    <div className="some-age-info"><PageInfo text="Kontakty"></PageInfo></div>
    
    <div className="main-contact">
        <div className="contact-form">
            <MessageForm
                header={"Wyślij nam wiadomość"}
                name_type={"Twoje imię"}
                email_type={"Adres e-mail"}
                message_content={"Temat wiadomości"}
                message_type={"Wiadomość..."}
                send={"Wyślij"}
            />
        </div>
        <div className="map-contact">
            <MainMap/>
        </div>
    </div>            

    <center>
        <div className="contact-info">
            <ContactInfo contact={"Preferujesz inny sposób?"} />
        </div>
        
        <Footer
            service_drop={"Transport nienormatywny"}
            head={"Menu główne"}
            head2={"Nasze kontakty"}
            services={"Usługi"}
            contacts={"Kontakty"}
            main_link={"/pl"}
            about_link={"/about/pl"}
            contact_link={"/contact/pl"}/>
    </center>
</div>
    );
}

export default ContactPlPage;