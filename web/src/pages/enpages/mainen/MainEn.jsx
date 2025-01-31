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
                <title>Libert - Home Page | Logistical Solutions</title> 
                <meta name="description" content="Libert offers transportation services for oversized cargo, fulfillment, international delivery, warehouse logistics, and more. Providing reliable, affordable solutions for your business needs." />
                <meta name="keywords" content="oversized cargo, fulfillment, logistics, international delivery, warehouse logistics, transportation, customs agency" />
                <meta property="og:title" content="Libert - Home Page | Logistical Solutions" />
                <meta property="og:description" content="Libert offers transportation services for oversized cargo, fulfillment, international delivery, warehouse logistics, and more. Providing reliable, affordable solutions for your business needs." />
                <meta property="og:image" content={main_photo} />
                <meta property="og:url" content="https://www.libertgroup.pl/en" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Libert - Home Page | Logistical Solutions" />
                <meta name="twitter:description" content="Libert offers transportation services for oversized cargo, fulfillment, international delivery, warehouse logistics, and more. Providing reliable, affordable solutions for your business needs." />
                <meta name="twitter:image" content={main_photo} />
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
                            We are among the leaders in the field of transporting <b className="some-cont">oversized cargo</b>. 
                            Due to the volume we provide to carriers, we have the lowest prices on the market. 
                            We transport everything from combines to infrastructure projects, including documentation support. 
                            Our completed projects are showcased on the 
                            <a href="https://civil-protection-humanitarian-aid.ec.europa.eu/news-stories/stories/assembling-future-providing-new-homes-ukrainians-displaced-war_en" target="_blank" rel="noopener noreferrer"> European Commission</a> website.
                        </p>
                    </div>
                    <button className="btn-main-desc">
                        <Link to="/contact/en" style={{ textDecoration: 'none', color: '#ffffff' }}>
                            Start Collaboration
                        </Link>
                    </button>
                </div>
                <img src={main_photo} alt="Main Logistics Photo" className="main-photo-desc" />
            </div>

            <center>
                <Services
                    isDarkMode={isDarkMode}
                    service1_link={"/service1/en"}
                    service2_link={"/service3/en"}
                    service3_link={"/service2/en"}
                    service4_link={"/service4/en"}
                    service5_link={"/service5/en"}
                    service1_name={"FULFILLMENT"}
                    service2_name={"Oversized Transport"}
                    service3_name={"International Courier Delivery"}
                    service4_name={"Customs Agency Services"}
                    service5_name={"Warehouse Logistics"}
                />

                <OrderCall
                    part1={"Your safety is our goal. We ensure accuracy, reliability, and"}
                    part2={"a personalized approach to make logistics as simple as possible"}
                    order_call={"Contact"}
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

export default MainEn;
