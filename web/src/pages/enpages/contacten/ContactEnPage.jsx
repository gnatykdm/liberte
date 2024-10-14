import React, { useState }from "react";
import { Helmet } from "react-helmet";
import MainMap from "../../../shared/ui/map/MainMap";
import Header from "../../../shared/ui/header/Header";
import flag from '../../../shared/assets/icons/united-kingdom.png';
import MessageForm from "../../../widgets/messageform/MessageForm";
import ContactInfo from "../../../widgets/contactInfo/ContactInfo";
import PageInfo from "../../../shared/ui/pageInfo/PageInfo";
import Footer from "../../../shared/ui/footer/Footer";

const ContactEnPage = () => {

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
        <title>Libert - Contacts</title>
    </Helmet>

    <Header 
        image={flag}
        head={"Home"}
        services={"Services"} 
        service_drop={"Oversized Transportation"}
        about={"About Us"}
        contacts={"Contacts"}
        call={"Request a Call"}
        order={"Order"}
        social_networks={"Libert on Social Media"}
        name_type={"Your Name"}
        tel_type={"Your Phone Number"}
        main_link={"/en"}
        about_link={"/about/en"}
        contact_link={"/contact/en"}
        service1_link={"/fulfillment/en"}
        service2_link={"/service/en"}
        toggleTheme={toggleTheme} // Passing function for theme toggling
        isDarkMode={isDarkMode} // Passing theme state
    />

    <div className="some-age-info">
        <PageInfo text="Contacts" isDarkMode={isDarkMode} />
    </div>
    <div className="main-contact">
        <div className="contact-form">
            <MessageForm
                header={"Send us a Message"}
                name_type={"Your Name"}
                email_type={"Email"}
                message_content={"Message Subject"}
                message_type={"Message..."}
                send={"Send"}
                isDarkMode={isDarkMode}
            />
        </div>
        <div className="map-contact">
            <MainMap />
        </div>
    </div>            

    <center>
        <div className="contact-info">
            <ContactInfo contact={"Prefer a different way?"} isDarkMode={isDarkMode} />
        </div>

        <Footer
            service_drop={"Oversized Transportation"}
            head={"Main Menu"}
            head2={"Pages"}
            head3={"Our Contacts"}
            services={"Services"}
            contacts={"Contacts"}
            main_link={"/en"}
            about_link={"/about/en"}
            contact_link={"/contact/en"}
            about="About Us"
            service1_link={"/service/en"}
            service2_link={"/fulfillment/en"}
        />
    </center>
</div>
    );
}

export default ContactEnPage;