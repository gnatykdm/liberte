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
                languagelink_1={"/service2/en"}
                languagelink_2={"/service2/"}
                languagelink_3={"/service2/pl"}
                photo_link={"/en"}
                order_call_sending={"sending message..."}
            />


            <div className="some-age-info">
                <PageInfo text="International Courier Delivery" isDarkMode={isDarkMode} />
            </div>    

            <div className={`service-content-about ${isDarkMode ? 'dark' : ''}`}>
                <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                    <p>International courier delivery includes:</p>
                    <ul>
                        <li><b className="some-cont">Courier Delivery:</b> We offer services that combine accuracy, reliability, and a personalized approach for convenient logistics.</li>
                        <li><b className="some-cont">Collaboration with Courier Companies:</b> We work with Ukrainian and European partners, which allows us to reduce delivery costs.</li>
                        <li><b className="some-cont">Personal Savings on Delivery:</b> Through our partnerships, you receive better rates than when organizing delivery on your own.</li>
                        <li><b className="some-cont">Quality and Speed:</b> We ensure delivery without compromising quality and speed. Delivery time ranges from 2 to 14 working days, depending on the destination country.</li>
                    </ul>
                    <p>Our team is ready to assist you with all aspects of international delivery, ensuring your shipments always arrive on time and in perfect condition.</p>
                </div>
                <div className="service-image-main-container">
                        <img src={international_logo} alt="logistic" className="service-image-desc"/>
                </div>
            </div>

            <center>
                <OrderCall
                    part1={"Your safety is our goal. We ensure accuracy, reliability, and"}
                    part2={"a personalized approach to make international delivery as easy as possible for you"}
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

export default Service2PageEn;
