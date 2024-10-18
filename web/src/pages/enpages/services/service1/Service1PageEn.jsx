import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import flag from '../../../../shared/assets/icons/united-kingdom.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import service_img from '../../../../shared/assets/images/service.jpg';
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
                service1_link={"/fulfillment/en"}
                service2_link={"/service/en"}
                messageStatus={"Message Sent"}
            />

            <div className="some-age-info">
                <PageInfo text="FULFILLMENT" isDarkMode={isDarkMode} />
            </div>

            <div className={`service-content-about ${isDarkMode ? 'dark' : ''}`}>
                <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur reprehenderit assumenda maiores sint, 
                        <br/> non nesciunt nemo a atque, quae quis asperiores! Voluptatibus obcaecati aspernatur 
                        <br/> adipisci, nihil nostrum quibusdam velit at.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum modi est deserunt ipsa adipisci 
                        <br/> delectus culpa perspiciatis placeat illum, magnam cumque, necessitatibus rem molestias facilis!
                        <br/> Inventore distinctio modi dignissimos consectetur?</p>
                </div>
                <div className="service-img-page">
                    <img src={service_img} alt="service"/>
                </div>
            </div>

            <center>
                <OrderCall
                    part1={"Your satisfaction is our goal. We ensure accuracy, reliability, and"}
                    part2={"a personalized approach to make logistics as simple as possible for you."}
                    order_call={"Order a Call"}
                    order={"Order a Call"}
                    name_type={"Your Name"}
                    tel_type={"Your Phone"}
                    isDarkMode={isDarkMode}
                    messageSuccess={"Message Sent"}
                    messageError={"Problem Sending"}
                />

                <Footer
                    service_drop={"Oversized Transport"}
                    head={"Main Menu"}
                    head2={"Pages"}
                    head3={"Our Contacts"}
                    services={"Services"}
                    contacts={"Contact"}
                    main_link="/en"
                    about_link="/about/en"
                    contact_link="/contact/en"
                    about="About Us"
                    service1_link={"/service/en"}
                    service2_link={"/fulfillment/en"}
                    fulfillment={"Couriers"}
                />
            </center>
        </div>
    );
}

export default Service1PageEn;
