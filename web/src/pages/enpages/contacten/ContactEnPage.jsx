import React, { useState } from "react"; // Import useEffect
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
        return savedTheme === 'true'; // Convert the value to boolean type
    });

    const toggleTheme = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode; // Toggle the state
            localStorage.setItem('isDarkMode', newMode); // Save the new state in localStorage
            return newMode; // Return the new state
        });
    };

    return (
        <div className={`main-contact-page ${isDarkMode ? 'dark' : ''}`}>
            <Helmet>
                <title>Libert - Contacts</title>
                <meta name="description" content="Contact Libert for fulfillment, oversized transport, international courier delivery, customs agency services, and warehouse logistics." />
                <meta name="keywords" content="contact, oversized transport, fulfillment, international courier, customs services, logistics, warehouse, UK, Libert" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Libert - Contacts" />
                <meta property="og:description" content="Contact Libert for logistics services, oversized transport, and warehouse solutions." />
                <meta property="og:image" content={flag} />
                <meta property="og:url" content="https://www.libertgroup.pl/contact/en" />
                <meta name="twitter:title" content="Libert - Contacts" />
                <meta name="twitter:description" content="Get in touch with Libert for transport and logistics services." />
                <meta name="twitter:image" content={flag} />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
        
            <Header 
                image={flag}
                head={"Home"}
                services={"Services"} 
                service_drop={"Oversized Transport"}
                about={"About Us"}
                contacts={"Contact"}
                call={"Contact"}
                order={"Contact"}
                social_networks={"Libert on Social Media"}
                name_type={"Your Name"}
                tel_type={"Your Phone Number"}
                main_link={"/en"}
                about_link={"/about/en"}
                contact_link={"/contact/en"}
                toggleTheme={toggleTheme} 
                isDarkMode={isDarkMode}
                messageStatus={"Message sent"}
                service1="Fulfillment"
                service2="Oversized Transport"
                service3="International Courier Delivery"
                service4="Customs Agency Services"
                service5="Warehouse Logistics"
                service1_link={"/service1/en"}
                service2_link={"/service3/en"}
                service3_link={"/service2/en"}
                service4_link={"/service4/en"}
                service5_link={"/service5/en"}
                languagelink_1={"/contact/en"}
                languagelink_2={"/contact/"}
                languagelink_3={"/contact/pl"}
                photo_link={"/en"}
                order_call_sending={"sending message..."}
            />

            <div className="some-age-info">
                <PageInfo text="Contacts" isDarkMode={isDarkMode} />
            </div>
            <div className="main-contact">
                <div className="contact-form">
                    <MessageForm
                        header={"Send us a message"}
                        name_type={"Your Name"}
                        email_type={"E-mail"}
                        message_content={"Message Subject"}
                        message_type={"Message..."}
                        send={"Send"}
                        isDarkMode={isDarkMode}
                        messageSending={"Sending..."}
                        messageOk={"Message Sent"}
                        messageError={"Problem Sending"}
                    />
                </div>
                <div className="map-contact">
                    <MainMap />
                </div>
            </div>            
        
            <center>
                <div className="contact-info">
                    <ContactInfo contact={"Do you prefer other methods of contact?"} isDarkMode={isDarkMode} />
                </div>
        
                <Footer
                    head="Main Menu"
                    head2="Menu"
                    head3="Our Contacts"
                    services={"Services"}
                    contacts="Contact"
                    main_link="/en"
                    about_link="/about/en"
                    contact_link="/contact/en"
                    about="About Us"
                    service1="Oversized Transport"
                    service2="Fulfillment"
                    service3="International Courier Delivery"
                    service4="Customs Agency Services"
                    service5="Warehouse Logistics"
                    service1_link={"/service3/en"}
                    service2_link={"/service1/en"}
                    service3_link={"/service2/en"}
                    service4_link={"/service4/en"}
                    service5_link={"/service5/en"}
                    languagelink_1={"/en"}
                    languagelink_2={"/"}
                    languagelink_3={"/pl"}
                />
            </center>
        </div>    
    );
}

export default ContactEnPage;
