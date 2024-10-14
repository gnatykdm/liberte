import React, { useState } from 'react';
import Header from '../../../shared/ui/header/Header';
import OrderCall from '../../../shared/ui/ordercall/OrderCall';
import Footer from '../../../shared/ui/footer/Footer';
import PageInfo from '../../../shared/ui/pageInfo/PageInfo';
import flag from '../../../shared/assets/icons/united-kingdom.png';
import SomeInfo from '../../../widgets/someInfo/SomeInfo';
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
        service_drop={"Oversized Transportation"}
        about={"About Us"}
        contacts={"Contacts"}
        call={"Request a Call"}
        order={"Order"}
        social_networks={"Libert on Social Media"}
        name_type={"Your Name"}
        tel_type={"Your Phone Number"}
        main_link={"/en"}
        about_link={"/about/en"}
        contact_link={"/contact/en"}
        service1_link={"fulfillment/en"}
        service2_link={"service/en"}
        toggleTheme={toggleTheme} // Passing function for theme toggling
        isDarkMode={isDarkMode} // Passing theme state
    />

    <div className="some-age-info">
        <PageInfo text="About the Company" isDarkMode={isDarkMode} />
    </div>

    <div className={`main-content-about ${isDarkMode ? 'dark' : ''}`}>
        <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
            <p>We, LIBERT Group, offer comprehensive logistics solutions for your business at competitive prices. 
                We organize international courier delivery and FULFILLMENT – importing goods with storage options 
                in Poland and China, followed by courier distribution. With flexible customs clearance 
                and service conditions, you can optimize your logistics costs.</p>
            <p className="about-us-some">
                Our services are a perfect fit for your brand. We are ready to ensure the timely delivery of your products 
                to customers, providing full logistical support that allows you to focus on further brand development 
                and creating new collections.
            </p>
        </div>
        <div className="map">
            <MainMap />
        </div>
    </div>

    <center>
        <SomeInfo 
            question={"What is FULFILLMENT?"} 
            answer={"FULFILLMENT includes the following stages:"}
            a1={"Organization of goods import"}
            a2={"Receiving goods at the warehouse"}
            a3={"Courier delivery to the recipient"}
            a4={"Goods storage"}
            a5={"Packing goods at the warehouse"}
            a6={"Preparation of accompanying documents"}
            isDarkMode={isDarkMode}
        />

        <OrderCall
            part1={"We guarantee delivery to your location so you can"}
            part2={"focus on important matters"}
            order_call={"Request a Call"}
            order={"Order"}
            name_type={"Your Name"}
            tel_type={"Your Phone"}
            toggleTheme={toggleTheme}
            isDarkMode={isDarkMode}
        />

        <Footer
            service_drop={"Oversized Transportation"}
            head={"Main Menu"}
            head2={"Pages"}
            head3={"Our Contacts"}
            services={"Services"}
            contacts={"Contacts"}
            main_link={"/en"}
            about_link={"/about/en"}
            contact_link={"/contact/en"}
            about="About Us"
            service1_link={"/service/en"}
            service2_link={"/fulfillment/en"}
        />
    </center>
</div>
    );
}

export default MainEnAbout;