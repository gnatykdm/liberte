import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../shared/ui/header/Header";
import { Link } from "react-router-dom";
import ukraine_flag from '../../../shared/assets/icons/ukraine.png';
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

            <Header image={ukraine_flag}
                    head={"Головна"}
                    services={"Послуги"} 
                    service_drop={"Негабаритні перевезення"}
                    about={"Про нас"}
                    contacts={"Контакти"}
                    call={"Замовити дзвінок"}
                    order={"Замовити"}
                    social_networks={"Libert у соціальних мережах"}/>

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
                        <button className="btn-main-desc">
                            <Link to="/contact" style={{ textDecoration: 'none', color: '#ffffff' }}>
                                почати співпрацю
                            </Link>
                        </button>
                    </div>
                    <img src={main_photo} alt="photo" className="main-photo-desc" />
                </div> 

            <center>
                <Services more={"Дізнатись більше"}/>
                
                <OrderCall
                    part1={"Гарантуємо доставку до вашого місця, щоб ви"}
                    part2={"могли зосередитися на важливих справах "}
                    order_call={"Замовити дзвінок"}
                    order={"Замовити"}
                    name_type={"Ваше ім'я"}
                    tel_type={"Ваш телефон"}/>
                
                <Footer
                    service_drop={"Негабаритні Перевезення"}
                    head={"Головне меню"}
                    head2={"Наші контакти"}
                    services={"Послуги"}
                    contacts={"Контакти"}/>
            </center>
        </div>
    );
};

export default MainPage;