import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import flag from '../../../../shared/assets/icons/united-kingdom.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import fulfillmetn_logo from '../../../../shared/assets/images/doors_logo.png';
import '../../../mainpages/services/fulfillment/ServicePage.css';

const Service1PageEn = () => {
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
                <title>Libert - Fulfillment</title>
            </Helmet>

            <Header 
                image={flag}
                head={"Home"}
                services={"Services"} 
                service_drop={"Oversized Transport"}
                about={"About Us"}
                contacts={"Contact"}
                call={"Order a Call"}
                order={"Order"}
                social_networks={"Libert on Social Media"}
                name_type={"Your Name"}
                tel_type={"Your Phone Number"}
                main_link={"/en"}
                about_link={"/about/en"}
                contact_link={"/contact/en"}
                toggleTheme={toggleTheme} 
                isDarkMode={isDarkMode}
                messageStatus={"Message Sent"}
                service1="Fulfillment"
                service2="International Courier Delivery"
                service3="Oversized Transport"
                service4="Customs Agency Services"
                service5="Warehouse Logistics"
                service1_link={"/service1/en"}
                service2_link={"/service2/en"}
                service3_link={"/service3/en"}
                service4_link={"/service4/en"}
                service5_link={"/service5/en"}
                languagelink_1={"/service1/en"}
                languagelink_2={"/service1"}
                languagelink_3={"/service1/pl"}
                photo_link={"/en"}
                order_call_sending={"sending message..."}
            />

            <div className="some-age-info">
                <PageInfo text="FULFILLMENT" isDarkMode={isDarkMode} />
            </div>

            <div className={`service-content-about ${isDarkMode ? 'dark' : ''}`}>
            <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
            <p>As part of the fulfillment service, we offer:</p>
<ul>
    <li>📦 Storage of goods.</li>
    <li>📦 Packaging and preparation for shipment.</li>
    <li>📦 Delivery of the order to the end consumer.</li>
    <li>📦 Processing of returns and customer support.</li>
</ul>

            </div>
            

                <div className="service-image-main-container">
                        <img src={fulfillmetn_logo} alt="logistic" className="service-image-desc"/>
                </div>
            </div>

            <center>
                <OrderCall
                    part1={"Your satisfaction is our goal. We ensure accuracy, reliability, and"}
                    part2={"a personalized approach to make logistics as simple as possible for you"}
                    order_call={"Order a Call"}
                    order={"Order a Call"}
                    name_type={"Your Name"}
                    tel_type={"Your Phone"}
                    isDarkMode={isDarkMode}
                    messageSuccess={"Message Sent"}
                    messageError={"Problem Sending"}
                />

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
                service1="Fulfillment"
                service2="International Courier Delivery"
                service3="Oversized Transport"
                service4="Customs Agency Services"
                service5="Warehouse Logistics"
                service1_link={"/service1/en"}
                service2_link={"/service2/en"}
                service3_link={"/service3/en"}
                service4_link={"/service4/en"}
                service5_link={"/service5/en"}
                />
            </center>
        </div>
    );
}

export default Service1PageEn;
