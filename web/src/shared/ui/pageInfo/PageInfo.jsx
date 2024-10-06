import React from "react";
import { Helmet } from "react-helmet";
import './PageInfo.css';

const PageInfo = ({ text }) => {
    return (
        <div className="text-block">

            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet"/>
            </Helmet>

            <div className="text">
                {text}
            </div>
            <div className="line"></div> {/* Добавляем div для линии */}
        </div>
    );
}

export default PageInfo;
