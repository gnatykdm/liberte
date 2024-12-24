
import React, { useState } from "react"; 
import { Helmet } from "react-helmet"; 
import Header from "../../../shared/ui/header/Header"; 
import { Link } from "react-router-dom"; 
import flag from '../../../shared/assets/icons/poland.png'; 
import OrderCall from "../../../shared/ui/ordercall/OrderCall"; 
import Footer from "../../../shared/ui/footer/Footer"; 
import main_photo from '../../../shared/assets/images/headimg.png'; 
import Services from "../../../widgets/services/Services"; 

const MainPlPage = () => { 
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
                <title>Libert - Strona główna</title>
                <meta name="description" content="Libert oferuje usługi transportu ładunków ponadgabarytowych, fulfillment, dostaw kurierskich, logistyki magazynowej i inne. Zapewniamy niezawodne, tanie rozwiązania logistyczne dla Twojego biznesu." />
                <meta name="keywords" content="transport ponadgabarytowy, fulfillment, logistyka, dostawa kurierska, logistyka magazynowa, transport, usługi celne" />
                <meta property="og:title" content="Libert - Strona główna | Rozwiązania logistyczne" />
                <meta property="og:description" content="Libert oferuje usługi transportu ładunków ponadgabarytowych, fulfillment, dostaw kurierskich, logistyki magazynowej i inne. Zapewniamy niezawodne, tanie rozwiązania logistyczne dla Twojego biznesu." />
                <meta property="og:image" content={main_photo} />
                <meta property="og:url" content="https://www.libertgroup.pl/pl" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Libert - Strona główna | Rozwiązania logistyczne" />
                <meta name="twitter:description" content="Libert oferuje usługi transportu ładunków ponadgabarytowych, fulfillment, dostaw kurierskich, logistyki magazynowej i inne. Zapewniamy niezawodne, tanie rozwiązania logistyczne dla Twojego biznesu." />
                <meta name="twitter:image" content={main_photo} />
            </Helmet>

            <Header 
                image={flag}
                head={"Strona główna"}
                services={"Usługi"} 
                service_drop={"Transport ponadgabarytowy"}
                about={"O nas"}
                contacts={"Kontakt"}
                call={"Kontakt"}
                order={"Kontakt"}
                social_networks={"Libert w mediach społecznościowych"}
                name_type={"Twoje imię"}
                tel_type={"Twój numer telefonu"}
                main_link={"/pl"}
                about_link={"/about/pl"}
                contact_link={"/contact/pl"}
                toggleTheme={toggleTheme} 
                isDarkMode={isDarkMode}
                messageStatus={"Wiadomość wysłana"}
                service1="Fulfillment"
                service2="Transport ponadgabarytowy"
                service3="Międzynarodowa dostawa kurierska"
                service4="Usługi agencji celnej"
                service5="Logistyka magazynowa"
                service1_link={"/service1/pl"}
                service2_link={"/service3/pl"}
                service3_link={"/service2/pl"}
                service4_link={"/service4/pl"}
                service5_link={"/service5/pl"}
                languagelink_1={"/en"}
                languagelink_2={"/"}
                languagelink_3={"/pl"}
                order_call_sending={"wysyłanie wiadomości..."}
                order_call_problem={"problem z wysyłaniem"}
                photo_link={"/pl"}
            />

            <div className="main-content">
                <div className="text-content-main">
                    <div className={`company-main-name-desc ${isDarkMode ? 'dark' : ''}`}>
                        logistyczne <br />
                        <div className="highlites">rozwiązania</div> dla <br />
                        Twojego biznesu
                    </div>
                    <div className={`text-container-main ${isDarkMode ? 'dark' : ''}`}>
                        <p>
                            Jesteśmy jednym z liderów w dziedzinie transportu <b className="some-cont">ładunków ponadgabarytowych</b>. 
                            Dzięki wolumenowi, który zapewniamy przewoźnikom, mamy najniższe ceny na rynku. 
                            Transportujemy wszystko, od kombajnów po projekty infrastrukturalne, w tym wsparcie dokumentacyjne. 
                            Zrealizowane przez nas projekty są prezentowane na stronie 
                            <a href="https://civil-protection-humanitarian-aid.ec.europa.eu/news-stories/stories/assembling-future-providing-new-homes-ukrainians-displaced-war_en" target="_blank" rel="noopener noreferrer"> Europejskiej Komisji</a>.
                        </p>
                    </div>
                    <button className="btn-main-desc">
                        <Link to="/contact/pl" style={{ textDecoration: 'none', color: '#ffffff' }}>
                            Rozpocznij współpracę
                        </Link>
                    </button>
                </div>
                <img src={main_photo} alt="photo" className="main-photo-desc" />
            </div>

            <center>
                <Services
                    isDarkMode={isDarkMode}
                    service1_link={"/service1/pl"}
                    service2_link={"/service3/pl"}
                    service3_link={"/service2/pl"}
                    service4_link={"/service4/pl"}
                    service5_link={"/service5/pl"}
                    service1_name={"FULFILLMENT"}
                    service2_name={"Transport ponadgabarytowy"}
                    service3_name={"Międzynarodowa dostawa kurierska"}
                    service4_name={"Usługi agencji celnej"}
                    service5_name={"Logistyka magazynowa"}
                />

                <OrderCall
                    part1={"Twoje bezpieczeństwo to nasz cel. Zapewniamy dokładność, niezawodność oraz"}
                    part2={"indywidualne podejście, aby logistyka była dla Ciebie jak najprostsza"}
                    order_call={"Kontakt"}
                    order={"Kontakt"}
                    name_type={"Twoje imię"}
                    tel_type={"Twój telefon"}
                    isDarkMode={isDarkMode}
                    messageSuccess={"Wiadomość wysłana"}
                    messageError={"Problem z wysłaniem"}
                    order_call_sending={"wysyłanie wiadomości..."}
                    order_call_problem={"problem z wysyłaniem"}
                />

                <Footer
                    head="Główne menu"
                    head2="Menu"
                    head3="Nasze kontakty"
                    services={"Usługi"}
                    contacts="Kontakt"
                    main_link="/pl"
                    about_link="/about/pl"
                    contact_link="/contact/pl"
                    about="O nas"
                    service1="Fulfillment"
                    service2="Transport ponadgabarytowy"
                    service3="Międzynarodowa dostawa kurierska"
                    service4="Usługi agencji celnej"
                    service5="Logistyka magazynowa"
                    service1_link={"/service1/pl"}
                    service2_link={"/service3/pl"}
                    service3_link={"/service2/pl"}
                    service4_link={"/service4/pl"}
                    service5_link={"/service5/pl"}
                    languagelink_1={"/en"}
                    languagelink_2={"/pl"}
                    languagelink_3={"/pl"}
                    photo_link={"/pl"}
                />
            </center>
        </div>
    ); 
};

export default MainPlPage;
