import React from "react";
import { Helmet } from "react-helmet";
import MainMap from "../../../shared/ui/map/MainMap";
import Header from "../../../shared/ui/header/Header";
import flag from '../../../shared/assets/icons/united-kingdom.png';
import MessageForm from "../../../widgets/messageform/MessageForm";
import ContactInfo from "../../../widgets/contactInfo/ContactInfo";
import PageInfo from "../../../shared/ui/pageInfo/PageInfo";
import Footer from "../../../shared/ui/footer/Footer";
import './ContactEnPage.css';

const ContactEnPage = () => {
    return (
        
        <div className="main-contact-page">
                    <Helmet>
                        <title>Libert - Contacts</title>
                    </Helmet>
        
                    <Header image={flag}
                            head={"Home"}
                            services={"Services"} 
                            service_drop={"Oversized Transportation"}
                            about={"About Us"}
                            contacts={"Contacts"}
                            call={"Request a Call"}
                            order={"Order"}
                            social_networks={"Libert on Social Media"}/>
        
                    <div className="some-age-info"><PageInfo text="Contacts"></PageInfo></div>
                    <div className="main-contact">
                        <div className="contact-form">
                            <MessageForm
                                header={"Send us a Message"}
                                name_type={"Your Name"}
                                email_type={"Email"}
                                message_content={"Message Subject"}
                                message_type={"Message..."}
                                send={"Send"}
                            />
                        </div>
                        <div className="map-contact">
                            <MainMap/>
                        </div>
                    </div>            
        
                    <center>
                        <div className="contact-info">
                            <ContactInfo contact={"Prefer another way to reach us?"} />
                        </div>
                        
                        <Footer
                            service_drop={"Oversized Transportation"}
                            head={"Main Menu"}
                            head2={"Our Contacts"}
                            services={"Services"}
                            contacts={"Contacts"}/>
                    </center>
                </div>
    );
}

export default ContactEnPage;