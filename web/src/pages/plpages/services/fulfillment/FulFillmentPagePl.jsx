import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import flag from '../../../../shared/assets/icons/poland.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import service_img from '../../../../shared/assets/images/service.jpg';
import '../../../mainpages/services/fulfillment/ServicePage.css';

const FulFillmentPagePl = () => {

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
                head={"Strona główna"}
                services={"Usługi"} 
                service_drop={"Transport ponadgabarytowy"}
                about={"O nas"}
                contacts={"Kontakt"}
                call={"Zamów rozmowę"}
                order={"Zamów"}
                social_networks={"Libert w mediach społecznościowych"}
                name_type={"Twoje imię"}
                tel_type={"Twój numer telefonu"}
                main_link={"/pl"}
                about_link={"/about/pl"}
                contact_link={"/contact/pl"}
                service1_link={"fulfillment/pl"}
                service2_link={"service/pl"}
                toggleTheme={toggleTheme} // Przekazywanie funkcji przełączania motywu
                isDarkMode={isDarkMode} // Przekazywanie stanu motywu
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
                    <img src={service_img} alt="usługa"/>
                </div>
            </div>

            <center>
                <OrderCall
                    part1={"Gwarantujemy dostawę do Twojej lokalizacji, abyś"}
                    part2={"mógł się skupić na ważnych zadaniach"}
                    order_call={"Zamów rozmowę"}
                    order={"Zamów"}
                    name_type={"Twoje imię"}
                    tel_type={"Twój numer telefonu"}
                    isDarkMode={isDarkMode}/>

                <Footer
                    service_drop={"Transport ponadgabarytowy"}
                    head={"Menu główne"}
                    head2={"Strony"}
                    services={"Usługi"}
                    contacts={"Kontakt"}
                    main_link={"/pl"}
                    about_link={"/about/pl"}
                    contact_link={"/contact/pl"}
                    head3={"Nasze kontakty"}
                    about={"O nas"}
                    service1_link={"/service/pl"}
                    service2_link={"/fulfillment/pl"}/>
            </center>
        </div>
    );
}

export default FulFillmentPagePl;
