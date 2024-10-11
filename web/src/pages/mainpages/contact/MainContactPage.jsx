import React from "react";
import { Helmet } from "react-helmet";
import MainMap from "../../../shared/ui/map/MainMap";
import Header from "../../../shared/ui/header/Header";
import ukraine_flag from '../../../shared/assets/icons/ukraine.png';
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

            <Header image={ukraine_flag}
                    head={"Головна"}
                    services={"Послуги"} 
                    service_drop={"Негабаритні перевезення"}
                    about={"Про нас"}
                    contacts={"Контакти"}
                    call={"Замовити дзвінок"}
                    order={"Замовити"}
                    social_networks={"Libert у соціальних мережах"}
                    name_type={"Ваше ім'я"}
                    tel_type={"Ваш номер телефону"}
                    main_link={"/"}
                    about_link={"/about"}
                    contact_link={"/contact"}/>

            <div className="some-age-info"><PageInfo text="Контакти"></PageInfo></div>
            <div className="main-contact">
                <div className="contact-form">
                    <MessageForm
                        header={"Надішліть нам повідомлення"}
                        name_type={"Ваше ім'я"}
                        email_type={"Електронна пошта"}
                        message_content={"Тема Повідомлення"}
                        message_type={"Повідомлення..."}
                        send={"Надіслати"}
                    />
                </div>
                <div className="map-contact">
                    <MainMap/>
                </div>
            </div>            
    
            <center>
                <div className="contact-info">
                    <ContactInfo contact={"Переважаєте в інший спосіб?"} />
                </div>
                
                <Footer
                    service_drop={"Негабаритні Перевезення"}
                    head={"Головне меню"}
                    head2={"Наші контакти"}
                    services={"Послуги"}
                    contacts={"Контакти"}
                    main_link={"/"}
                    about_link={"/about"}
                    contact_link={"/contact"}/>
            </center>
        </div>
    );
}
export default MainContactPage;