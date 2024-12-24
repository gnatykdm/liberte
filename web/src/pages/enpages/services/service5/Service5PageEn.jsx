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
                <meta name="description" content="Warehouse logistics services including customs-licensed warehouses, goods storage, packaging, and more to optimize logistics processes." />
                <meta name="keywords" content="warehouse logistics, customs-licensed warehouses, goods storage, logistics services, packaging, insurance" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Libert - Warehouse Logistics" />
                <meta property="og:description" content="Offering warehouse logistics services such as customs-licensed warehouses, goods storage, packaging, and insurance." />
                <meta property="og:image" content={garage_logo} />
                <meta property="og:url" content="https://www.libertgroup.pl/service5/en" />
                <meta property="og:type" content="website" />
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
                languagelink_1={"/service5/en"}
                languagelink_2={"/service5/"}
                languagelink_3={"/service5/pl"}
                photo_link={"/en"}
                order_call_sending={"sending message..."}
            />

            <div className="some-age-info">
                <PageInfo text="Warehouse Logistics" isDarkMode={isDarkMode} />
            </div>
            
            <div className={`service-content-about ${isDarkMode ? 'dark' : ''}`}>
                <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                    <p>Warehouse logistics includes the following services:</p>
                    <ul>
                        <li>Customs-licensed warehouses in Poland,</li>
                        <li>Storage of goods without the need to pay duties and taxes until they are released for free circulation,</li>
                        <li>Labeling, packaging, and repackaging of goods according to the requirements of the destination country,</li>
                        <li>Management of batch numbers, series, and expiration dates of stored goods,</li>
                        <li>Insurance of goods during storage.</li>
                    </ul>
                    <p>These services help reduce costs, optimize logistics processes, and ensure the safety of goods during storage.</p>
                </div>
                <div className="service-image-main-container">
                    <img src={garage_logo} alt="Warehouse logistics services" className="service-image-desc"/>
                </div>
            </div>

            <center>
                <OrderCall
                    part1={"Your peace of mind is our goal. We ensure accuracy, reliability, and"}
                    part2={"a personalized approach to make logistics easier for you."}
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

export default Service5PageEn;
