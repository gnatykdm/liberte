import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import flag from '../../../../shared/assets/icons/united-kingdom.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import service_img from '../../../../shared/assets/images/service.jpg';
import '../../../mainpages/services/fulfillment/ServicePage.css';

const HeadServicePageEn = () => {

       
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
                <title>Libert - Oversized Transportation</title>
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
            service1_link={"/fulfillment/en"}
            service2_link={"/service/en"}
            toggleTheme={toggleTheme} // Passing function for theme toggling
            isDarkMode={isDarkMode} // Passing theme state
            />

            <div className="some-age-info">
                <PageInfo text="Oversized Transportation" isDarkMode={isDarkMode} />
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
                    part1={"We guarantee delivery to your location so you"}
                    part2={"can focus on important tasks"}
                    order_call={"Request a Call"}
                    order={"Order"}
                    name_type={"Your Name"}
                    tel_type={"Your Phone"}
                    isDarkMode={isDarkMode}/>
    
            <Footer
                service_drop={"Oversized Transportation"}
                head={"Main Menu"}
                head2={"Pages"}
                services={"Services"}
                contacts={"Contacts"}
                main_link={"/en"}
                about_link={"/about/en"}
                contact_link={"/contact/en"}
                head3={"Our Contacts"}
                about={"About Us"}
                service1_link={"/service/en"}
                service2_link={"/fulfillment/en"}/>
            </center>
        </div>
    );
}
export default HeadServicePageEn;