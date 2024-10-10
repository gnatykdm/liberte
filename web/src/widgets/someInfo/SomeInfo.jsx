import React from "react";
import { Helmet } from "react-helmet";
import './SomeInfo.css';

const SomeInfo = ({ question, answer, a1, a2, a3, a4, a5, a6 }) => {
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
                        <div className="service-question">{ question }</div> <br />
                        <span className="service-second">{ answer }</span>
                    </div>
                    <div className="service-features">
                        <ul>
                            <li> { a1 } </li>
                            <li> { a2 } </li>
                            <li> { a3 }</li>
                            <li> { a4 } </li>
                            <li> { a5 } </li>
                            <li> { a6 } </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="info-container">
                <div className="info-content">
                    <div className="service-name">
                        <div className="service-question">{ question }</div> <br />
                        <span className="service-second">{ answer }</span>
                    </div>
                    <div className="service-features">
                        <ul>
                            <li> { a1 } </li>
                            <li> { a2 } </li>
                            <li> { a3 }</li>
                            <li> { a4 } </li>
                            <li> { a5 } </li>
                            <li> { a6 } </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SomeInfo;
