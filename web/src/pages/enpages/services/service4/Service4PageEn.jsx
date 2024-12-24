import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import flag from '../../../../shared/assets/icons/united-kingdom.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import envelope_logo from '../../../../shared/assets/images/envelope_logo.png';

const Service4PageEn = () => {
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
                <title>Libert - Customs Agency Services</title>
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
                languagelink_1={"/service4/en"}
                languagelink_2={"/service4/"}
                languagelink_3={"/service4/pl"}
                photo_link={"/en"}
                order_call_sending={"sending message..."}
            />


            <div className="some-age-info">
                <PageInfo text="Customs Agency Services" isDarkMode={isDarkMode} />
            </div>
            
            <div className={`service-content-about ${isDarkMode ? 'dark' : ''}`}>
                <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                    <p>Our customs agency services include:</p>
                    <ul>
                        <li>customs clearance for import, export, and transit in all customs procedures,</li>
                        <li>consultation and verification of documents,</li>
                        <li>mandatory tariff information service – consultations and representation,</li>
                        <li>customs clearance services for legal and natural persons,</li>
                        <li>customs clearance for B2B and B2C,</li>
                        <li>C2C clearance (customer to customer).</li>
                    </ul>
                    <p>Our team of experts will help you effectively resolve all matters related to customs clearance, ensuring fast and professional services.</p>
                </div>
                <div className="service-image-main-container">
                        <img src={envelope_logo} alt="logistic" className="service-image-desc"/>
                </div>
            </div>

            <center>
                <OrderCall
                    part1={"Your safety is our goal. We ensure accuracy, reliability, and"}
                    part2={"a personalized approach to simplify customs procedures for you"}
                    order_call={"Contact"}
                    order={"Contact"}
                    name_type={"Your Name"}
                    tel_type={"Your Phone"}
                    isDarkMode={isDarkMode}
                    messageSuccess={"Message Sent"}
                    messageError={"Problem Sending"}
                    order_call_sending={"sending message..."}
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
                service2="Oversized Transport"
                service3="International Courier Delivery"
                service4="Customs Agency Services"
                service5="Warehouse Logistics"
                service1_link={"/service1/en"}
                service2_link={"/service3/en"}
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

export default Service4PageEn;
