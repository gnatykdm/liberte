import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../shared/ui/header/Header";
import { Link } from "react-router-dom";
import OrderCall from "../../../shared/ui/ordercall/OrderCall";
import Services from "../../../widgets/services/Services";
import Footer from "../../../shared/ui/footer/Footer";
import main_photo from '../../../shared/assets/images/DeWatermark.ai_1727849070458-removebg-preview.png';
import './MainPage.css';

const MainPage = () => {
    return (
        <div className="main-page-desc">
            <Helmet>
                <title>Libert - Головна</title>
            </Helmet>

            <Header />
                <div className="main-content">
                    <div className="text-content-main">
                        <div className="company-main-name-desc">
                            логістичні <br/>
                            <div className="highlites">рішення</div> для <br/>
                            вашого бізнесу
                        </div>
                        <div className="text-container-main">
                            <p>
                                Ми компанія LIBERT Group, пропонуємо послуги з транспортування<br/> 
                                негабаритних вантажів та документального супроводу. Перевозимо <br/> 
                                від комбайнів закінчуючи інфраструктурними проектами.
                            </p>
                        </div>
                        <button className="btn-main-desc">Почати співпрацю</button>
                    </div>
                    <img src={main_photo} alt="photo" className="main-photo-desc" />
                </div> 

            <center>
                <Services />
                <OrderCall />
                <Footer />
            </center>
        </div>
    );
};

export default MainPage;
