
import React, { useState } from "react"; 
import { Helmet } from "react-helmet"; 
import Header from "../../../shared/ui/header/Header"; 
import { Link } from "react-router-dom"; 
import ukraine_flag from '../../../shared/assets/icons/ukraine.png'; 
import OrderCall from "../../../shared/ui/ordercall/OrderCall"; 
import Services from "../../../widgets/services/Services"; 
import Footer from "../../../shared/ui/footer/Footer"; 
import main_photo from '../../../shared/assets/images/headimg.png'; 
import './MainPage.css';

const MainPage = () => { 
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
        <div className={`main-page-desc ${isDarkMode ? 'dark' : ''}`}> 
            <Helmet> 
                <title>Libert - Негабаритні перевезення | Логістика для вашого бізнесу</title> 
                <meta name="description" content="Негабаритні перевезення, міжнародні та внутрішні перевезення, транспортування техніки та обладнання. Ми пропонуємо найкращі ціни на ринку для перевезення великих вантажів і спеціального обладнання." /> 
                <meta name="keywords" content="негабаритні перевезення, перевезення техніки, транспортування спеціального обладнання, логістика вантажів, перевезення великогабаритних вантажів, міжнародні перевезення, перевезення промислового обладнання" /> 
                <meta name="robots" content="index, follow" />
                
                {/* Open Graph */}
                <meta property="og:title" content="Libert - Негабаритні перевезення | Логістика для вашого бізнесу" />
                <meta property="og:description" content="Негабаритні перевезення, транспортування техніки та обладнання, міжнародні та внутрішні перевезення. Ми забезпечуємо найнижчі ціни та високий рівень сервісу." />
                <meta property="og:image" content={main_photo} />
                <meta property="og:url" content="https://www.libertgroup.pl" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Libert - Негабаритні перевезення | Логістика для вашого бізнесу" />
                <meta name="twitter:description" content="Негабаритні перевезення, транспортування техніки, міжнародні та внутрішні перевезення вантажів, перевезення великогабаритного обладнання та техніки." />
                <meta name="twitter:image" content={main_photo} />
            </Helmet>

            <Header 
                image={ukraine_flag}
                head={"Головна"} 
                services={"Послуги"} 
                service_drop={"Негабаритні перевезення"}
                about={"Про нас"} 
                contacts={"Контакти"} 
                call={"Замовити дзвінок"} 
                order={"Замовити"} 
                social_networks={"Libert у соціальних мережах"} 
                name_type={"Ваше ім'я"} 
                tel_type={"Ваш номер телефону"} 
                main_link={"/"} 
                about_link={"/about"} 
                contact_link={"/contact"} 
                toggleTheme={toggleTheme} 
                isDarkMode={isDarkMode} 
                messageStatus={"Повідомлення відправлено"} 
                service1="FulFillment" 
                service2="Негабаритні перевезення" 
                service3="Міжнародна кур'єрська доставка" 
                service4="Послуги митного агенства" 
                service5="Складська логістика" 
                service1_link={"/service1"} 
                service2_link={"/service3"} 
                service3_link={"/service2"} 
                service4_link={"/service4"} 
                service5_link={"/service5"} 
                languagelink_1={"/en"} 
                languagelink_2={"/"} 
                languagelink_3={"/pl"} 
                photo_link={"/"} 
                order_call_sending={"відправка повідомлення..."} 
                order_call_problem={"проблема з відправкою"} 
            />

            <div className="main-content">
                <div className="text-content-main">
                    <div className={`company-main-name-desc ${isDarkMode ? 'dark' : ''}`}>
                        логістичні <br />
                        <div className="highlites">рішення</div> для <br />
                        вашого бізнесу
                    </div>
                    <div className={`text-container-main ${isDarkMode ? 'dark' : ''}`}>
                        <p>
                            Ми є одними з лідерів у сфері перевезення <b className="some-cont">негабаритних вантажів</b>. 
                            За рахунок об'єму, який даємо перевізникам, маємо найнижчі ціни на ринку. Перевозимо від 
                            комбайнів, закінчуючи інфраструктурними проектами, включно з документальним супроводом. 
                            За нас говорять реалізовані нами проекти на сайті 
                            <a href="https://civil-protection-humanitarian-aid.ec.europa.eu/news-stories/stories/assembling-future-providing-new-homes-ukrainians-displaced-war_en" target="_blank" rel="noopener noreferrer"> Єврокомісії</a>.
                        </p>
                    </div>
                    <button className="btn-main-desc">
                        <Link to="/contact" style={{ textDecoration: 'none', color: '#ffffff' }}>
                            Почати співпрацю 
                        </Link>
                    </button>
                </div>
                <img src={main_photo} alt="photo" className="main-photo-desc" />
            </div>

            <center>
                <Services
                    isDarkMode={isDarkMode}
                    service1_link={"/service3"}
                    service2_link={"/service1"}
                    service3_link={"/service2"}
                    service4_link={"/service4"}
                    service5_link={"/service5"}
                    service1_name={"Негабаритні перевезення"}
                    service2_name={"Fulfillment"}
                    service3_name={"Міжнародна кур'єрська доставка"}
                    service4_name={"Послуги митного агентства"}
                    service5_name={"Складська логістика"}
                />
                <OrderCall
                    part1={"Ваш спокій — наша мета. Ми забезпечуємо точність, надійність та"}
                    part2={"індивідуальний підхід, щоб зробити логістику максимально простою."}
                    order_call={"Замовити дзвінок"}
                    order={"Замовити дзвінок"}
                    name_type={"Ваше ім'я"}
                    tel_type={"Ваш телефон"}
                    isDarkMode={isDarkMode}
                    messageSuccess={"Повідомлення відправлено"}
                    messageError={"Проблема із відправкою"}
                    order_call_sending={"відправка повідомлення..."}
                    order_call_problem={"проблема з відправкою"}
                />
                <Footer
                    head="Головне меню"
                    head2="Меню"
                    head3="Наші контакти"
                    services={"Послуги"}
                    contacts="Контакти"
                    main_link="/"
                    about_link="/about"
                    contact_link="/contact"
                    about="Про Нас"
                    service1="Негабаритні перевезення"
                    service2="Fulfillment"
                    service3="Міжнародна кур'єрська доставка"
                    service4="Послуги митного агенства"
                    service5="Складська Логістика"
                    service1_link={"/service3"}
                    service2_link={"/service1"}
                    service3_link={"/service2"}
                    service4_link={"/service4"}
                    service5_link={"/service5"}
                />
            </center>
        </div>
    );
};

export default MainPage;
