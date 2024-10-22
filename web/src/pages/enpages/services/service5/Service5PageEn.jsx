import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import flag from '../../../../shared/assets/icons/united-kingdom.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import garage_logo from '../../../../shared/assets/images/garage_logo.png';

const Service5PageEn = () => {
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
                <title>Libert - Warehouse Logistics</title>
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
                languagelink_1={"/service5/en"}
                languagelink_2={"/service5"}
                languagelink_3={"/service5/pl"}
                photo_link={"/en"}
            />

            <div className="some-age-info">
                <PageInfo text="Warehouse Logistics" isDarkMode={isDarkMode} />
            </div>
            
            <div className={`service-content-about ${isDarkMode ? 'dark' : ''}`}>
                <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                    <p>Warehouse logistics includes the following services:</p>
                    <ul>
                        <li>customs-licensed warehouses in Poland,</li>
                        <li>storage of goods without the need to pay duties and taxes until they are released for free circulation,</li>
                        <li>labeling, packaging, and repackaging of goods according to the requirements of the destination country,</li>
                        <li>management of batch numbers, series, and expiration dates of stored goods,</li>
                        <li>insurance of goods during storage.</li>
                    </ul>
                    <p>These services help reduce costs, optimize logistics processes, and ensure the safety of goods during storage.</p>
                </div>
                <div className="service-image">
                    <div className={`logo-service-background-desc ${isDarkMode ? 'dark' : ''}`}>
                        <img src={garage_logo} alt="logistic" className="service-image"/>
                    </div>
                </div>
            </div>

            <center>
                <OrderCall
                    part1={"Your safety is our goal. We ensure accuracy, reliability, and"}
                    part2={"a personalized approach to simplify logistics for you."}
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

export default Service5PageEn;
