import React from 'react';
import { Helmet } from 'react-helmet';
import liberticon from './shared/assets/images/libertlogo.jpg';
import { Router, Routess } from 'react-router-dom';
import MainMap from  './shared/ui/map/MainMap';
import './App.css'

const App = () => {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="UTF-8" />
        <link rel="icon" href={liberticon} type="image/png" />
      </Helmet>
      <MainMap></MainMap>
    </div>
  );
}
export default App;
