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
                languagelink_1={"/about/en"}
                languagelink_2={"/about"}
                languagelink_3={"/about/pl"}
                photo_link={"/en"}
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
                    part2={"a personalized approach to make logistics as easy as possible for you."}
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
};

export default MainEnAbout;
