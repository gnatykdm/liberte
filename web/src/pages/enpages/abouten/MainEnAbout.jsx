import React, { useState } from 'react'; 
import Header from '../../../shared/ui/header/Header'; 
import OrderCall from '../../../shared/ui/ordercall/OrderCall'; 
import Footer from '../../../shared/ui/footer/Footer'; 
import PageInfo from '../../../shared/ui/pageInfo/PageInfo'; 
import flag from '../../../shared/assets/icons/united-kingdom.png'; 
import MainMap from '../../../shared/ui/map/MainMap'; 
import { Helmet } from 'react-helmet'; 

const MainEnAbout = () => {
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
        <div className={`main-about-us-page ${isDarkMode ? 'dark' : ''}`}>
            <Helmet>
                <title>Libert - About Us</title>
                <meta name="description" content="LIBERT Group offers a full range of logistics solutions including international courier delivery, oversized cargo transport, and comprehensive customs agency services." />
                <meta name="keywords" content="logistics, oversized transport, international courier, customs agency services, warehouse logistics" />
                <meta property="og:title" content="Libert - About Us" />
                <meta property="og:description" content="LIBERT Group specializes in international courier services, oversized cargo transport, and customs agency services." />
                <meta property="og:image" content={flag} />
                <meta property="og:url" content="https://www.libertgroup.pl/about/en" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Libert - About Us" />
                <meta name="twitter:description" content="LIBERT Group specializes in international courier services, oversized cargo transport, and customs agency services." />
                <meta name="twitter:image" content={flag} />
                <meta name="robots" content="index, follow" />
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
                languagelink_1={"/about/en"}
                languagelink_2={"/about"}
                languagelink_3={"/about/pl"}
                photo_link={"/en"}
                order_call_sending={"sending message..."}
            />

            <div className="some-age-info">
                <PageInfo text="About the Company" isDarkMode={isDarkMode} />
            </div>
            
            <div className={`main-content-about ${isDarkMode ? 'dark' : ''}`}>
                <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                    <p>LIBERT Group is a team of professionals who have combined their years of experience to create a company that offers a full range of logistics solutions. We specialize in international courier delivery, oversized cargo transport, and comprehensive customs agency services.</p>
                    <p className="about-us-some">
                    Our clients receive not only reliability and accuracy in every operation but also a personalized approach to every inquiry. We ensure continuity and high efficiency in all aspects of logistics so that your goods always arrive on time and safely.
                    </p>
                </div>
                <div className="map">
                    <MainMap />
                </div>
            </div>

            <center>
                <OrderCall
                    part1={"Your safety is our goal. We ensure accuracy, reliability, and"}
                    part2={"a personalized approach to make logistics as easy as possible."}
                    order_call={"contact"}
                    order={"Contact"}
                    name_type={"Your Name"}
                    tel_type={"Your Phone"}
                    isDarkMode={isDarkMode}
                    messageSuccess={"Message sent"}
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
};

export default MainEnAbout;
