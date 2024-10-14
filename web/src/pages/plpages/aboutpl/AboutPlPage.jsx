import React, { useState } from 'react';
import Header from '../../../shared/ui/header/Header';
import OrderCall from '../../../shared/ui/ordercall/OrderCall';
import Footer from '../../../shared/ui/footer/Footer';
import PageInfo from '../../../shared/ui/pageInfo/PageInfo';
import flag from '../../../shared/assets/icons/poland.png';
import SomeInfo from '../../../widgets/someInfo/SomeInfo';
import MainMap from '../../../shared/ui/map/MainMap';
import { Helmet } from 'react-helmet';

const AboutPlPage = () => {


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
        <title>Libert - O nas</title>
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
        <PageInfo text="O firmie" isDarkMode={isDarkMode} />
    </div>

    <div className={`main-content-about ${isDarkMode ? 'dark' : ''}`}>
        <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
            <p>My, LIBERT Group, oferujemy kompleksowe rozwiązania logistyczne dla Twojego biznesu w konkurencyjnych cenach. 
                Organizujemy międzynarodową dostawę kurierską i FULFILLMENT – import towarów z możliwością magazynowania 
                w Polsce i Chinach, a następnie dystrybucję kurierską. Dzięki elastycznym warunkom odprawy celnej 
                i usług, możesz zoptymalizować koszty logistyczne.</p>
            <p className="about-us-some">
                Nasze usługi idealnie pasują do Twojej marki. Jesteśmy gotowi zapewnić terminową dostawę Twoich produktów 
                do klientów, oferując pełne wsparcie logistyczne, co pozwala Ci skupić się na dalszym rozwoju marki 
                i tworzeniu nowych kolekcji.
            </p>
        </div>
        <div className="map">
            <MainMap />
        </div>
    </div>

    <center>
        <SomeInfo 
            question={"Czym jest FULFILLMENT?"} 
            answer={"FULFILLMENT obejmuje następujące etapy:"}
            a1={"Organizacja importu towarów"}
            a2={"Odbiór towarów w magazynie"}
            a3={"Dostawa kurierska do odbiorcy"}
            a4={"Magazynowanie towarów"}
            a5={"Pakowanie towarów w magazynie"}
            a6={"Przygotowanie dokumentów towarzyszących"}
            isDarkMode={isDarkMode}
        />

        <OrderCall
            part1={"Gwarantujemy dostawę do Twojej lokalizacji, abyś mógł"}
            part2={"skupić się na ważnych sprawach"}
            order_call={"Zamów rozmowę"}
            order={"Zamów"}
            name_type={"Twoje imię"}
            tel_type={"Twój numer telefonu"}
            toggleTheme={toggleTheme}
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

export default AboutPlPage;
