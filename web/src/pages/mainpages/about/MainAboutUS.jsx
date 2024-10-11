import React from 'react';
import './MainAboutUs.css';
import Header from '../../../shared/ui/header/Header';
import OrderCall from '../../../shared/ui/ordercall/OrderCall';
import Footer from '../../../shared/ui/footer/Footer';
import PageInfo from '../../../shared/ui/pageInfo/PageInfo';
import ukraine_flag from '../../../shared/assets/icons/ukraine.png';
import SomeInfo from '../../../widgets/someInfo/SomeInfo';
import MainMap from '../../../shared/ui/map/MainMap';
import { Helmet } from 'react-helmet';


const MainAboutUS = () => {
    return (
        <div className="main-about-us-page">

        <Helmet>
            <title>Libert - Про Нас</title>
        </Helmet>

        <Header image={ukraine_flag}
                    head={"Головна"}
                    services={"Послуги"} 
                    service_drop={"Негабаритні перевезення"}
                    about={"Про нас"}
                    contacts={"Контакти"}
                    call={"Замовити дзвінок"}
                    order={"Замовити"}
                    social_networks={"Libert у соціальних мережах"}
                    name_type={"Ваше ім'я"}
                    tel_type={"Ваш номер телефону"}
                    main_link={"/"}
                    about_link={"/about"}
                    contact_link={"/contact"}/>

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
                        <div className="map">
                            <MainMap/>
                        </div>
                    </div>
            <center>
                <SomeInfo 
                    question={"Що таке FULFILLMENT?"} 
                    answer={"FULFILLMENT включає такі етапи як:"}
                    a1={"Організація ввезення товару a1"}
                    a2={"Прийом товару на склад"}
                    a3={"Курєрська доставка до отримувача"}
                    a4={"Зберігання товару"}
                    a5={"Пакування товару на склад"}
                    a6={"Оформлення супровідних документів"}/>

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
                    contacts={"Контакти"}
                    main_link={"/"}
                    about_link={"/about"}
                    contact_link={"/contact"}/>
            </center>
        </div>
    );
};

export default MainAboutUS;