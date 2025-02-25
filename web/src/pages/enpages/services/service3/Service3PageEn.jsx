import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import flag from '../../../../shared/assets/icons/united-kingdom.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import PhotoSlider from '../../../../shared/ui/slider/PhotoSlider';

const Service3PageEn = () => {
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
                <title>Libert - Oversized Transport</title>
                
                {/* SEO Meta Tags */}
                <meta name="description" content="We provide oversized cargo transport services, including everything from combines to infrastructure objects. We offer full logistics solutions, route planning, and transport escort." />
                <meta name="keywords" content="Oversized transport, cargo transport, logistics, transport escort, route planning, permits" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Libert - Oversized Transport" />
                <meta property="og:description" content="Libert provides professional oversized transport services. We handle permits, route planning, and transport escort for large and specialized cargo." />
                <meta property="og:image" content={flag} />
                <meta property="og:url" content="https://www.libertgroup.pl/en/service3/en" />
                <meta property="og:type" content="website" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:title" content="Libert - Oversized Transport" />
                <meta name="twitter:description" content="We offer oversized cargo transport services, ensuring reliable and timely deliveries with full logistical support." />
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
                languagelink_1={"/service3/en"}
                languagelink_2={"/service3/"}
                languagelink_3={"/service3/pl"}
                photo_link={"/en"}
                order_call_sending={"sending message..."}
            />

            <div className="some-age-info">
                <PageInfo text="Oversized Transport" isDarkMode={isDarkMode} />
            </div>
            
            <div className={`service-content-about ${isDarkMode ? 'dark' : ''}`}>
                <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                    <p>
                        We offer oversized cargo transport services and accompanying documentation. 
                        We transport everything from combines to infrastructure objects. Our completed projects listed on the European Commission website speak for themselves.
                        We provide a full cycle of logistical solutions, including obtaining permits, route planning, and organizing escort for cargo with specialized transport means.
                    </p>

                    <p>
                        Our many years of experience allow us to quickly resolve any issues related to oversized cargo transport while adhering to international safety and quality standards.
                        Trust us with your cargo – we guarantee reliability, professionalism, and timely execution of commitments.
                    </p>
                </div>
                <div className="service-image-main-container">
                    <PhotoSlider/>
                </div>
            </div>

            <center>
                <OrderCall
                    part1={"Your safety is our goal. We ensure accuracy, reliability, and"}
                    part2={"a personalized approach to make logistics as simple as possible."}
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

export default Service3PageEn;
