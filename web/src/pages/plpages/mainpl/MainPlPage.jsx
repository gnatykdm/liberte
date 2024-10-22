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
            </Helmet>

            <Header 
                image={flag}
                head={"Strona główna"}
                services={"Usługi"} 
                service_drop={"Transport ponadgabarytowy"}
                about={"O nas"}
                contacts={"Kontakt"}
                call={"Zamówienie rozmowy"}
                order={"Zamówienie"}
                social_networks={"Libert w mediach społecznościowych"}
                name_type={"Twoje imię"}
                tel_type={"Twój numer telefonu"}
                main_link={"/pl"}
                about_link={"/about/pl"}
                contact_link={"/contact/pl"}
                toggleTheme={toggleTheme} 
                isDarkMode={isDarkMode}
                messageStatus={"Wiadomość wysłana"}
                service1="FulFillment"
                service2="Międzynarodowa dostawa kurierska"
                service3="Transport ponadgabarytowy"
                service4="Usługi agencji celnej"
                service5="Logistyka magazynowa"
                service1_link={"/service1/pl"}
                service2_link={"/service2/pl"}
                service3_link={"/service3/pl"}
                service4_link={"/service4/pl"}
                service5_link={"/service5/pl"}
                languagelink_1={"/en"}
                languagelink_2={"/"}
                languagelink_3={"/pl"}
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
                            LIBERT Group oferuje dwa podstawowe rodzaje usług: <b className="some-cont">dostawę kurierską</b> i <br/>
                            transport <b className="some-cont">ponadgabarytowych ładunków</b>. Dążymy do zapewnienia <br/> naszym klientom usług najwyższej jakości,
                            aby każde zlecenie spełniało Twoje oczekiwania.
                        </p>
                    </div>
                    <button className="btn-main-desc">
                        <Link to="/contact" style={{ textDecoration: 'none', color: '#ffffff' }}>
                            rozpocznij współpracę
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
                service3_link={"/service4/pl"}
                service4_link={"/service5/pl"}
                service5_link={"/service2/pl"}
                service1_name={"FULFILLMENT"}
                service2_name={"Transport ponadgabarytowy"}
                service3_name={"Usługi agencji celnej"}
                service4_name={"Logistyka magazynowa"}
                service5_name={"Międzynarodowa dostawa kurierska"}
            />


                <OrderCall
                    part1={"Twoje bezpieczeństwo to nasz cel. Zapewniamy dokładność, niezawodność oraz"}
                    part2={"indywidualne podejście, aby logistyka była dla Ciebie jak najprostsza."}
                    order_call={"Zamówienie rozmowy"}
                    order={"Zamówienie rozmowy"}
                    name_type={"Twoje imię"}
                    tel_type={"Twój telefon"}
                    isDarkMode={isDarkMode}
                    messageSuccess={"Wiadomość wysłana"}
                    messageError={"Problem z wysłaniem"}
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
                service1="FulFillment"
                service2="Międzynarodowa dostawa kurierska"
                service3="Transport ponadgabarytowy"
                service4="Usługi agencji celnej"
                service5="Logistyka magazynowa"
                service1_link={"/service1/pl"}
                service2_link={"/service2/pl"}
                service3_link={"/service3/pl"}
                service4_link={"/service4/pl"}
                service5_link={"/service5/pl"}
                languagelink_1={"/en"}
                languagelink_2={"/"}
                languagelink_3={"/pl"}
                photo_link={"/pl"}
                />

            </center>
        </div>
    );
};

export default MainPlPage;
