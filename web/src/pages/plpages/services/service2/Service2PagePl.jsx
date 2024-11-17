import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import flag from '../../../../shared/assets/icons/poland.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import international_delivery_logo from '../../../../shared/assets/images/internation_delivery_logo.png';

const Service2PagePl = () => {
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
                <title>Libert - Międzynarodowa dostawa kurierska</title>
            </Helmet>

            <Header 
                image={flag}
                head={"Strona główna"}
                services={"Usługi"} 
                service_drop={"Transport ponadgabarytowy"}
                about={"O nas"}
                contacts={"Kontakt"}
                call={"Kontakt"}
                order={"Kontakt"}
                social_networks={"Libert w mediach społecznościowych"}
                name_type={"Twoje imię"}
                tel_type={"Twój numer telefonu"}
                main_link={"/pl"}
                about_link={"/about/pl"}
                contact_link={"/contact/pl"}
                toggleTheme={toggleTheme} 
                isDarkMode={isDarkMode}
                messageStatus={"Wiadomość wysłana"}
                service1="FulFillment"
                service2="Międzynarodowa dostawa kurierska"
                service3="Transport ponadgabarytowy"
                service4="Usługi agencji celnej"
                service5="Logistyka magazynowa"
                service1_link={"/service1/pl"}
                service2_link={"/service2/pl"}
                service3_link={"/service3/pl"}
                service4_link={"/service4/pl"}
                service5_link={"/service5/pl"}
                languagelink_1={"/service2/en"}
                languagelink_2={"/service2"}
                languagelink_3={"/service2/pl"}
                photo_link={"/pl"}
            />

            <div className="some-age-info">
                <PageInfo text="Międzynarodowa dostawa kurierska" isDarkMode={isDarkMode} />
            </div>
            
            <div className={`service-content-about ${isDarkMode ? 'dark' : ''}`}>
                <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                    <p>Międzynarodowa dostawa kurierska obejmuje:</p>
                    <ul>
                        <li><b className="some-cont">Dostawę kurierską:</b> Oferujemy usługi łączące dokładność, niezawodność i spersonalizowane podejście, aby zapewnić wygodną logistykę.</li>
                        <li><b className="some-cont">Współpracę z firmami kurierskimi:</b> Współpracujemy z ukraińskimi i europejskimi partnerami, co pozwala na obniżenie kosztów dostawy.</li>
                        <li><b className="some-cont">Oszczędności na dostawie:</b> Dzięki naszej współpracy otrzymujesz korzystniejsze ceny niż przy samodzielnej organizacji dostawy.</li>
                        <li><b className="some-cont">Jakość i szybkość:</b> Zapewniamy dostawę bez kompromisów w zakresie jakości i szybkości. Czas dostawy wynosi od 2 do 14 dni roboczych, w zależności od kraju docelowego.</li>
                    </ul>
                    <p>Nasz zespół jest gotowy pomóc Ci we wszystkich aspektach międzynarodowej dostawy, aby Twoje przesyłki zawsze docierały na czas i w nienaruszonym stanie.</p>
                </div>
                <div className="service-image-main-container">
                        <img src={international_delivery_logo} alt="logistic" className="service-image-desc"/>
                </div>
            </div>

            <center>
                <OrderCall
                    part1={"Twoje bezpieczeństwo to nasz cel. Zapewniamy dokładność, niezawodność oraz"}
                    part2={"indywidualne podejście, aby uczynić międzynarodową dostawę jak najprostszą dla Ciebie"}
                    order_call={"Kontakt"}
                    order={"Kontakt"}
                    name_type={"Twoje imię"}
                    tel_type={"Twój telefon"}
                    isDarkMode={isDarkMode}
                    messageSuccess={"Wiadomość wysłana"}
                    messageError={"Problem z wysłaniem"}
                    order_call_sending={"wysyłanie wiadomości..."}
                    order_call_problem={"problem z wysyłaniem"}
                />

            <Footer
                head="Główne menu"
                head2="Menu"
                head3="Nasze kontakty"
                services={"Usługi"}
                contacts="Kontakt"
                main_link="/pl"
                about_link="/about/pl"
                contact_link="/contact/pl"
                about="O nas"
                service1="FulFillment"
                service2="Międzynarodowa dostawa kurierska"
                service3="Transport ponadgabarytowy"
                service4="Usługi agencji celnej"
                service5="Logistyka magazynowa"
                service1_link={"/service1/pl"}
                service2_link={"/service2/pl"}
                service3_link={"/service3/pl"}
                service4_link={"/service4/pl"}
                service5_link={"/service5/pl"}
                />
            </center>
        </div>
    );
}
export default Service2PagePl;
