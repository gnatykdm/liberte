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
                head={"Strona Główna"}
                services={"Usługi"} 
                service_drop={"Transport Nienormatywny"}
                about={"O nas"}
                contacts={"Kontakty"}
                call={"Zamów rozmowę"}
                order={"Zamów"}
                social_networks={"Libert w mediach społecznościowych"}
                name_type={"Twoje imię"}
                tel_type={"Twój numer telefonu"}
                main_link={"/pl"}
                about_link={"/about/pl"}
                contact_link={"/contact/pl"}
                toggleTheme={toggleTheme} 
                isDarkMode={isDarkMode}
                service1_link={"/fulfillment/pl"}
                service2_link={"/service/pl"}
                messageStatus={"Wiadomość wysłana"}
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
                    part1={"Twoje zadowolenie to nasz cel. Zapewniamy dokładność, niezawodność oraz"}
                    part2={"indywidualne podejście, aby logistyka była maksymalnie prosta dla Ciebie"}
                    order_call={"Zamów rozmowę"}
                    order={"Zamów rozmowę"}
                    name_type={"Twoje imię"}
                    tel_type={"Twój telefon"}
                    isDarkMode={isDarkMode}
                    messageSuccess={"Wiadomość wysłana"}
                    messageError={"Problem z wysłaniem"}
                    />

<Footer
                    service_drop={"Transport Nienormatywny"}
                    head={"Menu Główne"}
                    head2={"Strony"}
                    head3={"Nasze Kontakty"}
                    services={"Usługi"}
                    contacts={"Kontakty"}
                    main_link={"/pl"}
                    about_link={"/about/pl"}
                    contact_link={"/contact/pl"}
                    about="O Nas"
                    service1_link={"/service/pl"}
                    service2_link={"/fulfillment/pl"}
                    fulfillment={"Kurierzy"}
                />
            </center>
        </div>
    );
}

export default FulFillmentPagePl;
