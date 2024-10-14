import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../../shared/ui/header/Header";
import { Link } from "react-router-dom";
import flag from '../../../shared/assets/icons/poland.png';
import OrderCall from "../../../shared/ui/ordercall/OrderCall";
import Services from "../../../widgets/services/Services";
import Footer from "../../../shared/ui/footer/Footer";
import main_photo from '../../../shared/assets/images/headimg.png';

const MainPagePl = () => {

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
    
        <div className="main-content">
            <div className="text-content-main">
                <div className={`company-main-name-desc ${isDarkMode ? 'dark' : ''}`}>
                    logistyczne <br />
                    <div className="highlites">rozwiązania</div> dla <br />
                    Twojego biznesu
                </div>
                <div className={`text-container-main ${isDarkMode ? 'dark' : ''}`}>
                    <p>
                        Jesteśmy LIBERT Group, oferującą usługi transportowe <br />
                        dla ładunków ponadgabarytowych oraz wsparcie <br />
                        dokumentacyjne. Transportujemy wszystko, od kombajnów <br />
                        po projekty infrastrukturalne.
                    </p>
                </div>
                <button className="btn-main-desc">
                    <Link to="/contact/pl" style={{ textDecoration: 'none', color: '#ffffff' }}>
                        rozpocznij współpracę
                    </Link>
                </button>
            </div>
            <img src={main_photo} alt="photo" className="main-photo-desc" />
        </div>
    
        <center>
            <Services 
                isDarkMode={isDarkMode}
                service_name={"Transport ponadgabarytowy"}
                service1_link={"/fulfillment/pl"}
                service2_link={"/service/pl"} 
             />
            <OrderCall
                part1={"Gwarantujemy dostawę do Twojej lokalizacji, abyś mógł"}
                part2={"skupić się na ważnych sprawach "}
                order_call={"Zamów rozmowę"}
                order={"Zamów"}
                name_type={"Twoje imię"}
                tel_type={"Twój numer telefonu"}
                isDarkMode={isDarkMode}
            />
            <Footer
                service_drop={"Transport ponadgabarytowy"}
                head={"Menu główne"}
                head2={"Strony"}
                head3={"Nasze kontakty"}
                services={"Usługi"}
                contacts={"Kontakt"}
                main_link={"/pl"}
                about_link={"/about/pl"}
                contact_link={"/contact/pl"}
                about="O nas"
                service1_link={"/service/pl"}
                service2_link={"/fulfillment/pl"}
            />
        </center>
    </div>    
    );
}
export default MainPagePl;
