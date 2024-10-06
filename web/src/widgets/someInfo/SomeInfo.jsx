import React from "react";
import { Helmet } from "react-helmet";
import './SomeInfo.css';

const SomeInfo = () => {
    return (
        <div className="info">
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
            </Helmet>

            <div className="info-container">
                <div className="info-content">
                    <div className="service-name">
                        Що таке FULFILLMENT? <br />
                        FULFILLMENT включає такі етапи як:
                    </div>
                    <div className="service-features">
                        <ul>
                            <li> Організація ввезення товару </li>
                            <li> Прийом товару на склад </li>
                            <li> Курєрська доставка до отримувача </li>
                            <li> Зберігання товару </li>
                            <li> Пакування товару на склад </li>
                            <li> Оформлення супровідних документів </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="info-container">
                <div className="info-content">
                    <div className="service-name">
                        Що таке FULFILLMENT? <br />
                        FULFILLMENT включає такі етапи як:
                    </div>
                    <div className="service-features">
                        <ul>
                            <li> Організація ввезення товару </li>
                            <li> Прийом товару на склад </li>
                            <li> Курєрська доставка до отримувача </li>
                            <li> Зберігання товару </li>
                            <li> Пакування товару на склад </li>
                            <li> Оформлення супровідних документів </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SomeInfo;
