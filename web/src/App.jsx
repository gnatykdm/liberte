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
import Header from './shared/ui/header/Header'; 
import './App.css'

const App = () => {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="UTF-8" />
        <link rel="icon" href={liberticon} type="image/png" />
      </Helmet>
      <Header></Header>
    </div>
  );
}
export default App;
