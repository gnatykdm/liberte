import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../shared/ui/header/Header";
import main_photo from '../../../shared/assets/images/DeWatermark.ai_1727849070458-removebg-preview.png';
import MessageForm from "../../../widgets/messageform/MessageForm";
import ContactInfo from "../../../widgets/contactInfo/ContactInfo";
import PageInfo from "../../../shared/ui/pageInfo/PageInfo";
import Footer from "../../../shared/ui/footer/Footer";
import './MainContactPage.css';

const MainContactPage = () => {
    return (
        <div className="main-contact-page">
            <Helmet>
                <title>Libert - Контакти</title>
            </Helmet>

            <Header/>
            <div className="some-age-info"><PageInfo text="Контакти"></PageInfo></div>
            <div className="main-contact">
                <div className="contact-form">
                    <MessageForm></MessageForm>
                </div>
                <img src={main_photo} alt="photo" className="contact-photo" />
            </div>

            <center>
                <div className="contact-info">
                    <ContactInfo/>
                </div>
                <Footer/>
            </center>
        </div>
    );
}
export default MainContactPage;