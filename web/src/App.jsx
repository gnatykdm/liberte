import React from 'react';
import { Helmet } from 'react-helmet';
import liberticon from './shared/assets/images/libertlogo.jpg'; 
import Footer from './shared/ui/footer/Footer';
import './App.css'

const App = () => {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="UTF-8" />
        <link rel="icon" href={liberticon} type="image/png" />
      </Helmet>
      <center>
        <Footer></Footer>
      </center>
    </div>
  );
}
export default App;
