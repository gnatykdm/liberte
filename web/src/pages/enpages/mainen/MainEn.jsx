import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../../shared/ui/header/Header";
import { Link } from "react-router-dom";
import flag from '../../../shared/assets/icons/united-kingdom.png';
import OrderCall from "../../../shared/ui/ordercall/OrderCall";
import Services from "../../../widgets/services/Services";
import Footer from "../../../shared/ui/footer/Footer";
import main_photo from '../../../shared/assets/images/headimg.png';

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
            <title>Libert - Home</title>
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
    
        <div className="main-content">
            <div className="text-content-main">
                <div className={`company-main-name-desc ${isDarkMode ? 'dark' : ''}`}>
                    logistical <br />
                    <div className="highlites">solutions</div> for <br />
                    your business
                </div>
                <div className={`text-container-main ${isDarkMode ? 'dark' : ''}`}>
                    <p>
                        We are LIBERT Group, offering transportation services for<br />
                        oversized cargo and document support. We transport <br />
                        everything from combines to infrastructure projects.
                    </p>
                </div>
                <button className="btn-main-desc">
                    <Link to="/contact/en" style={{ textDecoration: 'none', color: '#ffffff' }}>
                        start cooperation
                    </Link>
                </button>
            </div>
            <img src={main_photo} alt="photo" className="main-photo-desc" />
        </div>
    
        <center>
            <Services 
                isDarkMode={isDarkMode}
                service_name={"Oversized Transportation"}
                service1_link={"/fulfillment/en"}
                service2_link={"/service/en"} 
             />
            <OrderCall
                part1={"We guarantee delivery to your location so you can"}
                part2={"focus on important matters "}
                order_call={"Request a Call"}
                order={"Order"}
                name_type={"Your Name"}
                tel_type={"Your Phone"}
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
export default MainEn;