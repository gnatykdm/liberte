import React from 'react';
import App from '../../../App';
import {createRoot} from 'react-dom/client';
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import './MainMap.css';

const MainMap = () => {

    return ( 
    <div className="main-map-page">
            <div className="map-section">
                <div className="gmap-frame">
                <iframe id='gmap-canvas' frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Przemys%C5%82owa%206,%20Rzesz%C3%B3w+(Libert%20Office)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                <a href="https://www.gps.ie/">gps tracker sport</a></iframe>
                </div>
            </div>
    </div> 
    );  

}

export default MainMap;