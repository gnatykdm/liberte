import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import flag from '../../../../shared/assets/icons/ukraine.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import service_img from '../../../../shared/assets/images/service.jpg';
import './ServicePage.css';

const FulFillment = () => {

       
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
                <title>Libert - FulFillment</title>
            </Helmet>

            <Header 
                image={flag}
                head={"Головна"}
                services={"Послуги"} 
                service_drop={"Негабаритні перевезення"}
                about={"Про нас"}
                contacts={"Контакти"}
                call={"Замовити дзвінок"}
                order={"Замовити"}
                social_networks={"Libert у соціальних мережах"}
                name_type={"Ваше ім'я"}
                tel_type={"Ваш номер телефону"}
                main_link={"/"}
                about_link={"/about"}
                contact_link={"/contact"}
                toggleTheme={toggleTheme} 
                isDarkMode={isDarkMode} 
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
                    part1={"Гарантуємо доставку до вашого місця, щоб ви"}
                    part2={"могли зосередитися на важливих справах "}
                    order_call={"Замовити дзвінок"}
                    order={"Замовити"}
                    name_type={"Ваше ім'я"}
                    tel_type={"Ваш телефон"}
                    toggleTheme={toggleTheme}
                    isDarkMode={isDarkMode}
                />

                <Footer
                    service_drop={"Негабаритні Перевезення"}
                    head={"Головне меню"}
                    head2={"Наші контакти"}
                    services={"Послуги"}
                    contacts={"Контакти"}
                    main_link={"/"}
                    about_link={"/about"}
                    contact_link={"/contact"}
                />
            </center>
        </div>
    );
}
export default FulFillment;