import React from 'react';
import './MainAboutUs.css';
import Header from '../../../shared/ui/header/Header';
import OrderCall from '../../../shared/ui/ordercall/OrderCall';
import Footer from '../../../shared/ui/footer/Footer';
import PageInfo from '../../../shared/ui/pageInfo/PageInfo';
import main_photo from '../../../shared/assets/images/DeWatermark.ai_1727849070458-removebg-preview.png';
import SomeInfo from '../../../widgets/someInfo/SomeInfo';

const MainAboutUS = () => {
    return (
        <div className="main-about-us-page">

            <Header></Header>
            <div className="some-age-info"><PageInfo text="Про компанію"></PageInfo></div>
            
                    <div className="main-content-about">
                        <div className="text-container-about">
                            <p>Ми, компанія LIBERT Group, пропонуємо комплексні логістичні рішення для вашого бізнесу з конкурентними цінами. 
                                    Організовуємо міжнародну кур’єрську доставку та FULFILLMENT – ввезення товару з можливістю 
                                    зберігання на складі в Польщі та Китаї з подальшою кур'єрською розсилкою. Завдяки гнучким умовам розмитнення 
                                    та обслуговування ви зможете оптимізувати свої витрати налогістику</p>
                                <p className="about-us-some">
                                Наші послуги чудово підходять для вашого бренду який створює. Ми готові забезпечити своєчасну доставку вашого товару до клієнтів, 
                                надаючи повну логістичну підтримку, яка дозволить вам зосередитися на подальшому розвитку бренду та створенні нових колекцій.
                                </p>
                        </div>
                        <img src={main_photo} alt="Логістичні рішення" className="main-photo-about" />
                    </div>
            <center>
                <SomeInfo></SomeInfo>
                <OrderCall></OrderCall>
                <Footer></Footer>
            </center>
        </div>
    );
};

export default MainAboutUS;