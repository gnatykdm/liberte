import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import flag from '../../../../shared/assets/icons/ukraine.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import service_img from '../../../../shared/assets/images/service.jpg';
import './ServicePage.css';

const Service1PagePl = () => {
   const [isDarkMode, setIsDarkMode] = useState(() => {
      const savedTheme = localStorage.getItem('isDarkMode');
      return savedTheme === 'true'; 
   });

   const toggleTheme = () => {
      setIsDarkMode(prevMode => {
         const newMode = !prevMode; 
         localStorage.setItem('isDarkMode', newMode); 
         return newMode; 
      });
   };

   return (
      <div className={`service-page ${isDarkMode ? 'dark' : ''}`}>
         <Helmet>
            <title>Libert - FulFillment</title>
         </Helmet>

         <Header 
                image={flag}
                head={"Strona główna"}
                services={"Usługi"} 
                service_drop={"Transport ponadgabarytowy"}
                about={"O nas"}
                contacts={"Kontakt"}
                call={"Zamówienie rozmowy"}
                order={"Zamówienie"}
                social_networks={"Libert w mediach społecznościowych"}
                name_type={"Twoje imię"}
                tel_type={"Twój numer telefonu"}
                main_link={"/"}
                about_link={"/about"}
                contact_link={"/contact"}
                toggleTheme={toggleTheme} 
                isDarkMode={isDarkMode}
                messageStatus={"Wiadomość wysłana"}
                service1="FulFillment"
                service2="Międzynarodowa dostawa kurierska"
                service3="Transport ponadgabarytowy"
                service4="Usługi agencji celnej"
                service5="Logistyka magazynowa"
                service1_link={"/service1"}
                service2_link={"/service2"}
                service3_link={"/service3"}
                service4_link={"/service4"}
                service5_link={"/service5"}
            />

         <div className="some-age-info">
            <PageInfo text="FULFILLMENT" isDarkMode={isDarkMode} />
         </div>

         <div className={`service-content-about ${isDarkMode ? 'dark' : ''}`}>
            <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
               <p>W ramach usługi fulfillment oferujemy:</p>
               <ul>
                   <li>przyjmowanie i przetwarzanie paczek,</li>
                   <li>kontrolę ilościową i jakościową towarów, aby zapewnić zgodność z normami,</li>
                   <li>bezpieczne i zoptymalizowane przechowywanie produktów w naszym magazynie,</li>
                   <li>kompletowanie i profesjonalne pakowanie zamówień zgodnie z wymaganiami klienta,</li>
                   <li>drukowanie i przymocowywanie etykiet kurierskich do wysyłek,</li>
                   <li>sprawne wysyłanie i dostarczanie paczek do końcowych odbiorców za pośrednictwem niezawodnych usług dostawczych,</li>
                   <li>szybką i efektywną obsługę zwrotów, w tym ich kontrolę i przechowywanie.</li>
               </ul>
            </div>

            <div className="service-img-page">
               <img src={service_img} alt="Proces usługi Fulfillment" />
            </div>
         </div>

         <div className="center-content">
            <OrderCall
               part1="Twoje bezpieczeństwo to nasz cel. Zapewniamy dokładność, niezawodność oraz"
               part2="indywidualne podejście, aby logistyka była dla Ciebie jak najprostsza."
               order_call="Zamówienie rozmowy"
               order="Zamówienie rozmowy"
               name_type="Twoje imię"
               tel_type="Twój telefon"
               isDarkMode={isDarkMode}
               messageSuccess="Wiadomość wysłana"
               messageError="Problem z wysłaniem"
            />
         </div>

         <Footer
                head="Główne menu"
                head2="Menu"
                head3="Nasze kontakty"
                services={"Usługi"}
                contacts="Kontakt"
                main_link="/"
                about_link="/about"
                contact_link="/contact"
                about="O nas"
                service1="FulFillment"
                service2="Międzynarodowa dostawa kurierska"
                service3="Transport ponadgabarytowy"
                service4="Usługi agencji celnej"
                service5="Logistyka magazynowa"
                service1_link={"/service1"}
                service2_link={"/service2"}
                service3_link={"/service3"}
                service4_link={"/service4"}
                service5_link={"/service5"}
                />
      </div>
   );
}

export default Service1PagePl;
