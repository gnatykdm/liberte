import React from "react";
import { Helmet } from "react-helmet";
import './PageInfo.css';

const PageInfo = ({ text, isDarkMode }) => {
    return (
        <div className={`text-block ${isDarkMode ? 'dark' : ''}`}>

            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet"/>
            </Helmet>

            <div className={`text ${isDarkMode ? 'dark' : ''}`}>
                {text}
            </div>
            <div className="line"></div> 
        </div>
    );
}

export default PageInfo;
