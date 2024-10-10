import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../shared/ui/header/Header";
import { Link } from "react-router-dom";
import flag from '../../../shared/assets/icons/poland.png';
import OrderCall from "../../../shared/ui/ordercall/OrderCall";
import Services from "../../../widgets/services/Services";
import Footer from "../../../shared/ui/footer/Footer";
import main_photo from '../../../shared/assets/images/DeWatermark.ai_1727849070458-removebg-preview.png';
import './MainPlPage.css';

const MainPlPage = () => {
    return (
        <div className="main-page-desc">
    <Helmet>
        <title>Libert - Strona Główna</title>
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

    <div className="main-content">
        <div className="text-content-main">
            <div className="company-main-name-desc">
                logistyczne <br/>
                <div className="highlites">rozwiązania</div> dla <br/>
                twojego biznesu
            </div>
            <div className="text-container-main">
                <p>
                    Jesteśmy firmą LIBERT Group, oferujemy usługi transportu<br/> 
                    ładunków nienormatywnych oraz wsparcie dokumentacyjne. Przewozimy<br/> 
                    od kombajnów po projekty infrastrukturalne.
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
        <Services more={"Dowiedz się więcej"}/>
        
        <OrderCall
            part1={"Gwarantujemy dostawę na twoje miejsce, abyś"}
            part2={"mógł skupić się na ważnych sprawach"}
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

export default MainPlPage;