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
                
                {/* SEO Meta Tags */}
                <meta name="description" content="Fulfillment service by Libert: Delivery to licensed customs warehouse, customs clearance, storage, packaging, shipping, and returns processing." />
                <meta name="keywords" content="Fulfillment, Delivery, Customs Clearance, Storage, Packaging, Logistics, Shipping, Returns Processing" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Libert - Fulfillment" />
                <meta property="og:description" content="Fulfillment services offered by Libert: efficient delivery, customs clearance, storage, and customer support." />
                <meta property="og:image" content={fulfillmetn_logo} />
                <meta property="og:url" content="https://www.libertgroup.pl/service1/en" />
                <meta property="og:type" content="website" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:title" content="Libert - Fulfillment" />
                <meta name="twitter:description" content="Fulfillment services offered by Libert: efficient logistics, including delivery, packaging, customs clearance, and returns processing." />
                <meta name="twitter:image" content={fulfillmetn_logo} />
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
                languagelink_1={"/service1/en"}
                languagelink_2={"/service1/"}
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
                    <ul className="fullfilment-list-style">
                        <li>📦 Delivery to our licensed customs warehouse in Europe</li>
                        <li>📦 Customs clearance of goods</li>
                        <li>📦 Storage of goods</li>
                        <li>📦 Packaging and preparation for shipping</li>
                        <li>📦 Delivery of orders to end customers</li>
                        <li>📦 Returns processing and customer support</li>
                    </ul>
                </div>

                <div className="service-image-main-container">
                    <img src={fulfillmetn_logo} alt="Fulfillment Service" className="service-image-desc"/>
                </div>
            </div>

            <center>
                <OrderCall
                    part1={"Your satisfaction is our goal. We ensure accuracy, reliability, and"}
                    part2={"a personalized approach to make logistics as simple as possible for you"}
                    order_call={"Contact"}
                    order={"Contact"}
                    name_type={"Your Name"}
                    tel_type={"Your Phone"}
                    isDarkMode={isDarkMode}
                    messageSuccess={"Message sent"}
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

export default Service1PageEn;
