import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../shared/ui/header/Header";
import OrderCall from "../../../shared/ui/ordercall/OrderCall";
import Services from "../../../widgets/services/Services";
import Footer from "../../../shared/ui/footer/Footer";
import main_photo from '../../../shared/assets/images/DeWatermark.ai_1727849070458-removebg-preview.png';
import './MainPage.css';

const MainPage = () => {
    return (
        <div className="main-page">
            <Helmet>
                <title>Libert - Головна</title>
            </Helmet>

            <Header />
            <main>
                <div className="company-main-container">
                    <div className="main-content">
                        <div className="text-container">
                            <div className="company-main-name">
                                <span>ЛОГІСТИЧНІ</span> <br />
                                <span className="highlight">РІШЕННЯ</span> <span>ДЛЯ</span> <br/> 
                                <span>ВАШОГО БІЗНЕСУ</span>
                            </div>
                            <p className="company-main-description">
                                Ми компанія LIBERT Group, пропонуємо послуги з транспортування
                                негабаритних вантажів та документального супроводу. Перевозимо від комбайнів 
                                закінчуючи інфраструктурними проектами.
                            </p>
                            <button className="start-work-btn">почати співпрацю</button>
                        </div>
                        <div className="main-photo-container">
                            <img src={main_photo} alt="Логістичні рішення" className="main-photo" />
                        </div>
                    </div>
                </div>
            </main>
            <Services></Services>
            <center><OrderCall></OrderCall></center>
            <center><Footer/></center>
        </div>
    );
};

export default MainPage;
