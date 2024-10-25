import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import flag from '../../../../shared/assets/icons/united-kingdom.png';
import Footer from '../../../../shared/ui/footer/Footer';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import international_logo from '../../../../shared/assets/images/internation_delivery_logo.png';

const Service2PageEn = () => {
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
                <title>Libert - International Courier Delivery</title>
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
                languagelink_1={"/service2/en"}
                languagelink_2={"/service2"}
                languagelink_3={"/service2/pl"}
                photo_link={"/en"}
            />

            <div className="some-age-info">
                <PageInfo text="International Courier Delivery" isDarkMode={isDarkMode} />
            </div>    

            <div className={`service-content-about ${isDarkMode ? 'dark' : ''}`}>
                <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                    <p>International courier delivery includes:</p>
                    <ul>
                        <li>Courier Delivery: We offer services that combine accuracy, reliability, and a personalized approach for convenient logistics.</li>
                        <li>Collaboration with Courier Companies: We work with Ukrainian and European partners, which allows us to reduce delivery costs.</li>
                        <li>Personal Savings on Delivery: Through our partnerships, you receive better rates than when organizing delivery on your own.</li>
                        <li>Quality and Speed: We ensure delivery without compromising quality and speed. Delivery time ranges from 2 to 14 working days, depending on the destination country.</li>
                    </ul>
                    <p>Our team is ready to assist you with all aspects of international delivery, ensuring your shipments always arrive on time and in perfect condition.</p>
                </div>
                <div className="service-image-main-container">
                    <div className={`logo-service-background-desc ${isDarkMode ? 'dark' : ''}`}>
                        <img src={international_logo} alt="logistic" className="service-image-desc"/>
                    </div>
                </div>
            </div>

            <center>
                <OrderCall
                    part1={"Your safety is our goal. We ensure accuracy, reliability, and"}
                    part2={"a personalized approach to make international delivery as easy as possible for you"}
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

export default Service2PageEn;
