import React from 'react';
import Header from '../../../shared/ui/header/Header';
import OrderCall from '../../../shared/ui/ordercall/OrderCall';
import Footer from '../../../shared/ui/footer/Footer';
import PageInfo from '../../../shared/ui/pageInfo/PageInfo';
import flag from '../../../shared/assets/icons/poland.png';
import SomeInfo from '../../../widgets/someInfo/SomeInfo';
import MainMap from '../../../shared/ui/map/MainMap';
import './AboutPlPage.css';
import { Helmet } from 'react-helmet';

const AboutPlPage = () => {
    return (
        <div className="main-about-us-page">

    <Helmet>
        <title>Libert - O Nas</title>
    </Helmet>

    <Header image={flag}
            head={"Strona Główna"}
            services={"Usługi"} 
            service_drop={"Transport nienormatywny"}
            about={"O nas"}
            contacts={"Kontakty"}
            call={"Zamów rozmowę"}
            order={"Zamów"}
            social_networks={"Libert w mediach społecznościowych"}/>

    <div className="some-age-info"><PageInfo text="O firmie"></PageInfo></div>
    
    <div className="main-content-about">
        <div className="text-container-about">
            <p>Jesteśmy firmą LIBERT Group, oferującą kompleksowe rozwiązania logistyczne dla Twojego biznesu w konkurencyjnych cenach. 
                Organizujemy międzynarodową dostawę kurierską oraz FULFILLMENT – import towaru z możliwością 
                przechowywania w magazynach w Polsce i Chinach, z późniejszą dostawą kurierską. Dzięki elastycznym warunkom celnym 
                i obsłudze możesz optymalizować swoje wydatki na logistykę.</p>
            <p className="about-us-some">
                Nasze usługi doskonale nadają się dla Twojej marki. Jesteśmy gotowi zapewnić terminową dostawę Twojego towaru do klientów, 
                oferując pełne wsparcie logistyczne, które pozwoli Ci skupić się na dalszym rozwoju marki i tworzeniu nowych kolekcji.
            </p>
        </div>
        <div className="map">
            <MainMap/>
        </div>
    </div>
    <center>
        <SomeInfo 
            question={"Czym jest FULFILLMENT?"} 
            answer={"FULFILLMENT obejmuje takie etapy jak:"}
            a1={"Organizacja importu towaru"}
            a2={"Przyjęcie towaru do magazynu"}
            a3={"Dostawa kurierska do odbiorcy"}
            a4={"Przechowywanie towaru"}
            a5={"Pakowanie towaru w magazynie"}
            a6={"Sporządzanie dokumentów towarzyszących"}/>

        <OrderCall
            part1={"Gwarantujemy dostawę do Twojego miejsca, abyś mógł"}
            part2={"skupić się na ważnych sprawach "}
            order_call={"Zamów rozmowę"}
            order={"Zamów"}
            name_type={"Twoje imię"}
            tel_type={"Twój telefon"}/>

        <Footer
            service_drop={"Transport nienormatywny"}
            head={"Menu główne"}
            head2={"Nasze kontakty"}
            services={"Usługi"}
            contacts={"Kontakty"}/>
    </center>
</div>
    );
}

export default AboutPlPage;