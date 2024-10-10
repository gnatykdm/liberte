import React from 'react';
import Header from '../../../shared/ui/header/Header';
import OrderCall from '../../../shared/ui/ordercall/OrderCall';
import Footer from '../../../shared/ui/footer/Footer';
import PageInfo from '../../../shared/ui/pageInfo/PageInfo';
import flag from '../../../shared/assets/icons/united-kingdom.png';
import SomeInfo from '../../../widgets/someInfo/SomeInfo';
import MainMap from '../../../shared/ui/map/MainMap';
import './AboutEnPage.css';
import { Helmet } from 'react-helmet';

const MainEnAbout = () => {
    return (
        <div className="main-about-us-page">

        <Helmet>
            <title>Libert - About</title>
        </Helmet>   

        <Header image={flag}
                head={"Home"}
                services={"Services"} 
                service_drop={"Oversized Transportation"}
                about={"About Us"}
                contacts={"Contacts"}
                call={"Request a Call"}
                order={"Order"}
                social_networks={"Libert on Social Media"}/>
    
        <div className="some-age-info"><PageInfo text="About the Company"></PageInfo></div>
    
        <div className="main-content-about">
            <div className="text-container-about">
                <p>We, the LIBERT Group, offer comprehensive logistic solutions for your business at competitive prices. 
                    We organize international courier deliveries and FULFILLMENT – importing goods with the possibility 
                    of storage in warehouses in Poland and China with further courier distribution. With flexible customs 
                    clearance and service conditions, you can optimize your logistics costs.
                </p>
                <p className="about-us-some">
                    Our services are perfect for your growing brand. We are ready to ensure the timely delivery of your products to customers, 
                    providing full logistic support, allowing you to focus on further brand development and creating new collections.
                </p>
            </div>
            <div className="map">
                <MainMap/>
            </div>
        </div>
    
        <center>
            <SomeInfo 
                question={"What is FULFILLMENT?"} 
                answer={"FULFILLMENT includes the following stages:"}
                a1={"Organizing the import of goods"}
                a2={"Receiving goods at the warehouse"}
                a3={"Courier delivery to the recipient"}
                a4={"Storage of goods"}
                a5={"Packing goods at the warehouse"}
                a6={"Preparation of accompanying documents"}/>
    
            <OrderCall
                part1={"We guarantee delivery to your location so you"}
                part2={"can focus on important tasks"}
                order_call={"Request a Call"}
                order={"Order"}
                name_type={"Your Name"}
                tel_type={"Your Phone"}/>
    
            <Footer
                service_drop={"Oversized Transportation"}
                head={"Main Menu"}
                head2={"Our Contacts"}
                services={"Services"}
                contacts={"Contacts"}/>
        </center>
    </div>
    );
}

export default MainEnAbout;