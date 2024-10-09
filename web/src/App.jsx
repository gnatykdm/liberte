import React from 'react';
import { Helmet } from 'react-helmet';
import liberticon from './shared/assets/images/libertlogo.jpg'; 
import Footer from './shared/ui/footer/Footer';
import SomeInfo from './widgets/someInfo/SomeInfo';
import OrderCall from './shared/ui/ordercall/OrderCall';
import MessageForm from './widgets/messageform/MessageForm';
import PageInfo from './shared/ui/pageInfo/PageInfo';
import ContactInfo from './widgets/contactInfo/ContactInfo';
import Services from './widgets/services/Services';
import MainPage from './pages/mainpages/main/MainPage';
import Header from './shared/ui/header/Header'; 
import MainAboutUs from './pages/mainpages/about/MainAboutUs';
import photo from './shared/assets/images/DeWatermark.ai_1727849070458-removebg-preview.png';
import './App.css'

const App = () => {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="UTF-8" />
        <link rel="icon" href={liberticon} type="image/png" />
      </Helmet>
      <MainAboutUs></MainAboutUs>
    </div>
  );
}
export default App;
