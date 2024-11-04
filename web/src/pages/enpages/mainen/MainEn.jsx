import React, { useState } from "react"; 
import { Helmet } from "react-helmet";
import Header from "../../../shared/ui/header/Header";
import { Link } from "react-router-dom";
import flag from '../../../shared/assets/icons/united-kingdom.png';
import OrderCall from "../../../shared/ui/ordercall/OrderCall";
import Footer from "../../../shared/ui/footer/Footer";
import main_photo from '../../../shared/assets/images/headimg.png';
import Services from "../../../widgets/services/Services";

const MainEn = () => {
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
        <div className={`main-page-desc ${isDarkMode ? 'dark' : ''}`}>
            <Helmet>
                <title>Libert - Home Page</title>
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
                languagelink_1={"/en"}
                languagelink_2={"/"}
                languagelink_3={"/pl"}
                photo_link={"/en"}
                order_call_sending={"sending message..."}
            />

            <div className="main-content">
                <div className="text-content-main">
                    <div className={`company-main-name-desc ${isDarkMode ? 'dark' : ''}`}>
                        logistical <br />
                        <div className="highlites">solutions</div> for <br />
                        your business
                    </div>
                    <div className={`text-container-main ${isDarkMode ? 'dark' : ''}`}>
                        <p>
                            LIBERT Group offers two main types of services: <b className="some-cont">international courier delivery</b> and <br/>
                            transport of <b className="some-cont">oversized cargo</b>. We strive to provide our clients with the highest quality services,
                            ensuring that every order meets your expectations.
                        </p>
                    </div>
                    <button className="btn-main-desc">
                        <Link to="/contact/en" style={{ textDecoration: 'none', color: '#ffffff' }}>
                            start collaboration
                        </Link>
                    </button>
                </div>
                <img src={main_photo} alt="photo" className="main-photo-desc" />
            </div>

            <center>

            <Services
                isDarkMode={isDarkMode}
                service1_link={"/service1/en"}
                service2_link={"/service3/en"}
                service3_link={"/service4/en"}
                service4_link={"/service5/en"}
                service5_link={"/service2/en"}
                service1_name={"FULFILLMENT"}
                service2_name={"Oversized transportation"}
                service3_name={"Customs agency services"}
                service4_name={"Warehouse logistics"}
                service5_name={"International courier delivery"}
            />


                <OrderCall
                    part1={"Your safety is our goal. We ensure accuracy, reliability, and"}
                    part2={"a personalized approach to make logistics as simple as possible for you"}
                    order_call={"Order a Call"}
                    order={"Order a Call"}
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
                service2="International Courier Delivery"
                service3="Oversized Transport"
                service4="Customs Agency Services"
                service5="Warehouse Logistics"
                service1_link={"/service1/en"}
                service2_link={"/service2/en"}
                service3_link={"/service3/en"}
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

export default MainEn;
